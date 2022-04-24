import { useViewPort } from '@hooks/useViewport';
import React from 'react';
import { MINISTRY_OF_CULTURE_LINK, MINISTRY_LINK } from '@sections/Constants';
import { openInNewTab } from '@sections/utils';

const ApprovedBy = () => {
  const { isMobile } = useViewPort();
  return (
    <div className="flex tablet:flex-row mobile:flex-col tablet:items-center mobile:items-start justify-between mt-24px tablet:w-100%">
      <p
        style={{ display: 'inline-block' }}
        className="font-rlight laptop:text-16px tablet:text-16px mobile:text-14px"
      >
        An official collection {isMobile ? <></> : <br />} approved by:
      </p>
      {
        isMobile
          ? <div className="w-100% flex items-center mobile:mt-10px">
            <button className="mr-20px" onClick={() => openInNewTab(MINISTRY_LINK)}>
              <img src={'img/partners/small/Ministry_of_Digital_small.png'} alt="logo_Ministry_of_Digital" />
            </button>
            <button onClick={() => openInNewTab(MINISTRY_OF_CULTURE_LINK)}>
              <img src={'img/partners/small/Ministry_of_Culture_of_Ukraine_small.png'} alt="logo_Ministry_of_Culture" />
            </button>
          </div>
          : <>
            <button onClick={() => openInNewTab(MINISTRY_LINK)}>
              <img src={'img/Logo_Ministry_Digital_Transformation.png'} alt="logo_Ministry_of_Digital" />
            </button>
            <button onClick={() => openInNewTab(MINISTRY_OF_CULTURE_LINK)}>
              <img src={'img/Logo_of_Ministry_of_Culture_of_Ukraine_eng.png'} alt="logo_Ministry_of_Culture" />
            </button>
          </>
      }
    </div>
  );
};

export default ApprovedBy;
