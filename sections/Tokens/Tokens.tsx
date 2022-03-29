// import { TokenDataType } from "@sections/types";
import dynamic from "next/dynamic";
import React from "react";

const ExploreWarline = dynamic(() => import("./ExploreWarline"), {
  ssr: false,
});

const Tokens = () => {
  // Leaving 1 example:
  // const mockTokens: Array<TokenDataType> = [
  //   ...
  //   { imageUrl: "/img/pd-mockNFT.png", day: 1, timeOfEvent: "05:00" }
  // ];

  return (
    <div className="px-10%">
      <p
        className="border-carbon border-b-4
        mobile:text-38px mobile:leading-40px
        tablet:text-70px tablet:leading-72px
        desktop:text-80px desktop:leading-100px
        font-rblack mb-10px"
      >
        MY NFTs
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
