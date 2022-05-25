import React, { useEffect, useState } from 'react';
import { AuctionVersion } from '@museum-of-war/auction';
import { calculateTimeLeft } from '@sections/AboutProject/ContentTop/CountdownBanner';
import { usePopup } from '@providers/PopupProvider';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import Button from '@components/Button';

type BidCardProps = {
  isMobile?: boolean;
  endsIn: Date;
  startsAt?: Date;
  currentBid: string;
  proposedBids: string[];
  contractAddress: string;
  tokenId: number;
  isSale: boolean;
  hasBid: boolean;
  buyNowPrice?: string;
  auctionVersion: AuctionVersion;
  updateCallback: () => Promise<void>;
};

export const BidCard = ({
  currentBid,
  proposedBids,
  isMobile,
  endsIn,
  startsAt,
  contractAddress,
  tokenId,
  isSale,
  hasBid,
  buyNowPrice,
  auctionVersion,
  updateCallback,
}: BidCardProps) => {
  const [isStarted, setIsStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(`${startsAt ?? endsIn}`),
  );
  const [usdPrice, setUsdPrice] = useState<string | null>(null);
  const { showPopup } = usePopup();
  const { makeBid, getUsdPriceFromETH } = useWeb3Modal();

  useEffect(() => {
    getUsdPriceFromETH(currentBid).then(setUsdPrice);
  }, [currentBid]);

  useEffect(() => {
    const interval = setInterval(() => {
      const isStarted = !calculateTimeLeft(`${startsAt ?? new Date()}`).isLeft;
      setIsStarted(isStarted);
      const newTimeLeft = calculateTimeLeft(`${isStarted ? endsIn : startsAt}`);
      if (newTimeLeft.isLeft !== timeLeft.isLeft)
        updateCallback?.().catch((e) => console.error(e));
      setTimeLeft(newTimeLeft);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft, endsIn, startsAt]);

  useEffect(() => {
    const interval = setInterval(async () => {
      const price = await getUsdPriceFromETH(currentBid).catch((e) => {
        console.error(e);
        return null;
      });
      if (price) setUsdPrice(price);
    }, 10000);
    return () => clearInterval(interval);
  }, [currentBid]);

  return (
    <>
      <div className="flex items-start justify-between mobile:flex-col tablet:flex-row mobile:mt-20px tablet:mt-[0px]">
        <div>
          <p className="font-rlight text-14px opacity-70 tablet:mb-12px">
            {isSale ? 'Current price' : hasBid ? 'Current bid' : 'Minimum bid'}
          </p>
          <p className="mobile:text-27px tablet:text-32px font-rblack">
            {+currentBid ? currentBid : '—'} ETH
          </p>
          {!!usdPrice && (
            <p className="font-rlight mobile:text-14px tablet:text-16px">
              ${+usdPrice ? usdPrice : '—'}
            </p>
          )}
        </div>
        {timeLeft.isLeft && (
          <>
            <div className="self-end tablet:h-60px mobile:h-4px tablet:w-[4px] mobile:w-full mobile:my-20px tablet:my-[0px] bg-carbon dark:bg-white" />
            <div>
              <p className="font-rlight text-14px opacity-70 tablet:mb-12px">
                {isStarted ? 'Ends in' : 'Starts in'}
              </p>
              <div className="flex -mx-10px">
                <div className="text-center px-10px">
                  <p className="mobile:text-27px tablet:text-32px font-rblack">
                    {timeLeft.days}
                  </p>
                  <p className="font-rlight mobile:text-14px tablet:text-16px">
                    days
                  </p>
                </div>
                <div className="text-center px-10px">
                  <p className="mobile:text-27px tablet:text-32px font-rblack">
                    {timeLeft.hours}
                  </p>
                  <p className="font-rlight mobile:text-14px tablet:text-16px">
                    hours
                  </p>
                </div>
                <div className="text-center px-10px">
                  <p className="mobile:text-27px tablet:text-32px font-rblack">
                    {timeLeft.minutes}
                  </p>
                  <p className="font-rlight mobile:text-14px tablet:text-16px">
                    minutes
                  </p>
                </div>
                <div className="text-center px-10px">
                  <p className="font-rblack mobile:text-27px tablet:text-32px font-rblack">
                    {timeLeft.seconds}
                  </p>
                  <p className="mobile:text-14px tablet:text-16px">seconds</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {!isMobile && isStarted && (
        <Button
          mode="custom"
          label={isSale ? 'Buy Now' : 'Place Bid'}
          onClick={async () => {
            if (isSale) {
              try {
                await makeBid(
                  contractAddress,
                  tokenId,
                  buyNowPrice!,
                  auctionVersion,
                );
              } catch (error: any) {
                console.error(error?.message ?? error);
              } finally {
                await updateCallback?.().catch((e) => console.error(e));
              }
            } else {
              showPopup('bid', {
                proposedBids,
                contractAddress,
                tokenId,
                auctionVersion,
                updateCallback,
              });
            }
          }}
          className="bg-white text-carbon w-100% mt-24px"
        />
      )}
    </>
  );
};
