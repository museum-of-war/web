import { TokenDataType } from "@sections/types";
import React, { useMemo, useState } from "react";
import { getUrls } from "@sections/Warline/WarlineUrls";
import FsLightbox from "fslightbox-react";
import WarlineData from "@sections/Warline/WarlineData";

type TokenItemProps = {
  tokenData: TokenDataType;
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

const TokenItem = ({ tokenData }: TokenItemProps) => {
  const [toggler, setToggler] = useState<boolean>(false);
  const [hovered, setHovered] = useState(false);

  type Attribute = {
      display_type: string;
      max_value?: any;
      trait_type: string;
      value: any;
  };

    const alt = useMemo(() => {
        return tokenData.metadata.name ?? "Unknown"
    }, [tokenData]);
    const editionInfo = useMemo(() => {
        const edition = (tokenData.metadata?.attributes as Attribute[])?.find(attr => attr.trait_type === "Edition");
        return edition ? `${edition.value} of ${edition.max_value ?? edition.value}` : "";
    }, [tokenData]);
    const itemEvent = useMemo(() => {
        return WarlineData.flatMap(data => data.events).find(event => event.Tokenid === tokenData.metadata?.item_number)
    }, [tokenData]);

  const renderImage = (className: string, tokenId: string) => {
    const randomSrc = rand_imgs[1 % 8] as string;
    const {
      previewSrc,
      originalSrc,
      animationSrc,
      isAnimation,
    } = getUrls(tokenId, itemEvent?.ImageType, randomSrc as string);

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
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
        <FsLightbox toggler={toggler} sources={[originalSrc]} />
      </>
    );
  };

  return (
    <div className="desktop:mt-50px laptop:mt-40px tablet:mt-30px mobile:mt-30px">
      <div>{renderImage("w-100% cursor-pointer", tokenData.metadata.item_number)}</div>
      <div style={{ lineHeight: '48px' }} className="flex flex-row mt-10px align-center justify-between items-center">
        <p className={`font-rblack text-20px pb-5px border-b-4 ${
          hovered ? "border-carbon": "border-transparent"
        }`}>
          {tokenData.metadata.name ?? "Unknown"}
        </p>
        <p className="font-rlight mobile:text-12px tablet:text-14px pb-5px">{editionInfo}</p>
      </div>
    </div>
  );
};

export default TokenItem;
