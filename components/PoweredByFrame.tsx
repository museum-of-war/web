import { useViewPort } from '@hooks/useViewport';
import React from 'react';
import { MINISTRY_CULTURE_LINK, MINISTRY_DT_LINK } from '@sections/Constants';
import { openInNewTab } from '@sections/utils';

const ApprovedBy = () => {
  const { isMobile } = useViewPort();

  return (
    <div className="flex flex-row items-center justify-between mt-24px tablet:w-100%">
      <p
        style={{ display: 'inline-block' }}
        className="font-rlight desktop:text-16px tablet:text-16px mobile:text-14px"
      >
        National NFT platform
        <br />
        approved by:
      </p>
      <button onClick={() => openInNewTab(MINISTRY_DT_LINK)}>
        <img
          src={'img/Logo_of_Ministry_of_Digital_Transformation.svg'}
          alt="Ministry of Digital Transformation logo"
          height={isMobile ? 26 : 40}
          width={isMobile ? 115 : 178}
        />
      </button>
      <button onClick={() => openInNewTab(MINISTRY_CULTURE_LINK)}>
        <img
          src={'img/partners/Logo_of_Ministry_of_Culture_of_Ukraine.svg'}
          alt="Ministry of Culture of Ukraine logo"
          height={isMobile ? 36 : 48}
          width={isMobile ? 69 : 97}
        />
      </button>
    </div>
  );
};

export default ApprovedBy;
