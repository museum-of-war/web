import React, { useState } from "react";
import DonateProjectPopup from "@sections/AboutProject/DonateProjectPopup";
import SupportButton from "@components/SupportButton";

import { useViewPort } from "@hooks/useViewport";

type PropsSupportProject = {};

const SupportProject = ({}: PropsSupportProject) => {
  const [showDonatePopup, setShowDonatePopup] = useState<boolean>(false);
  const { isMobile, isTablet } = useViewPort();

  return (
    <>
      {isMobile ? (
        <>
          <div className="bg-carbon w-100% p-40px flex flex-col items-center justify-center">
            <div className="flex align-center justify-center">
              <p className="font-rblack mobile:text-29px text-white leading-30px">
                Support our project
              </p>
            </div>

            <div className="pt-40px  ">
              <SupportButton
                label={"Donate"}
                className={"min-w-240px leading-36px mobile:text-14px"}
                onClick={() => {
                  setShowDonatePopup(true);
                }}
              />
            </div>
          </div>
          <img
            className="h-100%"
            alt="dots"
            src="/img/pd-dotsHorizontalMobile.png"
          />
        </>
      ) : isTablet ? (
        <div className="bg-carbon w-100% p-72px flex flex-row items-center justify-between">
          <p className="font-rblack text-32px text-white leading-36px">
            Support our project
          </p>
          <SupportButton
            label={"Donate"}
            className={"tablet:text-14px"}
            onClick={() => {
              setShowDonatePopup(true);
            }}
          />
        </div>
      ) : (
        <div className="px-10%">
          <div className="bg-carbon w-100% p-72px flex flex-row items-center justify-between">
            <p className="font-rblack text-32px text-white leading-36px">
              Support our project
            </p>
            <SupportButton
              label={"Donate"}
              className={"text-14px"}
              onClick={() => {
                setShowDonatePopup(true);
              }}
            />
          </div>
        </div>
      )}
      {showDonatePopup && (
        <DonateProjectPopup setShowDonatePopup={setShowDonatePopup} />
      )}
    </>
  );
};

export default SupportProject;
