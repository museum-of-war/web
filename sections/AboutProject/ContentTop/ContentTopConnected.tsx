import PoweredByFrame from "@components/PoweredByFrame";
import { useViewPort } from "@hooks/useViewport";
import React from "react";

const ContentTopConnected = () => {
  const { isMobile } = useViewPort();
  return isMobile ? (
    <div>
      <div className="px-10% w-screen100% my-8% ">
        <img alt="Logo" src={"img/logo.png"} className="w-full" />
        <div className="mt-30px font-rlight text-16px">
          <p>{"An NFT-museum of the war of putin's russia against Ukraine"}</p>
          <p className="mt-4% mb-4%">
            NFT-музей війни путінської росії проти України.
          </p>
          <PoweredByFrame />
        </div>
      </div>
      <div>
        <img alt="header" src={"img/pd-header.png"} className="w-full mb-15%" />
        {/* <video
          loop
          autoPlay
          muted
          src={"vid/pd-header.mp4"}
          className="w-full mb-15%"
        /> */}
      </div>
    </div>
  ) : (
    <div className="px-10% pb-100px w-screen100%">
      <div className="flex flex-row justify-between items-center">
        <div className="w-45%">
          <img alt="Logo" src={"img/logo.png"} className="w-90%" />
          <div className="mt-30px relative flex flex-row font-rlight justify-between">
            <p className="w-45%	">
              {"An NFT-museum of the war of putin's russia against Ukraine"}
            </p>
            <p className="w-45%">
              NFT-музей війни путінської росії проти України.
            </p>
          </div>
        </div>
        <img alt="header" src={"img/pd-header.png"} width="45%" />
        {/* <video loop autoPlay muted src={"vid/pd-header.mp4"} width="45%" /> */}
      </div>
      <PoweredByFrame />
    </div>
  );
};

export default ContentTopConnected;
