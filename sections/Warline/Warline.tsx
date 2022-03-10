import { DayType } from "@sections/types";
import React from "react";
import Day from "./Day";

import SupportBanner from "./SupportBanner";

const daysMock: Array<DayType> = [
  {
    dayNo: 1,
    date: "22 Feb 2022",
    events: [
      {
        imageUrl: "",
        time: "",
        description: "",
        tokenId: 1,
        username: "",
      },
      {
        imageUrl: "",
        time: "",
        description: "",
        tokenId: 2,
        username: "",
      },
    ],
  },
];
const Warline = () => {
  return (
    <div className="px-10%">
      {daysMock.map((dayData, idx) => (
        <Day dayData={dayData} />
      ))}

      <div className="ml-10% mr-10%">
        <SupportBanner />
      </div>
    </div>
  );
};

export default Warline;
