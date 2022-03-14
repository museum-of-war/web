// import { TokenDataType } from "@sections/types";
import React from "react";
import ExploreWarline from "./ExploreWarline";
// import TokenItem from "./TokenItem";

const Tokens = () => {
  // const mockTokens: Array<TokenDataType> = [
  //   { imageUrl: "/img/pd-mockNFT.png", day: 1, timeOfEvent: "05:00" },
  //   { imageUrl: "/img/pd-mockNFT.png", day: 1, timeOfEvent: "05:00" },
  //   { imageUrl: "/img/pd-mockNFT.png", day: 1, timeOfEvent: "05:00" },
  //   { imageUrl: "/img/pd-mockNFT.png", day: 1, timeOfEvent: "05:00" },
  //   { imageUrl: "/img/pd-mockNFT.png", day: 1, timeOfEvent: "05:00" },
  // ];

  return (
    <div className="px-10%">
      <p
        className="border-b-8 
        mobile:text-55px mobile:leading-55px 
        tablet:text-60px tablet:leading-70px 
        laptop:text-70px laptop:leading-80px
        desktop:text-80px desktop:leading-100px
        font-rblack mb-10px"
      >
        MY TOKENS
      </p>
      <div
        className="grid 
        desktop:grid-cols-4 desktop:gap-x-60px
        laptop:grid-cols-3 laptop:gap-x-50px 
        tablet:grid-cols-2 tablet:gap-x-40px 
        mobile:grid-cols-1"
      >
        {/* {mockTokens.map((tokenData, idx) => (
          <TokenItem tokenData={tokenData} key={idx} />
        ))} */}
        <ExploreWarline />
      </div>
    </div>
  );
};

export default Tokens;
