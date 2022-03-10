import { DayType } from "@sections/types";
import React from "react";
import Event from "./Event";

type PropsDay = {
  dayData: DayType;
};

const Day = ({ dayData }: PropsDay) => {
  return (
    <div className="flex flex-row">
      <div className="w-30%">
        <div className=" flex flex-row justify-between font-rblack items-top">
          <p className="text-32px">Day</p>
          <p className="text-70px leading-70px">{dayData.dayNo}</p>
        </div>
        <div className="h-5px w-100% bg-carbon"></div>
        <p className="mt-20px text-16px font-rnarrow">{dayData.date}</p>
      </div>
      <div className="ml-5% w-70%">
        {dayData.events.map((eventData, idx) => (
          <Event eventData={eventData} />
        ))}
      </div>
    </div>
  );
};

export default Day;
