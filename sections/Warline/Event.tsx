import React, { useMemo, useState } from 'react';
import { useViewPort } from '@hooks/useViewport';
import { EventType } from '@sections/types';
import { openInNewTab } from '@sections/utils';
import { getUrls } from '@sections/Warline/WarlineUrls';
import Link from 'next/link';
import { ToggleOptionsType } from '@components/Toggle';
import Button from '@components/Button';
import { useAppRouter } from '@hooks/useAppRouter';

type PropsEvent = {
  eventData: EventType;
  dayNo: number;
  date: string;
  idx: number;
  eventsData: EventType[];
  allEvents: Array<EventType>;
  view: ToggleOptionsType;
};

const rand_imgs: string[] = [
  'img/dots-1.png',
  'img/dots-2.png',
  'img/dots-3.png',
  'img/dots-4.png',
  'img/dots-5.png',
  'img/dots-6.png',
  'img/dots-7.png',
  'img/dots-8.png',
];

const Event = ({ eventData, idx, view }: PropsEvent) => {
  const { push } = useAppRouter();
  const { isMobile, isTablet } = useViewPort();
  const [toggler, setToggler] = useState<boolean>(false);

  const alt = useMemo(() => {
    return `Day ${eventData.DayNo}, ${eventData.Time}`;
  }, [eventData]);

  const TokenidFormatter = (tokenId: string): string => {
    return parseInt(tokenId) < 10
      ? '#000' + tokenId
      : parseInt(tokenId) < 100
      ? '#00' + tokenId
      : parseInt(tokenId) < 1000
      ? '#0' + tokenId
      : '#' + tokenId;
  };
  const shortView = useMemo(() => view === 'days', [view]);

  const renderImage = (className: string) => {
    const randomSrc = rand_imgs[idx % 8] as string;
    const { previewSrc, animationSrc, isAnimation } = getUrls(
      eventData.Tokenid,
      eventData.ImageType,
      randomSrc as string,
    );

    return (
      <>
        <Link href={`/warline/${eventData.Tokenid}`} passHref>
          <img
            alt={alt}
            onClick={() => setToggler(!toggler)}
            src={previewSrc}
            className={className}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = randomSrc;
            }}
            onLoad={({ currentTarget }) => {
              if (isAnimation && currentTarget.src.endsWith(previewSrc)) {
                currentTarget.src = animationSrc;
              }
            }}
          />
        </Link>
      </>
    );
  };

  const renderLinkButton = (
    auctionBtnCn: string = '',
    linkBtnCn: string = '',
  ): React.ReactElement => {
    return (
      <div>
        <Button
          onClick={async () => {
            await push(`/warline/${eventData.Tokenid}`);
          }}
          mode="secondary"
          label="See Details"
          className={linkBtnCn}
        />
      </div>
    );
  };

  return isMobile ? (
    <div
      className={`flex flex-col items-top ${
        !shortView ? 'mb-60px' : 'min-w-124px w-full'
      }`}
    >
      {renderImage('w-100%')}
      <div className="mt-20px flex flex-col justify-between">
        <div>
          <div className="flex flex-row items-center justify-between ">
            <p
              className={`font-rblack ${
                !shortView ? 'leading-32px text-32px' : 'text-14px'
              } `}
            >
              {eventData.Time}
            </p>
            <p className={`font-rlight ${shortView ? 'text-12px' : ''}`}>
              {TokenidFormatter(eventData.Tokenid)}
            </p>
          </div>
          {!shortView && (
            <>
              <p
                className="font-rnarrow pt-15px"
                style={{ overflowWrap: 'anywhere' }}
              >
                {eventData.Headline}
              </p>
              <div
                className="flex flex-row items-center justify-between mt-16px"
                onClick={() => {
                  openInNewTab(eventData.TwitterUrl);
                }}
              >
                {eventData.TwitterUsername?.length > 0 && (
                  <p className="font-rlight ">@{eventData.TwitterUsername}</p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  ) : isTablet ? (
    <div
      className={
        shortView
          ? 'flex flex-col justify-between min-w-176px w-full'
          : 'flex flex-row items-top mb-60px'
      }
    >
      {renderImage(
        shortView
          ? 'w-40vw w-full'
          : 'w-40vw max-w-300px max-h-300px h-40vw mr-50px',
      )}
      <div className="flex flex-col justify-between">
        <div>
          <div
            className={`flex flex-row items-center justify-between
                          ${shortView ? '' : 'mb-32px'}`}
          >
            <p
              className={`font-rblack leading-32px
            ${!shortView ? 'text-32px' : 'text-20px'}`}
            >
              {eventData.Time}
            </p>
            <p className={`font-rlight ${shortView ? 'text-14px' : ''}`}>
              {TokenidFormatter(eventData.Tokenid)}
            </p>
          </div>
          {!shortView && (
            <>
              <p className="font-rnarrow line-clamp-3">{eventData.Headline}</p>
              <div className="flex flex-row items-center justify-between pt-15px">
                {eventData.TwitterUsername?.length > 0 && (
                  <p
                    className="font-rligh"
                    onClick={() => openInNewTab(eventData.TwitterUrl)}
                  >
                    @{eventData.TwitterUsername}
                  </p>
                )}
              </div>
            </>
          )}
        </div>
        {!shortView &&
          renderLinkButton(
            'font-rnarrow  border-black border-y-4 py-5px w-100%',
            'font-rblack',
          )}
      </div>
    </div>
  ) : (
    <div
      className={
        shortView
          ? 'flex flex-col justify-between min-w-200px w-full'
          : 'flex flex-row items-top mb-60px'
      }
    >
      {renderImage(
        shortView
          ? 'w-full hover:cursor-pointer'
          : 'max-w-300px max-h-300px h-240px w-248px mr-50px hover:cursor-pointer',
      )}
      <div className="w-100% flex flex-col justify-between">
        <div>
          <div
            className={`flex flex-row items-center justify-between
                            ${shortView ? 'py-16px' : ''}`}
          >
            <p className="font-rblack leading-32px text-32px">
              {eventData.Time}
            </p>
            <p className="font-rlight">{TokenidFormatter(eventData.Tokenid)}</p>
          </div>
          {!shortView && (
            <>
              <p className="font-rnarrow mt-24px line-clamp-3">
                {eventData.Headline}
              </p>
              {eventData.TwitterUsername?.length > 0 && (
                <div
                  className="font-rlight pt-24px hover:cursor-pointer"
                  onClick={() => openInNewTab(eventData.TwitterUrl)}
                >
                  @{eventData.TwitterUsername}
                </div>
              )}
            </>
          )}
        </div>
        {!shortView && (
          <>
            {renderLinkButton(
              'font-rnarrow  border-black border-y-4 py-5px w-100%',
              'font-rblack',
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Event;
