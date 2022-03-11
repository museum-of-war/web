import { useViewPort } from "@hooks/useViewport";
import React from "react";

const PoweredByFrame = () => {
  const { isMobile } = useViewPort();
  return isMobile ? (
    <div className="relative flex flex-row font-rlight py-5px border-y-4">
      <div className="absolute top-6">
        <img alt="banner" src={"img/pd-banner.png"} width="40%" />
      </div>
      <div className="ml-60px pr-10% leading-20px text-16px">
        <p>An official collection by the Ministry of Digital Transformation</p>
        <div className="flex flex-row items-center mt-10px mb-5px">
          <p>Powered by</p>
          <img
            alt="frameLogo"
            src={"img/pd-frameLogo.png"}
            width="40%"
            className="ml-10px"
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="border-y-4 flex flex-row items-center justify-between py-5px mt-6%">
      <img alt="banner" src={"img/pd-banner.png"} width="2.5%" />
      <p className="font-rlight text-1.5vw -ml-5vw">
        An official collection by the Ministry of Digital Transformation
      </p>
      <p className="font-rlight text-1.5vw -mr-5vw">Powered by</p>
      <img
        alt="frameLogo"
        src={"img/pd-frameLogo.png"}
        width="10%"
        className=""
      />
    </div>
  );
};

export default PoweredByFrame;
