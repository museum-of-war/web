import { useViewPort } from '@hooks/useViewport';
import React from 'react';
// import { FRAME_LINK, MINISTRY_LINK } from '@sections/Constants';
// import { openInNewTab } from '@sections/utils';

const PoweredByFrame = () => {
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
            <img className="mr-20px" src={'img/partners/small/Ministry_of_Digital_small.png'} alt="logo_Ministry_of_Digital" />
            <img className="" src={'img/partners/small/Ministry_of_Culture_of_Ukraine_small.png'} alt="logo_Ministry_of_Culture" />
          </div>
          : <>
            <img className="" src={'img/Logo_Ministry_Digital_Transformation.png'} alt="logo_Ministry_of_Digital" />
            <img className="" src={'img/Logo_of_Ministry_of_Culture_of_Ukraine_eng.png'} alt="logo_Ministry_of_Culture" />
          </>
      }
    </div>
  );
};

export default PoweredByFrame;
