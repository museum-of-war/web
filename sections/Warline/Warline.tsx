import { DayType } from "@sections/types";
import React, { useState } from "react";
import Day from "./Day";

import SupportBanner from "./SupportBanner";
import { useViewPort } from "@hooks/useViewport";
import SupportSticky from "./SupportSticky";

const daysMock: Array<DayType> = [
  {
    dayNo: 1,
    date: "22 Feb 2022",
    events: [
      {
        imageUrl:
          "https://www.newstatesman.com/wp-content/uploads/sites/2/2022/03/202210_Ukraine-Art_Support_Olga-Shtonda-1024x1024.jpg",
        time: "05:00",
        description:
          "A package of additional tough sanctions against Russia from the EU is approaching. Discussed all the details with @EmmanuelMacron. We demand the disconnection of Russia from SWIFT, the introduction of a no-fly zone over Ukraine and other effective steps to stop the aggressor.",
        tokenId: 1,
        username: "@DmytroKuleba",
      },
      {
        imageUrl: "img/warline-dots.png",
        time: "09:00",
        description:
          "Ми не дамо викреслити жодного дня цього періоду зі сторінок світової історії. Ми не дамо викреслити жодного дня цього періоду зі сторінок світової історії. Ми не дамо викреслити жодного дня цього періоду зі сторінок світової історії. Ми не дамо викреслити жодного дня цього періоду зі сторінок світової історії. Ми не дамо викреслити жодного дня цього періоду зі сто...",
        tokenId: 2,
        username: "@nickname",
      },
    ],
  },
  {
    dayNo: 2,
    date: "23 Feb 2022",
    events: [
      {
        imageUrl: "img/warline-dots.png",
        time: "05:00",
        description:
          "A package of additional tough sanctions against Russia from the EU is approaching. Discussed all the details with @EmmanuelMacron. We demand the disconnection of Russia from SWIFT, the introduction of a no-fly zone over Ukraine and other effective steps to stop the aggressor.",
        tokenId: 1,
        username: "@DmytroKuleba",
      },
      {
        imageUrl: "img/warline-dots.png",
        time: "09:00",
        description:
          "Ми не дамо викреслити жодного дня цього періоду зі сторінок світової історії. Ми не дамо викреслити жодного дня цього періоду зі сторінок світової історії. Ми не дамо викреслити жодного дня цього періоду зі сторінок світової історії. Ми не дамо викреслити жодного дня цього періоду зі сторінок світової історії. Ми не дамо викреслити жодного дня цього періоду зі сто...",
        tokenId: 2,
        username: "@nickname",
      },
    ],
  },
];
const Warline = () => {
  const { isMobile, isTablet } = useViewPort();
  return isMobile ? (
    <div className="">
      <div className="px-10%">
        {daysMock.map((dayData, idx) => (
          <Day key={idx} dayData={dayData} />
        ))}
      </div>
      <div className="mb-20%">
        <SupportBanner />
      </div>
      <SupportSticky />
    </div>
  ) : isTablet ? (
    <div className="">
      <div className="px-10%">
        {daysMock.map((dayData, idx) => (
          <Day key={idx} dayData={dayData} />
        ))}
      </div>
      <div className="mb-20% ">
        <SupportBanner />
      </div>
      <SupportSticky />
    </div>
  ) : (
    <div className="px-10%">
      {daysMock.map((dayData, idx) => (
        <Day key={idx} dayData={dayData} />
      ))}

      <div className="ml-33% ">
        <SupportBanner />
      </div>
      <SupportSticky />
    </div>
  );
};

export default Warline;
