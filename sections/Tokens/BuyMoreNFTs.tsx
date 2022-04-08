import React from "react";
import "@dotlottie/player-component";
import { openInNewTab } from "@sections/utils";

const BuyMoreNFTs = () => (
  <div className="desktop:mt-30px laptop:mt-25px tablet:mt-30px mobile:mt-30px">
    <div className="">
      <dotlottie-player src={"/lottie/nft_cover.lottie"} autoplay loop />
    </div>
    <div className="flex justify-center whitespace-nowrap">
      <button
        className="font-rblack bg-carbon text-white rounded-full mt-5px px-32px py-18px tablet:py-12px"
        onClick={() => openInNewTab("https://app.fair.xyz/collection/MHXYZ/queue")}
      >
        Buy more NFTs
      </button>
    </div>
  </div>
);

export default BuyMoreNFTs;
