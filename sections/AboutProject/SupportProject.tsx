import React, { useState } from 'react';
import DonateProjectPopup from '@sections/AboutProject/DonateProjectPopup';
import SupportButton from '@components/SupportButton';

import { useViewPort } from '@hooks/useViewport';

type PropsSupportProject = {};

const SupportProject = ({}: PropsSupportProject) => {
  const [showDonatePopup, setShowDonatePopup] = useState<boolean>(false);
  const { isMobile, isTablet } = useViewPort();

  return (
    <>
      {isMobile ? (
        <>
          <div className="bg-carbon mt-56px p-40px flex flex-col items-center justify-center -mx-24px">
            <div className="flex align-center justify-center">
              <p className="font-rblack mobile:text-29px text-white leading-30px">
                Support our project
              </p>
            </div>
            <div className="pt-40px mobile:w-full">
              <SupportButton
                label="Donate"
                className={
                  'min-w-240px leading-36px mobile:text-14px mobile:w-full'
                }
                onClick={() => {
                  setShowDonatePopup(true);
                }}
              />
            </div>
          </div>
        </>
      ) : isTablet ? (
        <div className="bg-carbon p-72px mt-96px flex flex-row items-center justify-between -mx-72px">
          <p className="font-rblack text-32px text-white leading-36px">
            Support our project
          </p>
          <SupportButton
            label="Donate"
            className="tablet:text-14px px-48px"
            onClick={() => {
              setShowDonatePopup(true);
            }}
          />
        </div>
      ) : (
        <div className="bg-carbon mt-120px">
          <div className="w-100% px-96px py-72px flex flex-row items-center justify-between">
            <p className="font-rblack text-32px text-white leading-36px">
              Support our project
            </p>
            <SupportButton
              label="Donate"
              className="text-14px ml-30px px-[72px]"
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
      <div className="desktop:w-30% tablet:w-65% block m-auto mt-2% mb-120px mobile:mb-48px">
        <img alt="Dots" src="img/pd-dots1.png" />
      </div>
    </>
  );
};

export default SupportProject;
