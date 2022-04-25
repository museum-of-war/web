import { useAppRouter } from '@hooks/useAppRouter';
import React, { useEffect, useState } from 'react';
import { AuctionItemType } from '@sections/types';
import { calculateTimeLeft } from '@sections/AboutProject/ContentTop/CountdownBanner';
import { useWeb3Modal } from '@hooks/useWeb3Modal';

type NftCardProps = {
  type?: string;
  orderIndex: number;
};

function NftCard({
  imageSrc,
  name,
  index,
  orderIndex,
  endsIn,
  contractAddress,
  tokenId,
  type,
}: Pick<
  AuctionItemType,
  'imageSrc' | 'name' | 'index' | 'endsIn' | 'contractAddress' | 'tokenId'
> &
  NftCardProps) {
  const { push } = useAppRouter();
  const { getAuctionInfo } = useWeb3Modal();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(`${endsIn}`));
  const [isSold, setIsSold] = useState(true);
  const [currentBid, setCurrentBid] = useState<{
    bid: string;
    nextMinBid: string;
  }>({ bid: '0', nextMinBid: '' });

  const navlinkToNft = () => push(`/auction/${index}`);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(`${endsIn}`));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    getAuctionInfo(contractAddress, tokenId)
      .then(({ bid, nextMinBid, isSold }) => {
        setCurrentBid({ bid, nextMinBid });
        setIsSold(isSold);
      })
      .catch((error) => console.error(`NftCard ${error}`));
  }, []);

  return (
    <div
      onClick={navlinkToNft}
      className="mobile:my-15px tablet:my-0 desktop:my-0 mobile:border-0 tablet:border-4 desktop:border-4 border-carbon border-solid hover:border-4 hover:border-white hover:border-solid hover:cursor-pointer"
    >
      <div className="flex justify-center">
        <img
          alt={name}
          src={imageSrc}
          className={`${
            orderIndex! < 2 && !type ? 'laptop:h-[544px]' : 'laptop:h-[240px]'
          } ${!orderIndex && !type ? 'tablet:h-[624px]' : 'tablet:h-[288px]'}
          mobile:h-[270px] object-contain`}
        />
      </div>
      <div className="p-10px">
        <h3 className="font-rblack text-20px leading-[240%]">{name}</h3>
        <div className="flex justify-between">
          {!isSold && (
            <div>
              <p className="font-rlight text-12px leading-100% opacity-70">
                Current bid
              </p>
              <p className="font-rlight tablet:text-16px mobile:text-14px leading-150%">
                {currentBid.bid} ETH
              </p>
            </div>
          )}
          {timeLeft.isLeft && (
            <div className={`${timeLeft.days ? '' : 'w-[100px]'}`}>
              <p className="font-rlight text-12px leading-100% opacity-70 ">
                Ends in
              </p>
              <p className="font-rlight tablet:text-16px mobile:text-14px leading-150% w-100%">
                {timeLeft.days
                  ? `${timeLeft.days} days`
                  : `${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NftCard;
