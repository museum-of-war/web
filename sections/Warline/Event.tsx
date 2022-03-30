import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { useGetClassNameByViewPort } from "@hooks/useGetClassNameByViewPort";
import { EventType } from "@sections/types";
import { openInNewTab } from "@sections/utils";
import { LinkButton } from "@components/LinkButton";
import { getUrls } from "@sections/Warline/WarlineUrls";

type PropsEvent = {
  eventData: EventType;
  dayNo: number;
  idx: number;
  handleOpenShowDetailsPopup: (eventNum: number, dayNum: number) => void;
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

const Event = ({ eventData, dayNo, idx, handleOpenShowDetailsPopup }: PropsEvent) => {
  const { getClassName } = useGetClassNameByViewPort();
  const [toggler, setToggler] = useState<boolean>(false);

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
      //animationSrc, //TODO: if animation, load by animationSrc after preview was loaded
      //isAnimation,
    } = getUrls(eventData.Tokenid, eventData.ImageType, randomSrc as string);

    return (
      <>
        <img
          alt="Logo"
          onClick={() => setToggler(!toggler)}
          src={previewSrc}
          className={className}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = randomSrc;
          }}
        />
        <FsLightbox toggler={toggler} sources={[originalSrc]} />
      </>
    );
  };

  return (
    <div className={`flex items-top mb-60px ${getClassName(
      'flex-col',
      'flex-row',
      'flex-row'
    )}`}>
      {renderImage(getClassName(
          "w-100%",
          "w-40vw max-w-300px max-h-300px h-40vw mr-50px",
          "w-20vw max-w-300px max-h-300px h-20vw mr-50px hover:cursor-pointer"
      ))}
      <div className={`flex flex-col justify-between ${getClassName(
          'mt-20px',
          '',
          'w-100%'
      )}`}>
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
          <div className={`flex flex-row items-center justify-between ${getClassName(
            "pt-5px",
            "pt-15px",
            "pt-15px"
            
          )}`}>
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
              onClick={() => handleOpenShowDetailsPopup(idx, dayNo)}
              className={`font-rnarrow border-black border-y-4 py-5px w-100% ${getClassName("mt-15px")}`}
            >
              This NFT will be sold at an auction{" "}
            </button>
          </div>
        ) : (
          <div>
            <LinkButton
              onClick={() => handleOpenShowDetailsPopup(idx, dayNo)}
              className={`font-rblack ${getClassName("mt-15px")}`}
            >
              See Details
            </LinkButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default Event;
