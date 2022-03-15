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

  return isMobile ? (
    <div className="">
      <div className="px-10%">
        {WarlineData.map((dayData, idx) => (
          <Day key={idx} dayData={dayData} />
        ))}
      </div>
      <div className="mb-20%">
        <SupportBanner setShowDonatePopup={setShowDonatePopup} />
      </div>
      <SupportSticky setShowDonatePopup={setShowDonatePopup} />
      {showDonatePopup ? (
        <DonatePopup setShowDonatePopup={setShowDonatePopup} />
      ) : (
        <></>
      )}
    </div>
  ) : isTablet ? (
    <div className="">
      <div className="px-10%">
        {WarlineData.map((dayData, idx) => (
          <Day key={idx} dayData={dayData} />
        ))}
      </div>
      <div className="mb-20% ">
        <SupportBanner setShowDonatePopup={setShowDonatePopup} />
      </div>
      <SupportSticky setShowDonatePopup={setShowDonatePopup} />
      {showDonatePopup ? (
        <DonatePopup setShowDonatePopup={setShowDonatePopup} />
      ) : (
        <></>
      )}
    </div>
  ) : (
    <div className="px-10%">
      {WarlineData.map((dayData, idx) => (
        <Day key={idx} dayData={dayData} />
      ))}

      <div className="ml-33% ">
        <SupportBanner setShowDonatePopup={setShowDonatePopup} />
      </div>
      <SupportSticky setShowDonatePopup={setShowDonatePopup} />
      {showDonatePopup ? (
        <DonatePopup setShowDonatePopup={setShowDonatePopup} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Warline;
