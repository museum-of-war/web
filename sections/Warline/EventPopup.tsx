import React, { useEffect, useMemo, useState } from "react";
import FsLightbox from "fslightbox-react";
import { useViewPort } from "@hooks/useViewport";
import { EventType } from "@sections/types";
import { VscChromeClose } from "react-icons/vsc";
import { openInNewTab } from "@sections/utils";
import { getUrls } from "@sections/Warline/WarlineUrls";
import { usePopup } from "../../providers/PopupProvider";

type PropsPopup = {
  eventData: EventType;
  dayNo: number;
  idx: number;
  allEvents: EventType[];
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
  idx,
  allEvents
}: PropsPopup) => {
  const [data, setData] = useState<EventType>(eventData);
  const [currIdx, setCurrIdx] = useState<number>(() => {
    return allEvents.filter(event => Number(event.DayNo) < dayNo).length + idx;
  });
  const { hidePopup } = usePopup();
  const [toggler, setToggler] = useState<boolean>(false);

  const alt = useMemo(() => {
    return `Day ${data.DayNo}, ${data.Time}`
  }, [data]);

  useEffect(() => {
    setData(allEvents[currIdx] as EventType);
  }, [currIdx]);

  const {isMobile, isTablet} = useViewPort();

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
        <img src={"img/modal-left.svg"} className={imgClass}/>
      </button>
    </div>
  );

  const renderNextBtn = (className: string = "", imgClass: string = "") => (
    <div className={`z-19 ${className}`}>
      <button
        onClick={() => currIdx < allEvents.length - 1 && setCurrIdx(currIdx + 1)}
      >
        <img
          src={"img/modal-left.svg"}
          style={{transform: " scale(-1, 1)"}}
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
    } = getUrls(data.Tokenid, data.ImageType, randomSrc as string);

    const logoSrc = isAnimation ? animationSrc : previewSrc;

    return (
      <>
        <img
          alt={alt}
          onClick={() => setToggler(!toggler)}
          src={logoSrc}
          className={`${className} hover:cursor-pointer`}
          onError={({currentTarget}) => {
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

  return isMobile || isTablet ? (
    <div className="fixed z-10 w-screen100% h-screen100% top-0 left-0 flex items-center justify-evenly">
      <div className="z-20 bg-white absolute w-100% flex flex-col px-5% py-3% overflow-auto top-0" style={{ height: 'calc(100% - 60px)' }}>
        <div className="w-100% text-right">
          <button
            className="right-20px top-20px"
            onClick={hidePopup}
          >
            <VscChromeClose size={25}/>
          </button>
        </div>
        <div className="w-100%">
          <div className="flex flex-row items-center justify-between ">
            <p className="font-rblack leading-32px text-32px">
              Day {data.DayNo}, {data.Time}
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
                  alt="Twitter"
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
      <div className="fixed bottom-0 bg-black left-0 right-0 z-20 flex items-center justify-evenly h-60px">
        {renderPrevBtn("", "w-75%")}
        {renderNextBtn("", "w-75%")}
      </div>
    </div>
  ) : (
    <div className="fixed z-10 w-screen100% h-screen100% top-0 left-0 flex items-center justify-evenly"
         onClick={(e) => {
           if (e.target !== e.currentTarget) return;

           hidePopup();
         }}>
      {renderPrevBtn()}
      <div className="z-20 h-4/6 bg-white relative w-80% flex flex-row px-5% py-3% overflow-auto">
        <button
          className="absolute right-20px top-20px"
          onClick={hidePopup}
        >
          <VscChromeClose size={25}/>
        </button>
        <div className="w-35%">{renderImg("w-90% pr-5%")}</div>
        <div className="w-65%">
          <div className="flex flex-row items-center justify-between ">
            <p className="font-rblack leading-32px text-32px">
              Day {data.DayNo}, {data.Time}
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
                  alt="Twitter"
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
    </div>
  );
};

export default Popup;
