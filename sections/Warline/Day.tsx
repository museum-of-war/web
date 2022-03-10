import { DayType } from "@sections/types";
import React from "react";
import Event from "./Event";

type PropsDay = {
  dayData: DayType;
};

const Day = ({ dayData }: PropsDay) => {
  return (
    <div>
      <div className="w-30%">
        <div className=" flex flex-row justify-between font-rblack items-center">
          <p className="text-32px">Day</p>
          <p className="text-70px">{dayData.dayNo}</p>
        </div>
        <div className="h-5px w-100% bg-carbon"></div>
      </div>
      {dayData.events.map((eventData, idx) => (
        <Event eventData={eventData} />
      ))}
    </div>
  );
};

export default Day;
