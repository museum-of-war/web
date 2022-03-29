import { useAppRouter } from "@hooks/useAppRouter";
import React from "react";
import "@dotlottie/player-component";

const ExploreWarline = () => {
  const { push } = useAppRouter();
  return (
    <div className="desktop:mt-30px laptop:mt-25px tablet:mt-30px mobile:mt-30px">
      <div className="">
        <dotlottie-player src={"/lottie/nft_cover.lottie"} autoplay loop />
      </div>
      <div className="flex justify-center whitespace-nowrap">
        <button
          className="font-rblack bg-carbon text-white rounded-full mt-5px px-32px py-18px tablet:py-12px"
          onClick={() => push("/warline")}
        >
          Explore Warline
        </button>
      </div>
    </div>
  );
};

export default ExploreWarline;
