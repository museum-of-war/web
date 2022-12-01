import React, { useMemo } from 'react';
import { EventType } from '@sections/types';
import { getUrls } from '@utils/Warline/WarlineUrls';
import Link from 'next/link';
import Button from '@components/Button';
import ScaledImage, { BreakpointRatios } from '@components/ScaledImage';

type EventProps = {
  eventData: EventType;
  idx: number;
  showTime?: boolean;
  extendedView?: boolean;
  small?: boolean;
  onBuy: () => void;
  onJoinList: () => void;
};

const rand_imgs: string[] = [
  '/img/dots-1.png',
  '/img/dots-2.png',
  '/img/dots-3.png',
  '/img/dots-4.png',
  '/img/dots-5.png',
  '/img/dots-6.png',
  '/img/dots-7.png',
  '/img/dots-8.png',
];

const Event = ({
  eventData,
  idx,
  showTime = false,
  extendedView = false,
  small = false,
  onBuy,
  onJoinList,
}: EventProps) => {
  const randomSrc = rand_imgs[idx % 8] as string;
  const { originalSrc, previewSrc, animationSrc, isAnimation } = getUrls(
    eventData.Tokenid,
    eventData.ImageType,
    randomSrc as string,
  );

  const formattedTokenId = useMemo(() => {
    return parseInt(eventData.Tokenid) < 10
      ? '#000' + eventData.Tokenid
      : parseInt(eventData.Tokenid) < 100
      ? '#00' + eventData.Tokenid
      : parseInt(eventData.Tokenid) < 1000
      ? '#0' + eventData.Tokenid
      : '#' + eventData.Tokenid;
  }, [eventData.Tokenid]);

  const breakpoints: BreakpointRatios = small
    ? [
        {
          lowerBound: 'mobile',
          width: 150,
        },
      ]
    : [
        {
          lowerBound: 'tablet',
          width: 300,
        },
      ];

  return (
    <div className="flex flex-col tablet:flex-row">
      <Link href={`/warline/${eventData.Tokenid}`} passHref>
        <a
          className={`group flex flex-col cursor-pointer w-full ${
            extendedView ? 'tablet:max-w-[288px] desktop:max-w-[240px]' : ''
          }`}
        >
          <div className="relative aspect-square">
            <div className="relative">
              <ScaledImage
                alt={`${eventData.FullDate}, ${eventData.Time}`}
                src={isAnimation ? previewSrc : originalSrc}
                fallbackSrc={isAnimation ? previewSrc : randomSrc}
                postLoad={isAnimation ? animationSrc : false}
                containerClassName="aspect-square"
                className={`aspect-square w-full ${
                  extendedView
                    ? 'tablet:max-w-[288px] desktop:max-w-[240px]'
                    : ''
                }`}
                breakpoints={breakpoints}
                lazyload
              />
              <div
                className={`absolute -inset-8px border-4 border-carbon opacity-0 transition-opacity ${
                  small ? 'group-hover:opacity-100' : ''
                }`}
              />
            </div>
            {(eventData.IsOnSale || eventData.IsWhitelisted) &&
              eventData.ImageType !== 'placeholder.png' && (
                <div
                  className={`font-rblack cursor-pointer select-none absolute border-2 border-carbon rounded-full bg-beige ${
                    small
                      ? 'px-8px text-10px leading-16px tablet:text-12px tablet:leading-20px -top-4 -right-4'
                      : 'px-16px text-14px leading-28px -top-7 -right-7'
                  }`}
                >
                  {eventData.IsWhitelisted ? 'Whitelisted' : 'On Sale'}
                </div>
              )}
          </div>
          {showTime && !extendedView && (
            <div className="mt-8px flex flex-row justify-between items-center">
              <p className="font-rblack text-14px tablet:text-20px">
                {eventData.Time}
              </p>
              <p className="font-rlight text-12px tablet:text-14px">
                {formattedTokenId}
              </p>
            </div>
          )}
        </a>
      </Link>

      {extendedView && (
        <div className="flex flex-col justify-between tablet:flex-1 mt-10px tablet:mt-0 tablet:ml-48px">
          <div>
            <div className="flex flex-row justify-between items-center">
              <p className="font-rblack leading-32px text-27px tablet:text-32px">
                {eventData.Time}
              </p>
              <p className="font-rlight text-12px tablet:text-14px">
                {formattedTokenId}
              </p>
            </div>

            <p className="mt-16px tablet:mt-24px font-rnarrow tablet:line-clamp-3">
              {eventData.Headline}
            </p>

            {eventData.TwitterUsername?.length > 0 && (
              <a
                className="block mt-16px tablet:mt-24px font-rlight"
                href={eventData.TwitterUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                @{eventData.TwitterUsername}
              </a>
            )}
          </div>

          <div className="mt-24px hidden tablet:flex grid-flow-col gap-32px items-center">
            {eventData.IsWhitelisted && (
              <Button
                mode="secondary"
                label="Get NFT"
                className="font-rblack"
                onClick={onJoinList}
              />
            )}
            {eventData.IsOnSale && (
              <Button
                mode="secondary"
                label="Buy NFT"
                className="font-rblack"
                onClick={onBuy}
              />
            )}
            <Link href={`/warline/${eventData.Tokenid}`} passHref>
              <a className="font-rblack cursor-pointer py-5px border-b-4 hover:border-carbon hover:border-b-4 hover:border-solid border-transparent">
                See details
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;
