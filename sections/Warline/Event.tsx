import React, { useState } from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import { useViewPort } from "@hooks/useViewport";
import { EventType } from "@sections/types";
import { openInNewTab } from "@sections/utils";
import { LinkButton } from "@components/LinkButton";
import Popup from "./Popup";

type PropsEvent = {
  eventData: EventType;
  dayNo: number;
  date: string;
  idx: number;
  eventsData: EventType[];
};

const rand_imgs = [
  "img/dots-1.png",
  "img/dots-2.png",
  "img/dots-3.png",
  "img/dots-4.png",
  "img/dots-5.png",
  "img/dots-6.png",
  "img/dots-7.png",
  "img/dots-8.png",
];

const wrapperOptions = {
  buttons: {
    showFullscreenButton: false,
    showDownloadButton: false,
    showAutoplayButton: false,
    showCloseButton: false,
    showThumbnailsButton: false,
    showNextButton: false,
    showPrevButton: false,
  },
  caption: {
    showCaption: false,
  },
  settings: {
    boxShadow: "5px 5px 15px black",
  },
  thumbnails: {
    showThumbnails: false,
  },
};

const Event = ({ eventData, dayNo, date, idx, eventsData }: PropsEvent) => {
  const { isMobile, isTablet } = useViewPort();
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const TokenidFormatter = (tokenId: number) => {
    return tokenId < 10
      ? "#000" + tokenId.toString()
      : tokenId < 100
      ? "#00" + tokenId.toString()
      : tokenId < 1000
      ? "#0" + tokenId.toString()
      : "#" + tokenId.toString();
  };

  const renderImage = (className:string) => {
    return (
      <SimpleReactLightbox>
        <SRLWrapper options={wrapperOptions}>
          <img
            alt="Logo"
            src={
              eventData.FileType === ""
                ? rand_imgs[idx % 8]
                : "https://bafybeih2f4nluohqqaw4al5p2e4aoka4lynpoww4zuojmwxntb6q57m63a.ipfs.nftstorage.link/MetaHistory%20ARTWORKS/" +
                  eventData.Tokenid +
                  eventData.FileType
            }
            className={className}
          />
        </SRLWrapper>
      </SimpleReactLightbox>
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
          <p className="font-rnarrow pt-15px"> {eventData.Headline}</p>
          <div className="flex flex-row items-center justify-between pt-5px">
            <p className="font-rlight ">@{eventData.TwitterUsername}</p>
            <button
              onClick={() => {
                openInNewTab(eventData.TwitterUrl);
              }}
            >
              <img
                alt="Logo"
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
          <p className="font-rnarrow pt-15px"> {eventData.Headline}</p>
          <div className="flex flex-row items-center justify-between pt-15px">
            <p className="font-rlight ">@{eventData.TwitterUsername}</p>
            <button
              onClick={() => {
                openInNewTab(eventData.TwitterUrl);
              }}
            >
              <img
                alt="Logo"
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
          <p className="font-rnarrow pt-15px"> {eventData.Headline}</p>
          <div className="flex flex-row items-center justify-between pt-15px">
            <p className="font-rlight ">@{eventData.TwitterUsername}</p>
            <button
              onClick={() => {
                openInNewTab(eventData.TwitterUrl);
              }}
            >
              <img
                alt="Logo"
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
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Event;
