import { TokenDataType } from "@sections/types";
import React from "react";

type TokenItemProps = {
  tokenData: TokenDataType;
};

const TokenItem = ({ tokenData }: TokenItemProps) => {
  return (
    <div className="desktop:mt-50px laptop:mt-40px tablet:mt-30px mobile:mt-30px">
      <div>
        <img alt="token" src={tokenData.imageUrl} />
      </div>
      <div className="flex flex-row align-center justify-between items-center">
        <p className="font-rblack mobile:text-36px tablet:text-36px laptop:text-30px desktop:text-36px">
          {tokenData.timeOfEvent}
        </p>
        <p className="font-rnarrow mobile:text-30px tablet:text-26px laptop:text-30px">
          {"Day " + tokenData.day}
        </p>
      </div>
    </div>
  );
};

export default TokenItem;
