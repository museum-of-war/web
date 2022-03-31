import React, { useMemo, useState } from "react";
import FsLightbox from "fslightbox-react";
import { useViewPort } from "@hooks/useViewport";
import { EventType } from "@sections/types";
import { openInNewTab } from "@sections/utils";
import { LinkButton } from "@components/LinkButton";
import Popup from "./Popup";
import { getUrls } from "@sections/Warline/WarlineUrls";

type PropsEvent = {
  eventData: EventType;
  dayNo: number;
  date: string;
  idx: number;
  eventsData: EventType[];
  allEvents: Array<EventType>;
};

const rand_imgs: string[] = [
  "img/dots-1.png",
  "img/dots-2.png",
  "img/dots-3.png",
  "img/dots-4.png",
  "img/dots-5.png",
  "img/dots-6.png",
  "img/dots-7.png",
  "img/dots-8.png",
];

const Event = ({ eventData, dayNo, date, idx, eventsData, allEvents }: PropsEvent) => {
  const { isMobile, isTablet } = useViewPort();
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [toggler, setToggler] = useState<boolean>(false);
  const alt = useMemo(() => {
    return `Day ${eventData.DayNo}, ${eventData.Time}`
  }, [eventData]);

  const TokenidFormatter = (tokenId: string): string => {
    return parseInt(tokenId) < 10
      ? "#000" + tokenId
      : parseInt(tokenId) < 100
      ? "#00" + tokenId
      : parseInt(tokenId) < 1000
      ? "#0" + tokenId
      : "#" + tokenId;
  };

  const renderImage = (className: string) => {
    const randomSrc = rand_imgs[idx % 8] as string;
    const {
      previewSrc,
      originalSrc,
      animationSrc,
      isAnimation,
    } = getUrls(eventData.Tokenid, eventData.ImageType, randomSrc as string);

    return (
      <>
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
              currentTarget.src = animationSrc
            }
          }}
        />
        <FsLightbox toggler={toggler} sources={[originalSrc]} />
      </>
    );
  };

  return isMobile ? (
    <div className="flex flex-col items-top mb-60px">
      {renderImage("w-100%")}
      <div className="mt-20px flex flex-col justify-between">
        <div>
          <div className="flex flex-row items-center justify-between ">
            <p className="font-rblack leading-32px text-32px">
              {eventData.Time}
            </p>
            <p className="font-rlight">{TokenidFormatter(eventData.Tokenid)}</p>
          </div>
          <p
            className="font-rnarrow pt-15px"
            style={{ overflowWrap: "anywhere" }}
          >
            {eventData.Headline}
          </p>
          <div className="flex flex-row items-center justify-between pt-5px">
            <p className="font-rlight ">@{eventData.TwitterUsername}</p>
            <button
              onClick={() => {
                openInNewTab(eventData.TwitterUrl);
              }}
            >
              <img
                alt="Twitter"
                src={"img/warline-TwitterLogo.png"}
                className="w-50px"
              />
            </button>
          </div>
        </div>
        {eventData.isAuction ? (
          <div>
            <button
              onClick={() => setShowPopup(true)}
              className="font-rnarrow  border-black border-y-4 py-5px mt-15px w-100%"
            >
              This NFT will be sold at an auction{" "}
            </button>
          </div>
        ) : (
          <div>
            <LinkButton
              onClick={() => setShowPopup(true)}
              className="font-rblack mt-15px "
            >
              See Details
            </LinkButton>
          </div>
        )}
      </div>
      {showPopup ? (
        <Popup
          eventData={eventData}
          dayNo={dayNo}
          date={date}
          setShowPopup={setShowPopup}
          idx={idx}
          eventsData={eventsData}
          allEvents={allEvents}
        />
      ) : (
        <></>
      )}
    </div>
  ) : isTablet ? (
    <div className="flex flex-row items-top mb-60px">
      {renderImage("w-40vw max-w-300px max-h-300px h-40vw mr-50px")}
      <div className="flex flex-col justify-between">
        <div>
          <div className="flex flex-row items-center justify-between ">
            <p className="font-rblack leading-32px text-32px">
              {eventData.Time}
            </p>
            <p className="font-rlight">{TokenidFormatter(eventData.Tokenid)}</p>
          </div>
          <p
            className="font-rnarrow pt-15px"
            style={{ overflowWrap: "anywhere" }}
          >
            {" "}
            {eventData.Headline}
          </p>
          <div className="flex flex-row items-center justify-between pt-15px">
            <p className="font-rlight ">@{eventData.TwitterUsername}</p>
            <button
              onClick={() => {
                openInNewTab(eventData.TwitterUrl);
              }}
            >
              <img
                alt="Twitter"
                src={"img/warline-TwitterLogo.png"}
                className="w-50px"
              />
            </button>
          </div>
        </div>
        {eventData.isAuction ? (
          <div>
            <button
              onClick={() => setShowPopup(true)}
              className="font-rnarrow  border-black border-y-4 py-5px w-100%"
            >
              This NFT will be sold at an auction{" "}
            </button>
          </div>
        ) : (
          <div>
            <LinkButton
              onClick={() => setShowPopup(true)}
              className="font-rblack"
            >
              See Details
            </LinkButton>
          </div>
        )}
      </div>
      {showPopup ? (
        <Popup
          eventData={eventData}
          dayNo={dayNo}
          date={date}
          setShowPopup={setShowPopup}
          idx={idx}
          eventsData={eventsData}
          allEvents={allEvents}
        />
      ) : (
        <></>
      )}
    </div>
  ) : (
    <div className="flex flex-row items-top mb-60px">
      {renderImage(
        "w-20vw max-w-300px max-h-300px h-20vw mr-50px hover:cursor-pointer"
      )}

      <div className="w-100% flex flex-col justify-between">
        <div>
          <div className="flex flex-row items-center justify-between ">
            <p className="font-rblack leading-32px text-32px">
              {eventData.Time}
            </p>
            <p className="font-rlight">{TokenidFormatter(eventData.Tokenid)}</p>
          </div>
          <p
            className="font-rnarrow pt-15px"
            style={{ overflowWrap: "anywhere" }}
          >
            {" "}
            {eventData.Headline}
          </p>
          <div className="flex flex-row items-center justify-between pt-15px">
            <p className="font-rlight ">@{eventData.TwitterUsername}</p>
            <button
              onClick={() => {
                openInNewTab(eventData.TwitterUrl);
              }}
            >
              <img
                alt="Twitter"
                src={"img/warline-TwitterLogo.png"}
                className="w-50px"
              />
            </button>
          </div>
        </div>
        {eventData.isAuction ? (
          <div>
            <button
              onClick={() => setShowPopup(true)}
              className="font-rnarrow  border-black border-y-4 py-5px w-100%"
            >
              This NFT will be sold at an auction{" "}
            </button>
          </div>
        ) : (
          <div>
            <LinkButton
              onClick={() => setShowPopup(true)}
              className="font-rblack"
            >
              See Details
            </LinkButton>
          </div>
        )}
      </div>
      {showPopup ? (
        <Popup
          eventData={eventData}
          dayNo={dayNo}
          date={date}
          setShowPopup={setShowPopup}
          idx={idx}
          eventsData={eventsData}
          allEvents={allEvents}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Event;
