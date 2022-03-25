import React, { useState } from "react";
import { useViewPort } from "@hooks/useViewport";
import { EventType } from "@sections/types";
import Popup from "./Popup";
import { openInNewTab } from "@sections/utils";

type PropsEvent = {
  eventData: EventType;
  dayNo: number;
  date: string;
  idx: number;
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

const Event = ({ eventData, dayNo, date, idx }: PropsEvent) => {
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
  return isMobile ? (
    <div className="flex flex-col items-top mb-60px">
      <img
        alt="Logo"
        src={
          eventData.FileType === ""
            ? rand_imgs[idx % 8]
            : "https://bafybeih2f4nluohqqaw4al5p2e4aoka4lynpoww4zuojmwxntb6q57m63a.ipfs.nftstorage.link/MetaHistory%20ARTWORKS/" +
              eventData.Tokenid +
              eventData.FileType
        }
        className="w-100%"
      />
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
            <button
              onClick={() => setShowPopup(true)}
              className="font-rblack mt-15px "
            >
              See Details
            </button>
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
        />
      ) : (
        <></>
      )}
    </div>
  ) : isTablet ? (
    <div className="flex flex-row items-top mb-60px">
      <img
        alt="Logo"
        src={
          eventData.FileType === ""
            ? rand_imgs[idx % 8]
            : "https://bafybeih2f4nluohqqaw4al5p2e4aoka4lynpoww4zuojmwxntb6q57m63a.ipfs.nftstorage.link/MetaHistory%20ARTWORKS/" +
              eventData.Tokenid +
              eventData.FileType
        }
        className="w-40vw max-w-300px max-h-300px h-40vw mr-50px"
      />
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
            <button onClick={() => setShowPopup(true)} className="font-rblack ">
              See Details
            </button>
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
        />
      ) : (
        <></>
      )}
    </div>
  ) : (
    <div className="flex flex-row items-top mb-60px">
      <img
        alt="Logo"
        src={
          eventData.FileType === ""
            ? rand_imgs[idx % 8]
            : "https://bafybeih2f4nluohqqaw4al5p2e4aoka4lynpoww4zuojmwxntb6q57m63a.ipfs.nftstorage.link/MetaHistory%20ARTWORKS/" +
              eventData.Tokenid +
              eventData.FileType
        }
        className="w-20vw max-w-300px max-h-300px h-20vw mr-50px"
      />
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
            <button onClick={() => setShowPopup(true)} className="font-rblack ">
              See Details
            </button>
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
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Event;
