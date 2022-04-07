import React, { useMemo, useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { useViewPort } from '@hooks/useViewport';
import { EventType } from '@sections/types';
import { openInNewTab } from '@sections/utils';
import { LinkButton } from '@components/LinkButton';
import { getUrls } from '@sections/Warline/WarlineUrls';
import { usePopup } from '@providers/PopupProvider';
import Link from 'next/link';
import { rand_imgs } from "@sections/Warline/constants";
import { TokenidFormatter } from "@sections/Warline/utils";
import { ToggleOptionsType } from "@components/Toggle";

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

const Event = ({ eventData, dayNo, idx, allEvents, view }: PropsEvent) => {
  const { isMobile, isTablet } = useViewPort();
  const { showPopup } = usePopup();
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
    const { previewSrc, originalSrc, animationSrc, isAnimation } = getUrls(
      eventData.Tokenid,
      eventData.ImageType,
      randomSrc as string,
    );

    return (
      <>
        <Link href={`/warline/${idx + 1}`} passHref>
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
          {/* <FsLightbox toggler={toggler} sources={[originalSrc]} /> */}
        </Link>
      </>
    );
  };

  const renderLinkButton = (
    auctionBtnCn: string = "",
    linkBtnCn: string = ""
  ): React.ReactElement => {
    return eventData.isAuction ? (
      <div>
        <button
          onClick={() => showPopup({
            eventData,
            dayNo,
            idx,
            allEvents,
          })}
          className={auctionBtnCn}
        >
          This NFT will be sold at an auction{" "}
        </button>
      </div>
    ) : (
      <div>
        <LinkButton
          onClick={() => showPopup({
            eventData,
            dayNo,
            idx,
            allEvents,
          })}
          className={linkBtnCn}
        >
          See Details
        </LinkButton>
        {/* TODO uncommnet when details page is ready */}
        {/*<Button*/}
        {/*  onClick={() => {}}*/}
        {/*  mode="secondary"*/}
        {/*  label="See Details"*/}
        {/*/>*/}
      </div>
    )
  }

  return isMobile ? (
    <div className={`flex flex-col items-top ${!shortView ? "mb-60px" : "min-w-124px w-full"}`}>
      {renderImage("w-100%")}
      <div className="mt-20px flex flex-col justify-between">
        <div>
          <div className="flex flex-row items-center justify-between ">
            <p className={`font-rblack ${!shortView ? "leading-32px text-32px" : "text-14px"} `}>
              {eventData.Time}
            </p>
            <p className={`font-rlight ${shortView ? "text-12px" : ""}`}>{TokenidFormatter(eventData.Tokenid)}</p>
          </div>
          {!shortView && (
            <>
              <p
                className="font-rnarrow pt-15px"
                style={{ overflowWrap: "anywhere" }}
              >
               {eventData.Headline}
              </p>
              <div
                className="flex flex-row items-center justify-between mt-16px"
                onClick={() => {
                  openInNewTab(eventData.TwitterUrl);
                }}
              >
                <p className="font-rlight ">@{eventData.TwitterUsername}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  ) : isTablet ? (
    <div className={shortView
      ? "flex flex-col justify-between min-w-176px w-full"
      : "flex flex-row items-top mb-60px"}>
      {renderImage(shortView
        ? "w-40vw w-full"
        : "w-40vw max-w-300px max-h-300px h-40vw mr-50px")}
      <div className="flex flex-col justify-between">
        <div>
          <div className={`flex flex-row items-center justify-between
                          ${shortView ? "" : "mb-32px"}`}>
            <p className={`font-rblack leading-32px
            ${!shortView ? "text-32px" : "text-20px"}`}>
              {eventData.Time}
            </p>
            <p className={`font-rlight ${shortView ? "text-14px" : ""}`}>{TokenidFormatter(eventData.Tokenid)}</p>
          </div>
          {!shortView && (
            <>
              <p
                className="font-rnarrow line-clamp-3"
              >
                {eventData.Headline}
              </p>
              <div className="flex flex-row items-center justify-between pt-15px">
                <p className="font-rligh" onClick={() => openInNewTab(eventData.TwitterUrl)}>
                  @{eventData.TwitterUsername}
                </p>
              </div>
            </>
          )}
        </div>
        {!shortView && renderLinkButton(
          "font-rnarrow  border-black border-y-4 py-5px w-100%",
          "font-rblack"
        )}
      </div>
    </div>
  ) : (
    <div className={shortView
      ? "flex flex-col justify-between min-w-248px w-full"
      : "flex flex-row items-top mb-60px"}>
      {renderImage(shortView
        ? "w-full hover:cursor-pointer"
        : "max-w-300px max-h-300px h-240px w-248px mr-50px hover:cursor-pointer"
      )}
      <div className="w-100% flex flex-col justify-between">
        <div>
          <div className={`flex flex-row items-center justify-between
                            ${shortView ? "py-16px" : ""}`}>
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
              <div
                className="font-rlight pt-24px hover:cursor-pointer"
                onClick={() => openInNewTab(eventData.TwitterUrl)}
              >
                @{eventData.TwitterUsername}
              </div>
            </>
          )}
        </div>
        {!shortView && (
          <>
            {renderLinkButton(
              "font-rnarrow  border-black border-y-4 py-5px w-100%",
              "font-rblack"
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Event;
