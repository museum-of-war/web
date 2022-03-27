import React, { useState } from "react";
import SupportButton from "@components/SupportButton";
import DonatePopup from "@sections/Warline/DonatePopup";

import { useViewPort } from "@hooks/useViewport";

type PropsSupportSticky = {
  endDate: string,
};

const SupportSticky = ({ endDate }: PropsSupportSticky) => {
  const difference = +new Date(endDate) - +new Date();
  const [showDonatePopup, setShowDonatePopup] = useState<boolean>(false);
  const { isMobile, isTablet } = useViewPort();

  if (difference < 0) return null;

  return (
    <>
      {isMobile ? (
        <div className="sticky left-0 bottom-0 bg-carbon w-100% px-10% py-30px">
          <p className="font-rblack mobile:text-16px tablet:text-28px text-white">
            Support Ukraine while waiting for the drop
          </p>
          <div className="pt-20px">
            <SupportButton
              label={"Support Ukraine"}
              onClick={() => {
                setShowDonatePopup(true);
              }}
            />
          </div>
        </div>
      ) : isTablet ? (
        <div className="sticky left-0 bottom-0 bg-carbon w-100% px-10% py-30px">
          <p className="font-rblack text-32px text-white">
            Support Ukraine while waiting for the drop
          </p>
          <div className="pt-20px">
            <SupportButton
              label={"Support Ukraine"}
              onClick={() => {
                setShowDonatePopup(true);
              }}
            />
          </div>
        </div>
      ) : (
        <div className="sticky z-0 left-0 bottom-0 bg-carbon w-100% px-10% py-30px flex flex-row items-center justify-center">
          <p className="font-rblack text-28px leading-28px text-white">
            Support Ukraine while waiting for the drop
          </p>
          <div className="ml-30px mt-7">
            <SupportButton
              label={"Support Ukraine"}
              onClick={() => {
                setShowDonatePopup(true);
              }}
            />
          </div>
        </div>
      )}
      {showDonatePopup && difference > 0 ? (
        <DonatePopup setShowDonatePopup={setShowDonatePopup} />
      ) : null}
    </>
  );
};

export default SupportSticky;
