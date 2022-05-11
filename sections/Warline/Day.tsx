import React, { useEffect, useState } from 'react';
import { DayType, EventType } from '@sections/types';
import Event from './Event';
import { useViewPort } from '@hooks/useViewport';
import DaysNavigation from '@sections/Warline/DaysNavigation';
import { BY_DAY } from './constants';

type PropsDay = {
  dayData: DayType;
  daysCount: number;
  allEvents: Array<EventType>;
  pageView: string;
  selectedByNewest: string | undefined;
};

const Day = ({ dayData, daysCount, allEvents, pageView, selectedByNewest }: PropsDay) => {
  const { isMobile, isTablet } = useViewPort();
  const [view, setView] = useState<string>(pageView);

  useEffect(() => {
    setView(pageView);
  }, [pageView]);

  const onScrollClick = (targetId: string) => {
    const targetPosition = document.getElementById(targetId);

    window.scroll({
      top:
        isMobile || isTablet
          ? (targetPosition?.offsetTop ?? 0) - 80
          : targetPosition?.offsetTop,
      behavior: 'smooth',
    });
  };

  return isMobile ? (
    <div className="mb-40px flex flex-col" id={`day-sticky-${dayData.dayNo}`}>
      <div className="w-100%">
        <div className=" flex flex-row justify-between font-rblack items-top">
          <div className="flex flex-col">
            <p className="text-32px mr-20px">Day {dayData.dayNo}</p>
            <p className="mt-12px mb-24px text-14px font-rlight">
              {dayData.date}
            </p>
          </div>
          <DaysNavigation
            direction="vertical"
            daysCount={daysCount}
            dayData={dayData}
            onNextDayClickHandler={() =>
              onScrollClick(`day-sticky-${dayData.dayNo + 1}`)
            }
            onPrevDayClickHandler={() =>
              onScrollClick(`day-sticky-${dayData.dayNo - 1}`)
            }
            selectedByNewest={selectedByNewest}
          />
        </div>
        <div className="mt-1px mb-20px h-5px w-100% bg-carbon"></div>
      </div>
      {/* @ts-ignore*/}
      <div
        {...(view === BY_DAY
          ? {
            className: 'grid gap-24px',
            style: {
              gridTemplateColumns: 'repeat(auto-fit, minmax(124px, 1fr))',
            },
          }
          : {})}
      >
        {dayData.events.map((eventData, idx) => (
          <Event
            key={idx}
            eventData={eventData}
            dayNo={dayData.dayNo}
            date={dayData.date}
            idx={idx}
            eventsData={dayData.events}
            allEvents={allEvents}
            view={view}
            isOnSale={dayData.isOnSale}
          />
        ))}
      </div>
    </div>
  ) : isTablet ? (
    <div className="mb-40px flex flex-col" id={`day-sticky-${dayData.dayNo}`}>
      <div className="w-100%">
        <div className="flex flex-row justify-between font-rblack items-top">
          <div className="flex flex-col">
            <p className="text-32px">Day {dayData.dayNo}</p>
            <p className="mt-12px mb-24px text-14px font-rlight">
              {dayData.date}
            </p>
          </div>
          <DaysNavigation
            daysCount={daysCount}
            dayData={dayData}
            onNextDayClickHandler={() =>
              onScrollClick(`day-sticky-${dayData.dayNo + 1}`)
            }
            onPrevDayClickHandler={() =>
              onScrollClick(`day-sticky-${dayData.dayNo - 1}`)
            }
            direction="horizontal"
            selectedByNewest={selectedByNewest}
          />
        </div>
        <div className="mt-1px mb-20px h-5px w-100% bg-carbon"></div>
      </div>
      {/* @ts-ignore*/}
      <div
        {...(view === BY_DAY
          ? {
            className: 'grid gap-x-48px gap-y-24px',
            style: {
              'grid-template-columns': 'repeat(auto-fit, minmax(176px, 1fr))',
            },
          }
          : {})}
      >
        {dayData.events.map((eventData, idx) => (
          <Event
            key={idx}
            eventData={eventData}
            dayNo={dayData.dayNo}
            date={dayData.date}
            idx={idx}
            eventsData={dayData.events}
            allEvents={allEvents}
            view={view}
            isOnSale={dayData.isOnSale}
          />
        ))}
      </div>
    </div>
  ) : (
    <div className="mb-40px flex flex-row" id={`day-sticky-${dayData.dayNo}`}>
      <div className="w-248px">
        <div className="sticky top-100px">
          <div className="flex flex-col justify-start items-top">
            <p className="text-32px font-rblack">Day {dayData.dayNo}</p>
            <p className="mt-12px mb-24px text-14px font-rlight">
              {dayData.date}
            </p>
          </div>
          <div className="mt-1px h-5px w-100% bg-carbon"></div>
          <DaysNavigation
            daysCount={daysCount}
            dayData={dayData}
            onNextDayClickHandler={() =>
              onScrollClick(`day-sticky-${dayData.dayNo + 1}`)
            }
            onPrevDayClickHandler={() =>
              onScrollClick(`day-sticky-${dayData.dayNo - 1}`)
            }
            direction="horizontal"
            selectedByNewest={selectedByNewest}
          />
        </div>
      </div>
      <div className="ml-5% w-70%">
        {/* @ts-ignore*/}
        <div
          {...(view === BY_DAY
            ? {
              className: 'grid gap-x-48px gap-y-24px',
              style: {
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(200px, 1fr))',
              },
            }
            : {})}
        >
          {dayData.events.map((eventData, idx) => (
            <Event
              key={idx}
              eventData={eventData}
              dayNo={dayData.dayNo}
              date={dayData.date}
              idx={idx}
              eventsData={dayData.events}
              allEvents={allEvents}
              view={view}
              isOnSale={dayData.isOnSale}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Day;
