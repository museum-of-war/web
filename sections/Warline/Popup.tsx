import React, { useEffect, useState } from "react";
import FsLightbox from "fslightbox-react";
import { useViewPort } from "@hooks/useViewport";
import { EventType } from "@sections/types";
import { VscChromeClose } from "react-icons/vsc";
import { openInNewTab } from "@sections/utils";
import {getUrls} from "@sections/Warline/WarlineUrls";

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
  const [toggler, setToggler] = useState<boolean>(false);

  useEffect(() => {
    setData(eventsData[currIdx] as EventType);
  }, [currIdx]);

  const { isMobile, isTablet } = useViewPort();

  const TokenidFormatter = (tokenId: string) => {
    return parseInt(tokenId) < 10
      ? "#000" + tokenId
      : parseInt(tokenId) < 100
      ? "#00" + tokenId
      : parseInt(tokenId) < 1000
      ? "#0" + tokenId
      : "#" + tokenId;
  };

  const renderPrevBtn = (className: string = "", imgClass: string = "") => (
    <div className={`z-20 ${className}`}>
      <button onClick={() => currIdx > 0 && setCurrIdx(currIdx - 1)}>
        <img src={"img/modal-left.svg"} className={imgClass} />
      </button>
    </div>
  );

  const renderNextBtn = (className: string = "", imgClass: string = "") => (
    <div className={`z-19 ${className}`}>
      <button
        onClick={() => currIdx < eventsData.length && setCurrIdx(currIdx + 1)}
      >
        <img
          src={"img/modal-left.svg"}
          style={{ transform: " scale(-1, 1)" }}
          className={imgClass}
        />
      </button>
    </div>
  );

  const renderImg = (className = "w-100% mt-10%") => {
    const randomSrc = rand_imgs[idx % 8] as string
    const {
      previewSrc,
      originalSrc,
      animationSrc,
      isAnimation,
    } = getUrls(eventData.Tokenid, eventData.ImageType, randomSrc as string);

    const logoSrc = isAnimation ? animationSrc : previewSrc;

    return (
      <>
        <img
          alt="Logo"
          onClick={() => setToggler(!toggler)}
          src={logoSrc}
          className={`${className} hover:cursor-pointer`}
          onError={({ currentTarget }) => {
            if (isAnimation) {
              currentTarget.src = previewSrc;
              currentTarget.onerror = () => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = randomSrc;
              };
            } else {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = randomSrc;
            }
          }}
        />
        <FsLightbox
          toggler={toggler}
          sources={[originalSrc]}
        />
      </>
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
    <>
      {renderPrevBtn("z-20 fixed left-3% top-50%", "w-75%")}
      {renderNextBtn("z-20 fixed right-3% top-50%", "w-75%")}

      <div className="z-20 bg-white absolute flex flex-row px-7% left-10% right-8% w-80% py-10%">
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
      <div className="fixed z-10 w-screen100% h-screen100% bg-carbon top-0 left-0 opacity-70	"></div>
    </>
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
