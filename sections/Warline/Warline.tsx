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
        imageUrl:
          "https://www.newstatesman.com/wp-content/uploads/sites/2/2022/03/202210_Ukraine-Art_Support_Olga-Shtonda-1024x1024.jpg",
        time: "05:00",
        description:
          "A package of additional tough sanctions against Russia from the EU is approaching. Discussed all the details with @EmmanuelMacron. We demand the disconnection of Russia from SWIFT, the introduction of a no-fly zone over Ukraine and other effective steps to stop the aggressor.",
        tokenId: 1,
        username: "@DmytroKuleba",
      },
      {
        imageUrl:
          "https://m.economictimes.com/thumb/msid-89849235,width-1599,height-1315,resizemode-4,imgsize-155776/india-ukraine-russia-tensions.jpg",
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
