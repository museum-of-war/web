import React from "react";

const ContentTop = () => {
  return (
    <div className="flex w-30%">
      <img alt="Logo" src={"img/logo.png"} width="30%" />
      <div className="flex flex-row font-rlight">
        <div>An NFT-museum of the war of putin's russia against Ukraine</div>
        <div className="text-sm	" style = {{color:'yellow'}}> NFT-музей війни путінської росії проти України. </div>
      </div>
    </div>
  );
};

export default ContentTop;
