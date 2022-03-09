import React from "react";

const ContentTop = () => {
  return (
    <div className="pl-10% pr-10% flex flex-row  w-screen100% justify-between items-center">
      <div className="  w-45%">
        <img alt="Logo" src={"img/logo.png"} className="w-90%" />
        <div className="mt-10 relative flex flex-row font-rlight justify-between">
          <p className=" w-45%	">
            An NFT-museum of the war of putin's russia against Ukraine
          </p>
          <p className=" w-45%	">
            NFT-музей війни путінської росії проти України.
          </p>
        </div>
      </div>
      <img alt="Logo" src={"img/pd-header.png"} width="45%" />
    </div>
  );
};

export default ContentTop;
