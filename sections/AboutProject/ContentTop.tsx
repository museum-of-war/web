import { useViewPort } from "@hooks/useViewport";
import React from "react";

const ContentTop = () => {

  const { isMobile } = useViewPort()

  console.log(isMobile);
  return isMobile ? (
    <div>
      <div className="px-10% w-screen100% mb-8%">
        <img alt="Logo" src={"img/logo.png"} className="w-full" />
        <div className="mt-30px font-rlight text-16px">
          <p>{"An NFT-museum of the war of putin's russia against Ukraine"}</p>
          <p className="mt-4%">
            NFT-музей війни путінської росії проти України.
          </p>
        </div>
      </div>
      <div>
        <img alt="Logo" src={"img/pd-header.png"} className="w-full mb-15%" />
      </div>
    </div>
  ) : (
    <div className="pl-10% pr-10% flex flex-row w-screen100% justify-between items-center pb-100px">
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
      <img alt="Logo" src={"img/pd-header.png"} width="45%" />
    </div>
  );
};

export default ContentTop;
