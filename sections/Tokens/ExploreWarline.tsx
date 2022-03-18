import { useAppRouter } from "@hooks/useAppRouter";
import React from "react";

const ExploreWarline = () => {
  const { push } = useAppRouter();
  return (
    <div className="desktop:mt-30px laptop:mt-25px tablet:mt-30px mobile:mt-30px">
      <div className="">
        <img alt="warline" src="/img/pd-exploreWarline.png" />
      </div>
      <div className="flex justify-center whitespace-nowrap">
        <button
          className="font-rblack bg-carbon text-white rounded-full mt-5px px-15px py-5px"
          onClick={() => push("/warline")}
        >
          Explore Warline
        </button>
      </div>
    </div>
  );
};

export default ExploreWarline;
