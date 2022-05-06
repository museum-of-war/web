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
        <img
          src={'img/Logo_of_Ministry_of_Digital_Transformation.svg'}
          alt="Ministry of Digital Transformation logo"
          height={isMobile ? 26 : 48}
          width={isMobile ? 115 : 212}
        />
      </button>
    </div>
  );
};

export default ApprovedBy;
