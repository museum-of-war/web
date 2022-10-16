import React, { useState } from 'react';
import DonateProjectPopup from '@sections/AboutProject/DonateProjectPopup';
import Button2 from '@components/Button2';

import { useViewPort } from '@hooks/useViewport';

type PropsSupportProject = {};

const SupportProject = ({}: PropsSupportProject) => {
  const [showDonatePopup, setShowDonatePopup] = useState<boolean>(false);
  const { isMobile } = useViewPort();

  return (
    <div className="">
      {isMobile ? (
        <>
          <div className="bg-carbon p-40px flex flex-col items-center justify-center">
            <div className="flex align-center justify-center">
              <p className="font-rblack mobile:text-29px text-white leading-30px">
                Support our project
              </p>
            </div>
            <div className="pt-40px mobile:w-full">
              <Button2
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
      ) : (
        <div className="bg-carbon">
          <div className="w-100% px-48px py-48px flex flex-col items-start">
            <p className="font-rblack text-32px text-white leading-36px">
              Support our project
            </p>
            <Button2
              label="Donate"
              className="text-14px mt-[72px] px-[72px]"
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
    </div>
  );
};

export default SupportProject;
