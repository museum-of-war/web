import { useViewPort } from "@hooks/useViewport";
import React from "react";

const PoweredByFrame = () => {
  const { isMobile, isTablet } = useViewPort();
  return isMobile ? (
    <div className="relative flex flex-row font-rlight py-10px border-y-4">
      <div className="absolute top-6">
        <img alt="banner" src={"img/pd-banner.png"} width="40%" />
      </div>
      <div className="ml-60px pr-10% leading-20px text-16px ">
        <p>An official collection by the Ministry of Digital Transformation</p>
        <div className="flex flex-row items-center mt-15px ">
          <p>Powered by</p>
          <img
            alt="frameLogo"
            src={"img/pd-frameLogo.png"}
            width="90px"
            className="ml-10px"
          />
        </div>
      </div>
    </div>
  ) : isTablet ? (
    <div className="border-y-4 flex flex-row items-center justify-between py-5px mt-6% w-100%">
      <div className="flex flex-row items-center ">
        <img alt="banner" src={"img/pd-banner.png"} width="30px" />
        <p className="ml-20px font-rlight text-14px ">
          An official collection by the Ministry of Digital Transformation
        </p>
      </div>
      <div className="min-w-250px flex flex-row items-center justify-end ">
        <p className="font-rlight text-14px ">Powered by</p>
        <img
          alt="frameLogo"
          src={"img/pd-frameLogo.png"}
          width="90px"
          className="ml-10px"
        />
      </div>
    </div>
  ) : (
    <div className="border-y-4 flex flex-row items-center justify-between py-5px mt-6% w-100%">
      <div className="flex flex-row items-center ">
        <img alt="banner" src={"img/pd-banner.png"} width="40px" />
        <p className="ml-20px font-rlight text-20px ">
          An official collection by the Ministry of Digital Transformation
        </p>
      </div>
      <div className="min-w-300px flex flex-row items-center justify-end ">
        <p className="font-rlight text-20px ">Powered by</p>
        <img
          alt="frameLogo"
          src={"img/pd-frameLogo.png"}
          width="100px"
          className="ml-20px"
        />
      </div>
    </div>
  );
};

export default PoweredByFrame;
