import { TokenDataType } from "@sections/types";
import React from "react";
import TokenItem from "./TokenItem";

const Tokens = () => {
  const mockTokens: Array<TokenDataType> = [
    { imageUrl: "/img/pd-mockNFT.png", day: 1, timeOfEvent: "05:00" },
    { imageUrl: "/img/pd-mockNFT.png", day: 1, timeOfEvent: "05:00" },
    { imageUrl: "/img/pd-mockNFT.png", day: 1, timeOfEvent: "05:00" },
    { imageUrl: "/img/pd-mockNFT.png", day: 1, timeOfEvent: "05:00" },
    { imageUrl: "/img/pd-mockNFT.png", day: 1, timeOfEvent: "05:00" },
  ];
  console.log("hey1");
  return (
    <div className="px-10%">
      <p
        className="border-b-8 
        mobile:text-55px mobile:leading-55px 
        tablet:text-60px tablet:leading-70px 
        laptop:text-70px laptop:leading-80px
        desktop:text-80px desktop:leading-100px
        font-rblack"
      >
        MY TOKENS
      </p>
      <div className="grid grid-cols-4">
        {mockTokens.map((tokenData, idx) => (
          <TokenItem tokenData={tokenData} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Tokens;
