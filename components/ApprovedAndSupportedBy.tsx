import { useViewPort } from '@hooks/useViewport';
import React from 'react';
import {
  BAU_LINK,
  MINISTRY_DT_LINK,
  MINISTRY_CULTURE_LINK,
} from '@sections/constants';
import { openInNewTab } from '@sections/utils';

const ApprovedAndSupportedBy = () => {
  const { isMobile } = useViewPort();

  return (
    <div className="flex flex-row gap-48px items-start justify-between tablet:mt-24px mobile:mt-20px">
      <div className="flex flex-col basis-1/2 h-100% justify-between">
        <p className="font-rlight tablet:text-16px mobile:text-14px tablet:leading-36px mobile:leading-20px">
          Approved by:
        </p>
        <button
          className="mobile:py-[3px] tablet:py-[6px] mobile:mt-10px tablet:mt-0"
          onClick={() => openInNewTab(MINISTRY_DT_LINK)}
        >
          <img
            src={'img/Logo_of_Ministry_of_Digital_Transformation.svg'}
            alt="Ministry of Digital Transformation logo"
            height={isMobile ? 18 : 36}
            width={isMobile ? 80 : 160}
          />
        </button>
      </div>
      <div className="flex flex-col basis-1/2 h-100% justify-between">
        <p className="font-rlight tablet:text-16px mobile:text-14px tablet:leading-36px mobile:leading-20px">
          Supported by:
        </p>
        <div className="flex flex-row tablet:gap-48px mobile:gap-20px items-center justify-start mobile:py-[3px] tablet:py-[6px] mobile:mt-10px tablet:mt-0">
          <button onClick={() => openInNewTab(MINISTRY_CULTURE_LINK)}>
            <img
              src={'img/partners/Logo_of_Ministry_of_Culture_of_Ukraine.svg'}
              alt="Ministry of Culture of Ukraine logo"
              height={isMobile ? 16 : 28}
              width={isMobile ? 46 : 86}
            />
          </button>
          <button onClick={() => openInNewTab(BAU_LINK)}>
            <img
              src={'img/partners/blockchain_association.png'}
              alt="Blockchain Association of Ukraine logo"
              height={isMobile ? 15 : 24}
              width={isMobile ? 60 : 93}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApprovedAndSupportedBy;
