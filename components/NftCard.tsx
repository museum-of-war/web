import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';
import { AuctionCollectionType, AuctionItemType } from '@sections/types';
import { calculateTimeLeft } from '@sections/AboutProject/ContentTop/CountdownBanner';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import { useViewPort } from '@hooks/useViewport';
import { useIsMounted } from '@hooks/useIsMounted';
import ScaledImage, { BreakpointRatios } from '@components/ScaledImage';

type NftCardProps = {
  type?: string;
  orderIndex: number;
  isCollection?: boolean;
  breakpoints: BreakpointRatios;
};

function NftCard({
  imageSrc,
  animationSrc,
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
  version,
  externalBid,
}: Pick<
  AuctionItemType,
  | 'imageSrc'
  | 'animationSrc'
  | 'name'
  | 'index'
  | 'tokenId'
  | 'isSale'
  | 'externalBid'
> &
  Pick<
    AuctionCollectionType,
    'contractAddress' | 'endsIn' | 'startsAt' | 'version'
  > &
  NftCardProps) {
  const { getAuctionInfo } = useWeb3Modal();
  const { isTouch } = useViewPort();
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(`${startsAt ?? endsIn ?? ''}`),
  );
  const [localStartsAt, setLocalStartsAt] = useState(startsAt);
  const [endsAt, setEndsAt] = useState(endsIn);
  const [isStarted, setIsStarted] = useState(false);
  const [isSold, setIsSold] = useState(false);
  const [hasBid, setHasBid] = useState(false);
  const [currentBid, setCurrentBid] = useState<{
    bid: string;
    nextMinBid: string;
  }>({ bid: '0', nextMinBid: '' });

  const cardId = useMemo(
    () => `${contractAddress}-${tokenId}`,
    [contractAddress, tokenId],
  );
  const isMounted = useIsMounted();

  useEffect(() => {
    const interval = setInterval(() => {
      const isStarted = !calculateTimeLeft(`${localStartsAt ?? new Date()}`)
        .isLeft;
      setIsStarted(isStarted);
      setTimeLeft(calculateTimeLeft(`${isStarted ? endsAt : localStartsAt}`));
    }, 1000);
    return () => clearInterval(interval);
  }, [endsAt, localStartsAt]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (contractAddress) {
        getAuctionInfo(contractAddress, tokenId, version, externalBid)
          .then(({ bid, nextMinBid, tokensLeft, startsAt, endsAt, hasBid }) => {
            if (!isMounted.current) {
              return;
            }
            if (startsAt && (!localStartsAt || startsAt > localStartsAt))
              setLocalStartsAt(startsAt);
            if (endsAt && (!endsIn || endsAt > endsIn)) setEndsAt(endsAt);
            setCurrentBid({ bid, nextMinBid });
            setIsSold(!tokensLeft);
            setHasBid(hasBid);
          })
          .catch((error) => console.error(`NftCard ${error}`));
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [contractAddress, tokenId]);

  return (
    <Link href={`/auction/${index}`} passHref>
      <a id={cardId}>
        <div
          className={`
        mobile:my-15px tablet:my-0 desktop:my-0 mobile:border-0 tablet:border-4 desktop:border-4 border-carbon h-full
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
              postLoad={imageSrc.endsWith('.gif') || animationSrc}
              className={`${
                (orderIndex! < 2 || isCollection) && !type
                  ? 'desktop:h-[544px]'
                  : 'desktop:h-[240px]'
              } ${
                !orderIndex && !type ? 'tablet:h-[624px]' : 'tablet:h-[288px]'
              }
                mobile:h-[270px] object-contain`}
              breakpoints={breakpoints}
            />
          </div>
          <div className="py-12px">
            <h3
              className="font-rblack text-20px leading-24px line-clamp-3 mb-12px"
              title={name}
            >
              {name}
            </h3>
            <div className="flex justify-between">
              {!isSold && isStarted && +currentBid.bid > 0 && (
                <div>
                  <p className="font-rlight text-12px leading-100% opacity-70">
                    {isSale
                      ? 'Current price'
                      : hasBid
                      ? timeLeft.isLeft
                        ? 'Current bid'
                        : 'Last bid'
                      : 'Minimum bid'}
                  </p>
                  <p className="font-rlight tablet:text-16px mobile:text-14px leading-150%">
                    {currentBid.bid} ETH
                  </p>
                </div>
              )}
              {timeLeft.isLeft && (!isStarted || !isSold) && (
                <div
                  className={`${
                    timeLeft.days ? '' : 'w-[100px] whitespace-nowrap'
                  }`}
                >
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
              {isSold && isStarted && (
                <p className="font-rlight text-12px leading-100% opacity-70 ">
                  Sold
                </p>
              )}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default NftCard;
