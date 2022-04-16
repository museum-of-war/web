import { useAppRouter } from "@hooks/useAppRouter";
import React from "react";
import { AuctionItemType } from "@sections/types";

function NftCard({ imageSrc, name, index }: Pick<AuctionItemType, "imageSrc" | "name" | "index">) {
  const { push } = useAppRouter();
  const navlinkToNft = () => push(`/auction/${index}`);
  return (
    <div
      onClick={navlinkToNft}
      className="p-10px hover:border-4 hover:border-white hover:border-solid hover:cursor-pointer"
    >
      <img
        alt={name}
        src={imageSrc}
        className="w-100% h-544px"
      />
      <h3 className="font-black text-20px leading-240%">{name}</h3>
      <div className="flex justify-between">
        <div>
          <p className="text-12px leading-100% opacity-70">Current bid</p>
          <p className="tablet:text-16px mobile:text-14px leading-150%">
            0.15 ETH
          </p>
        </div>
        <div>
          <p className="text-12px leading-100% opacity-70">Ends in</p>
          <p className="tablet:text-16px mobile:text-14px leading-150%">
            13h 45m 20s
          </p>
        </div>
      </div>
    </div>
  );
}

export default NftCard;
