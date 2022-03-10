import { useRouter } from "next/router";
import React from "react";

const ExploreWarline = () => {
  const { push } = useRouter();
  return (
    <div className="mt-10px">
      <div className="">
        <img alt="warline" src="/img/pd-exploreWarline.png" />
      </div>
      <div className="flex justify-center whitespace-nowrap">
        <button
          className="font-rblack bg-carbon text-white rounded-full px-15px py-5px"
          onClick={() => push("/warline")}
        >
          Explore Warline
        </button>
      </div>
    </div>
  );
};

export default ExploreWarline;
