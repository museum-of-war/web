import ApprovedAndSupportedBy from '@components/ApprovedAndSupportedBy';
import React from 'react';

const ContentTopConnected = () => {
  return (
    <div className="pb-40px tablet:pb-72px desktop:pb-100px">
      <div className="flex desktop:flex-row desktop:gap-48px mobile:flex-col justify-between desktop:items-start">
        <div className="flex-1">
          <div>
            <p className="font-rblack uppercase desktop:mt-10px tablet:mt-0 tablet:text-84px tablet:leading-72px mobile:text-46px mobile:leading-40px">
              The NFT-museum
            </p>
            <p className="font-rblack mobile:mt-10px mobile:mb-40px mobile:text-27px mobile:leading-30px tablet:text-32px tablet:leading-36px tablet:mt-12px tablet:mb-48px desktop:mb-0">
              of the war of putin&apos;s russia against Ukraine
            </p>
          </div>
        </div>
        <div
          className="flex-1"
          dangerouslySetInnerHTML={{
            __html: `<video class="w-100%" src="/vid/pd-header-optimized.mp4" autoPlay loop muted playsInline/>`,
          }}
        />
      </div>
      <ApprovedAndSupportedBy />
    </div>
  );
};

export default ContentTopConnected;
