import React, { useEffect, useState } from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import { useViewPort } from "@hooks/useViewport";
import { EventType } from "@sections/types";
import { VscChromeClose } from "react-icons/vsc";
import { openInNewTab } from "@sections/utils";

type PropsPopup = {
  eventData: EventType;
  dayNo: number;
  date: string;
  setShowPopup: (arg: boolean) => void;
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

const Popup = ({
  eventData,
  dayNo,
  date,
  setShowPopup,
  idx,
  eventsData,
}: PropsPopup) => {
  const [data, setData] = useState<EventType>(eventData);
  const [currIdx, setCurrIdx] = useState<number>(idx);

  useEffect(() => {
    console.log(currIdx);
    setData(eventsData[currIdx] as EventType);
  }, [currIdx]);

  const { isMobile, isTablet } = useViewPort();
  const TokenidFormatter = (tokenId: number) => {
    return tokenId < 10
      ? "#000" + tokenId.toString()
      : tokenId < 100
      ? "#00" + tokenId.toString()
      : tokenId < 1000
      ? "#0" + tokenId.toString()
      : "#" + tokenId.toString();
  };

  const renderPrevBtn = () => (
    <div className="z-20">
      <button onClick={() => currIdx > 1 && setCurrIdx(currIdx - 1)}>
        <img src={"img/modal-left.svg"} />
      </button>
    </div>
  );

  const renderNextBtn = () => (
    <div className="z-20">
      <button
        onClick={() => currIdx < eventsData.length && setCurrIdx(currIdx + 1)}
      >
        <img
          src={"img/modal-left.svg"}
          style={{ transform: " scale(-1, 1)" }}
        />
      </button>
    </div>
  );

  const renderImg = (className = "w-100% mt-10%") => {
    return (
      <SimpleReactLightbox>
        <SRLWrapper options={wrapperOptions}>
          <img
            alt="Logo"
            src={
              data.FileType === ""
                ? rand_imgs[idx % 8]
                : "https://bafybeih2f4nluohqqaw4al5p2e4aoka4lynpoww4zuojmwxntb6q57m63a.ipfs.nftstorage.link/MetaHistory%20ARTWORKS/" +
                  data.Tokenid +
                  data.FileType
            }
            className={className}
          />
        </SRLWrapper>
      </SimpleReactLightbox>
    );
  };

  return isMobile ? (
    <div>
      <div className="absolute -mt-50% z-20 w-screen100% min-h-screen90% bg-white left-0 flex flex-row px-7% py-10%	">
        <button
          className="absolute right-20px top-20px"
          onClick={() => setShowPopup(false)}
        >
          <VscChromeClose size={25} />
        </button>
        <div className="w-100%">
          <div className="flex flex-col items-start justify-between ">
            <p className="font-rblack leading-32px text-32px">
              Day {dayNo}, {data.Time}
            </p>
            <p className="font-rlight text-24px pt-20px">
              {TokenidFormatter(data.Tokenid)}
            </p>
          </div>
          <div className="flex flex-col items-start justify-between">
            <div className="pt-20px">
              <p className="font-rlight text-16px">Artist</p>
              <button
                className="pt-5px font-rnarrow text-18px"
                onClick={() => {
                  if (data.ArtistLink) openInNewTab(data.ArtistLink);
                }}
              >
                <p>{data.ArtistName}</p>
              </button>
            </div>
            <div className="pr-10% pt-20px">
              <p className="font-rlight text-16px ">Owner</p>
              <p className="pt-5px font-rnarrow text-18px">Unreleased</p>
            </div>
          </div>
          {renderImg()}
          <div className="bg-beige px-3% py-2% mt-8%">
            <p className="font-rnarrow pt-15px"> {data.Headline}</p>
            <div className="flex flex-row items-center justify-between pt-15px">
              <p className="font-rlight ">@{data.TwitterUsername}</p>
              <button
                onClick={() => {
                  openInNewTab(data.TwitterUrl);
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
          <p className="font-rlight text-24px mt-8%">Description</p>

          <p className="pt-2% font-rnarrow text-18px">
            {data.DescriptionEnglish}
          </p>
          <p className="pt-5% font-rnarrow text-18px">
            {data.DescriptionUkrainian}
          </p>
        </div>
      </div>

      <div className="fixed z-10 w-screen100% h-screen100% bg-carbon top-0 left-0 opacity-70	"></div>
    </div>
  ) : isTablet ? (
    <div className="absolute -mt-20% left-0 min-h-screen90% w-100% flex items-center justify-evenly ">
      {renderPrevBtn()}

      <div className="z-20 bg-white relative w-80% flex flex-row px-7% py-10%">
        <button
          className="absolute right-20px top-20px"
          onClick={() => setShowPopup(false)}
        >
          <VscChromeClose size={25} />
        </button>
        <div className="w-100%">
          <div className="flex flex-row items-center justify-between ">
            <p className="font-rblack leading-32px text-32px">
              Day {dayNo}, {data.Time}
            </p>
            <p className="font-rlight text-24px">
              {TokenidFormatter(data.Tokenid)}
            </p>
          </div>
          <div className="flex flex-row items-center justify-between pt-30px ">
            <div>
              <p className="font-rlight text-16px">Artist</p>
              <button
                className="pt-5px font-rnarrow text-18px"
                onClick={() => {
                  if (data.ArtistLink) openInNewTab(data.ArtistLink);
                }}
              >
                <p>{data.ArtistName}</p>
              </button>
            </div>
            <div className="pr-10%">
              <p className="font-rlight text-16px ">Owner</p>
              <p className="pt-5px font-rnarrow text-18px">Unreleased</p>
            </div>
          </div>
          {renderImg()}
          <div className="bg-beige px-3% py-2% mt-8%">
            <p className="font-rnarrow pt-15px"> {data.Headline}</p>
            <div className="flex flex-row items-center justify-between pt-15px">
              <p className="font-rlight ">@{data.TwitterUsername}</p>
              <button
                onClick={() => {
                  openInNewTab(data.TwitterUrl);
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
          <p className="font-rlight text-24px mt-8%">Description</p>
          <p className="pt-2% font-rnarrow text-18px">
            {data.DescriptionEnglish}
          </p>
          <p className="pt-2% font-rnarrow text-18px">
            {data.DescriptionUkrainian}
          </p>
        </div>
      </div>
      {renderNextBtn()}

      <div className="fixed z-10 w-screen100% h-screen100% bg-carbon top-0 left-0 opacity-70	"></div>
    </div>
  ) : (
    <div className="fixed z-10 w-screen100% h-screen100% top-0 left-0 flex  items-center justify-evenly">
      {renderPrevBtn()}

      <div className="z-20 bg-white relative w-80% flex flex-row px-5% py-3%	">
        <button
          className="absolute right-20px top-20px"
          onClick={() => setShowPopup(false)}
        >
          <VscChromeClose size={25} />
        </button>
        <div className="w-35%">{renderImg("w-90% pr-5%")}</div>
        <div className="w-65%">
          <div className="flex flex-row items-center justify-between ">
            <p className="font-rblack leading-32px text-32px">
              Day {dayNo}, {data.Time}
            </p>
            <p className="font-rlight text-24px">
              {TokenidFormatter(data.Tokenid)}
            </p>
          </div>
          <div className="flex flex-row items-center justify-between pt-30px ">
            <div>
              <p className="font-rlight text-16px">Artist</p>
              <button
                className="pt-5px font-rnarrow text-18px"
                onClick={() => {
                  if (data.ArtistLink) openInNewTab(data.ArtistLink);
                }}
              >
                <p>{data.ArtistName}</p>
              </button>
            </div>
            <div className="pr-10%">
              <p className="font-rlight text-16px ">Owner</p>
              <p className="pt-5px font-rnarrow text-18px">Unreleased</p>
            </div>
          </div>

          <div className="bg-beige px-3% py-2% mt-5%">
            <p className="font-rnarrow pt-15px"> {data.Headline}</p>
            <div className="flex flex-row items-center justify-between pt-15px">
              <p className="font-rlight ">@{data.TwitterUsername}</p>
              <button
                onClick={() => {
                  openInNewTab(data.TwitterUrl);
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
          <p className="font-rlight text-24px mt-5%">Description</p>
          <p className="pt-2% font-rnarrow text-18px">
            {data.DescriptionEnglish}
          </p>
          <p className="pt-2% font-rnarrow text-18px">
            {data.DescriptionUkrainian}
          </p>
        </div>
      </div>
      {renderNextBtn()}

      <div className=" fixed z-10 w-screen100% h-screen100% bg-carbon top-0 left-0 opacity-70"></div>
    </div>
  );
};

export default Popup;
