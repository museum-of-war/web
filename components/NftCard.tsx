import { useAppRouter } from '@hooks/useAppRouter';
import React, { useEffect, useState } from 'react';
import { AuctionCollectionType, AuctionItemType } from '@sections/types';
import { calculateTimeLeft } from '@sections/AboutProject/ContentTop/CountdownBanner';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import { useViewPort } from '@hooks/useViewport';
import ScaledImage, { BreakpointRatios } from '@components/ScaledImage';
import { isAnimated } from '@sections/utils';

type NftCardProps = {
  type?: string;
  orderIndex: number;
  isCollection?: boolean;
  breakpoints: BreakpointRatios;
};

function NftCard({
  imageSrc,
  breakpoints,
  name,
  index,
  orderIndex,
  startsAt,
  endsIn,
  contractAddress,
  tokenId,
  type,
  isSale,
  isCollection,
}: Pick<AuctionItemType, 'imageSrc' | 'name' | 'index' | 'tokenId' | 'isSale'> &
  Pick<AuctionCollectionType, 'contractAddress' | 'endsIn' | 'startsAt'> &
  NftCardProps) {
  const { push } = useAppRouter();
  const { getAuctionInfo } = useWeb3Modal();
  const { isTouch } = useViewPort();
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(`${startsAt ?? endsIn}`),
  );
  const [isStarted, setIsStarted] = useState(false);
  const [isSold, setIsSold] = useState(true);
  const [currentBid, setCurrentBid] = useState<{
    bid: string;
    nextMinBid: string;
  }>({ bid: '0', nextMinBid: '' });

  const navlinkToNft = () => (isStarted ? push(`/auction/${index}`) : null);

  useEffect(() => {
    const interval = setInterval(() => {
      const isStarted = !calculateTimeLeft(`${startsAt ?? new Date()}`).isLeft;
      setIsStarted(isStarted);
      setTimeLeft(calculateTimeLeft(`${isStarted ? endsIn : startsAt}`));
    }, 1000);
    return () => clearInterval(interval);
  }, [endsIn, startsAt]);

  useEffect(() => {
    if (contractAddress)
      getAuctionInfo(contractAddress, tokenId)
        .then(({ bid, nextMinBid, isSold }) => {
          setCurrentBid({ bid, nextMinBid });
          setIsSold(isSold);
        })
        .catch((error) => console.error(`NftCard ${error}`));
  }, [contractAddress, tokenId]);

  return (
    <div
      onClick={navlinkToNft}
      className={`
        mobile:my-15px tablet:my-0 desktop:my-0 mobile:border-0 tablet:border-4 desktop:border-4 border-carbon
        border-solid ${
          isTouch
            ? ''
            : 'hover:border-4 hover:border-white hover:border-solid hover:cursor-pointer'
        }
       `}
    >
      <div className="flex justify-center relative">
        <ScaledImage
          alt={name}
          src={imageSrc}
          className={`${
            (orderIndex! < 2 || isCollection) && !type
              ? 'desktop:h-[544px]'
              : 'desktop:h-[240px]'
          } ${!orderIndex && !type ? 'tablet:h-[624px]' : 'tablet:h-[288px]'}
          mobile:h-[270px] object-contain`}
          breakpoints={breakpoints}
          postLoadOriginal={isAnimated(imageSrc)}
        />
      </div>
      <div className="p-10px">
        <h3 className="font-rblack text-20px leading-[240%]">{name}</h3>
        <div className="flex justify-between">
          {!isSold && isStarted && (
            <div>
              <p className="font-rlight text-12px leading-100% opacity-70">
                {isSale ? 'Current price' : 'Current bid'}
              </p>
              <p className="font-rlight tablet:text-16px mobile:text-14px leading-150%">
                {currentBid.bid} ETH
              </p>
            </div>
          )}
          {timeLeft.isLeft && (
            <div className={`${timeLeft.days ? '' : 'w-[100px]'}`}>
              <p className="font-rlight text-12px leading-100% opacity-70 ">
                {isStarted ? 'Ends in' : 'Starts in'}
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
