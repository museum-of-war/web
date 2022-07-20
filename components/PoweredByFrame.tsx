import { useViewPort } from '@hooks/useViewport';
import React from 'react';
import { MINISTRY_CULTURE_LINK, MINISTRY_DT_LINK } from '@sections/Constants';
import { openInNewTab } from '@sections/utils';

const ApprovedBy = () => {
  const { isMobile } = useViewPort();

  return (
    <div className="flex desktop:flex-row tablet:flex-row mobile:flex-col items-start justify-between mt-24px tablet:w-100%">
      <p
        style={{ display: 'inline-block' }}
        className="font-rlight desktop:text-16px tablet:text-16px mobile:text-14px"
      >
        National NFT platform
        {isMobile ? ' ' : <br />}
        approved by:
      </p>
      <div className="flex items-center content-between desktop:mt-0 tablet:mt-0 mobile:mt-20px">
        <button onClick={() => openInNewTab(MINISTRY_DT_LINK)}>
          <img
            src={'/img/Logo_of_Ministry_of_Digital_Transformation.svg'}
            alt="Ministry of Digital Transformation logo"
            height={isMobile ? 26 : 40}
            width={isMobile ? 115 : 178}
          />
        </button>
        <button
          className="ml-32px"
          onClick={() => openInNewTab(MINISTRY_CULTURE_LINK)}
        >
          <img
            src={'/img/partners/Logo_of_Ministry_of_Culture_of_Ukraine.svg'}
            alt="Ministry of Culture of Ukraine logo"
            height={isMobile ? 36 : 48}
            width={isMobile ? 69 : 97}
          />
        </button>
      </div>
    </div>
  );
};

export default ApprovedBy;
