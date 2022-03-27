import React, { useState } from "react";
import Day from "./Day";
import DonatePopup from "./DonatePopup";
import SupportBanner from "./SupportBanner";
import { useViewPort } from "@hooks/useViewport";
import SupportSticky from "./SupportSticky";
import WarlineData from "./WarlineData";

const Warline = () => {
  const { isMobile, isTablet } = useViewPort();
  const [showDonatePopup, setShowDonatePopup] = useState<boolean>(false);

  return (
    <>
      {isMobile ? (
        <div className="">
          <div className="px-10%">
            {WarlineData.map((dayData, idx, arr) => (
              <Day key={idx} dayData={dayData} daysCount={arr.length} />
            ))}
          </div>
          <div className="mb-20%">
            <SupportBanner setShowDonatePopup={setShowDonatePopup} />
          </div>
        </div>
      ) : isTablet ? (
        <div className="">
          <div className="px-10%">
            {WarlineData.map((dayData, idx, arr) => (
              <Day key={idx} dayData={dayData} daysCount={arr.length} />
            ))}
          </div>
          <div className="mb-20% ">
            <SupportBanner setShowDonatePopup={setShowDonatePopup} />
          </div>
        </div>
      ) : (
        <div className="px-10%">
          {WarlineData.map((dayData, idx, arr) => (
            <Day key={idx} dayData={dayData} daysCount={arr.length} />
          ))}
          <div className="ml-33% ">
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
    </>
  );
};

export default Warline;
