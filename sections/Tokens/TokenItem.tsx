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
  console.log(tokenData);
  const [toggler, setToggler] = useState<boolean>(false);
  const [hovered, setHovered] = useState(false);

    const alt = useMemo(() => {
        return tokenData.metadata.name ?? "Unknown"
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
  console.log(tokenData.id.tokenId, Buffer.from(tokenData.id.tokenId, "hex"));
  return (
    <div className="desktop:mt-50px laptop:mt-40px tablet:mt-30px mobile:mt-30px">
      <div>{renderImage("w-100% cursor-pointer", tokenData.metadata.item_number)}</div>
      <div className="flex flex-rsow mt-10px align-center justify-between items-center">
        <p className={`font-rblack mobile:text-30px tablet:text-30px laptop:text-30px desktop:text-30px pb-5px border-b-4 ${
          hovered ? "border-carbon": "border-transparent"
        }`}>
          {tokenData.metadata.name ?? "Unknown"}
        </p>
      </div>
    </div>
  );
};

export default TokenItem;
