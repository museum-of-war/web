import React, { useCallback, useState } from "react";
import Popup, { PropsPopup } from "@sections/Warline/Popup";
import { EventType } from "@sections/types";
import Day from "./Day";
import DonatePopup from "./DonatePopup";
import SupportBanner from "./SupportBanner";
import { useViewPort } from "@hooks/useViewport";
import SupportSticky from "./SupportSticky";
import WarlineData from "./WarlineData";

const Warline = () => {
  const { isMobile, isTablet } = useViewPort();
  const [eventDetails, setEventDetails] = useState<PropsPopup>({} as PropsPopup);
  const [showDonatePopup, setShowDonatePopup] = useState<boolean>(false);
  const [showDetailsPopup, setShowDetailsPopup] = useState<boolean>(false);
  const handleOpenShowDetailsPopup = useCallback((eventNum: number, dayNum: number) => {
    // @ts-ignore
    const day = eventNum >= WarlineData?.[dayNum - 1]?.events.length
        ? dayNum + 1 // event of next day
        : eventNum < 0
          ? dayNum > 1 ? dayNum - 1 : 1 // prevent moving less than day 1
          : dayNum;
    // @ts-ignore
    const event = eventNum >= WarlineData?.[dayNum - 1]?.events.length
        ? 0
        : eventNum < 0 // when click prev on first item of day 2 +
          // @ts-ignore
          ? dayNum > 1 ? WarlineData?.[day - 1].events.length - 1 : 0 // if click prev on day 1 - ignore, if on day + 2
          // change the event index to the last of the prev day el
          : eventNum;
;
    setShowDetailsPopup(true);
    setEventDetails({
      idx: event,
      dayNo: day,
      setShowPopup: () => {
        setShowDetailsPopup(false)
        setEventDetails({} as PropsPopup);
      },
      eventData: WarlineData?.[day - 1]?.events[event] as EventType,
      handleOpenShowDetailsPopup,
    })
  }, [setShowDetailsPopup, setEventDetails]);
  return (
    <>
      {(isMobile || isTablet) ? (
        <div className="">
          <div className="px-10%">
            {WarlineData.map((dayData, idx, arr) => (
              <Day
                key={idx}
                dayData={dayData}
                daysCount={arr.length}
                handleOpenShowDetailsPopup={handleOpenShowDetailsPopup}
              />
            ))}
          </div>
          <div className="mb-20%">
            <SupportBanner setShowDonatePopup={setShowDonatePopup} />
          </div>
        </div>
      ) : (
        <div className="px-10%">
          {WarlineData.map((dayData, idx, arr) => (
            <Day
              key={idx}
              dayData={dayData}
              daysCount={arr.length}
              handleOpenShowDetailsPopup={handleOpenShowDetailsPopup}
            />
          ))}
          <div className="ml-33%">
            <SupportBanner setShowDonatePopup={setShowDonatePopup} />
          </div>
        </div>
      )}
      <SupportSticky setShowDonatePopup={setShowDonatePopup} />
      {showDonatePopup ? (
        <DonatePopup setShowDonatePopup={setShowDonatePopup} />
      ) : (
        <></>
      )}
      {showDetailsPopup ? <Popup {...eventDetails} /> : null}
    </>
  );
};

export default Warline;
