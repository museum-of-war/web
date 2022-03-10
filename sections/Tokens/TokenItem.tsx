import { TokenDataType } from "@sections/types";
import React from "react";

type TokenItemProps = {
  tokenData: TokenDataType;
};

const TokenItem = ({ tokenData }: TokenItemProps) => {
  return (
    <div className="p-8%">
      <div className="">
        <img alt="token" src={tokenData.imageUrl} />
      </div>
      <div className="flex flex-row align-center justify-between">
        <p className="font-rblack">{tokenData.timeOfEvent}</p>
        <p className="font-rnarrow">{"Day " + tokenData.day}</p>
      </div>
    </div>
  );
};

export default TokenItem;
