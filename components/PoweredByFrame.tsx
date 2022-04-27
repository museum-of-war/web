import { useViewPort } from '@hooks/useViewport';
import React from 'react';
import { MINISTRY_LINK } from '@sections/Constants';
import { openInNewTab } from '@sections/utils';

const ApprovedBy = () => {
  const { isMobile } = useViewPort();
  return (
    <div className="flex flex-row items-center justify-between mt-24px tablet:w-100%">
      <p
        style={{ display: 'inline-block' }}
        className="font-rlight laptop:text-16px tablet:text-16px mobile:text-14px"
      >
        An official collection {isMobile ? <br /> : <></>} approved by:
      </p>
      <button onClick={() => openInNewTab(MINISTRY_LINK)}>
        {
          isMobile
          ? <img src={'img/MoDT_mobile_top.png'} alt="logo_Ministry_of_Digital" />
          : <img src={'img/Logo_Ministry_Digital_Transformation.png'} alt="logo_Ministry_of_Digital" />
        }
      </button>
    </div>
  );
};

export default ApprovedBy;
