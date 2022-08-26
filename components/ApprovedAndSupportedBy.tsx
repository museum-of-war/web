import { useViewPort } from '@hooks/useViewport';
import React from 'react';
import { MINISTRY_CULTURE_LINK, MINISTRY_DT_LINK } from '@sections/Constants';
import { openInNewTab } from '@sections/utils';

const ApprovedAndSupportedBy = () => {
  const { isMobile } = useViewPort();

  return (
    <div className="flex flex-row gap-48px items-start justify-between tablet:mt-24px mobile:mt-20px">
      <div className="flex flex-col basis-1/2">
        <p className="font-rlight tablet:text-16px mobile:text-14px tablet:leading-36px mobile:leading-20px">
          Approved by:
        </p>
        <button onClick={() => openInNewTab(MINISTRY_DT_LINK)}>
          <img
            src={'img/Logo_of_Ministry_of_Digital_Transformation.svg'}
            alt="Ministry of Digital Transformation logo"
            height={isMobile ? 18 : 36}
            width={isMobile ? 80 : 160}
          />
        </button>
      </div>
      <div className="flex flex-col basis-1/2">
        <p className="font-rlight tablet:text-16px mobile:text-14px tablet:leading-36px mobile:leading-20px">
          Supported by:
        </p>
        <button onClick={() => openInNewTab(MINISTRY_CULTURE_LINK)}>
          <img
            src={'img/partners/Logo_of_Ministry_of_Culture_of_Ukraine.svg'}
            alt="Ministry of Culture of Ukraine logo"
            height={isMobile ? 16 : 28}
            width={isMobile ? 46 : 86}
          />
        </button>
      </div>
    </div>
  );
};

export default ApprovedAndSupportedBy;
