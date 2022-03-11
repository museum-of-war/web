import { DayType } from "@sections/types";
import React from "react";
import Event from "./Event";
import { useViewPort } from "@hooks/useViewport";

type PropsDay = {
  dayData: DayType;
};

const Day = ({ dayData }: PropsDay) => {
  const { isMobile, isTablet } = useViewPort();
  return isMobile ? (
    <div className="mb-40px flex flex-col">
      <div className="w-100%">
        <div className=" flex flex-row justify-between font-rblack items-top">
          <p className="mt-20px text-16px font-rnarrow">{dayData.date}</p>
          <div className=" flex flex-row">
            <p className="text-32px mr-20px">Day</p>
            <p className="text-70px leading-70px">{dayData.dayNo}</p>
          </div>
        </div>
        <div className="mt-1px mb-20px h-5px w-100% bg-carbon"></div>
      </div>
      <div className=" w-100%">
        {dayData.events.map((eventData, idx) => (
          <Event eventData={eventData} />
        ))}
      </div>
    </div>
  ) : isTablet ? (
    <div className="mb-40px flex flex-col">
      <div className="w-100%">
        <div className=" flex flex-row justify-between font-rblack items-top">
          <p className="mt-20px text-16px font-rnarrow">{dayData.date}</p>
          <div className=" flex flex-row">
            <p className="text-32px mr-20px">Day</p>
            <p className="text-70px leading-70px">{dayData.dayNo}</p>
          </div>
        </div>
        <div className="mt-1px mb-20px h-5px w-100% bg-carbon"></div>
      </div>
      <div className=" w-100%">
        {dayData.events.map((eventData, idx) => (
          <Event eventData={eventData} />
        ))}
      </div>
    </div>
  ) : (
    <div className="mb-40px flex flex-row">
      <div className="w-30%">
        <div className=" flex flex-row justify-between font-rblack items-top">
          <p className="text-32px">Day</p>
          <p className="text-70px leading-70px">{dayData.dayNo}</p>
        </div>
        <div className="mt-1px h-5px w-100% bg-carbon"></div>
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
