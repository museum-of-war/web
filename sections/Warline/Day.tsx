import React from "react";
import {LinkButton} from "@components/LinkButton";
import { DayType } from "@sections/types";
import Event from "./Event";
import { useViewPort } from "@hooks/useViewport";

type PropsDay = {
  dayData: DayType,
  daysCount: number,
};

const Day = ({ dayData, daysCount }: PropsDay) => {
  const { isMobile, isTablet } = useViewPort();

  const onScrollClick = (targetId: string) => {
    const targetPosition = document.getElementById(targetId);

    window.scroll({
      top: targetPosition?.offsetTop,
      behavior: "smooth",
    });
  };

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
          <Event
            key={idx}
            eventData={eventData}
            dayNo={dayData.dayNo}
            date={dayData.date}
            idx={idx}
            eventsData={dayData.events}
          />
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
          <Event
            key={idx}
            eventData={eventData}
            dayNo={dayData.dayNo}
            date={dayData.date}
            idx={idx}
            eventsData={dayData.events}
          />
        ))}
      </div>
    </div>
  ) : (
    <div className="mb-40px flex flex-row" id={`day-sticky-${dayData.dayNo}`}>
      <div className="w-30%">
        <div className="sticky" style={{ top: 36 }}>
          <div className=" flex flex-row justify-between font-rblack items-top">
            <p className="text-32px">Day</p>
            <p className="text-70px leading-70px">{dayData.dayNo}</p>
          </div>
          <div className="mt-1px h-5px w-100% bg-carbon"></div>
          <p className="mt-20px text-16px font-rnarrow">{dayData.date}</p>
          <div style={{ marginTop: 168 }}>
            {dayData.dayNo > 1 && (
              <span
                onClick={() => {
                  onScrollClick(`day-sticky-${dayData.dayNo - 1}`);
                }}
                className="flex flex-row items-center font-rblack hover:cursor-pointer"
              >
                <img alt="Up" src={"img/up.svg"} />
                <LinkButton className="ml-10px border-b-4 border-transparent hover:border-solid hover:border-b-4 hover:border-carbon">  Day {dayData.dayNo - 1} </LinkButton>
              </span>
            )}
            {dayData.dayNo < daysCount && (
              <span
                onClick={() => {
                  onScrollClick(`day-sticky-${dayData.dayNo + 1}`);
                }}
               className="flex flex-row items-center font-rblack hover:cursor-pointer mt-5%"
              >
                <img alt="Down" src={"img/down.svg"} />
                <LinkButton className="ml-10px "> Day {dayData.dayNo + 1} </LinkButton>
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="ml-5% w-70%">

        {dayData.events.map((eventData, idx) => (
          <Event
            key={idx}
            eventData={eventData}
            dayNo={dayData.dayNo}
            date={dayData.date}
            idx={idx}
            eventsData={dayData.events}
          />
        ))}
      </div>
    </div>
  );
};

export default Day;
