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
    <div className="flex tablet:flex-row mobile:flex-col tablet:gap-48px mobile:gap-20px items-start justify-between desktop:mt-24px tablet:mt-48px mobile:mt-20px">
      <div className="flex tablet:flex-col mobile:flex-row basis-1/2 tablet:h-100% mobile:w-100% tablet:w-auto justify-between tablet:items-start mobile:items-center">
        <p className="min-w-150px basis-1/2 font-rnarrow tablet:text-16px mobile:text-14px tablet:leading-36px mobile:leading-20px mobile:whitespace-normal tablet:whitespace-nowrap">
          National NFT platform approved by:
        </p>
        <button
          className="mobile:py-[3px] tablet:py-[6px]"
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
      <div className="flex tablet:flex-col mobile:flex-row basis-1/2 tablet:h-100% mobile:w-100% tablet:w-auto justify-between tablet:items-start mobile:items-center">
        <p className="basis-1/2 font-rnarrow tablet:text-16px mobile:text-14px tablet:leading-36px mobile:leading-20px mobile:whitespace-normal tablet:whitespace-nowrap">
          Supported by:
        </p>
        <div className="flex flex-row tablet:gap-48px tablet:w-100% mobile:gap-20px items-center justify-between mobile:py-[3px] tablet:py-[6px]">
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
