import PoweredByFrame from '@components/PoweredByFrame';
import React from 'react';

const ContentTopConnected = () => {
  return (
    <div className="desktop:pb-100px tablet:pb-72px mobile:pb-40px">
      <div className="flex desktop:flex-row mobile:flex-col justify-between desktop:items-start tablet:items-center">
        <div className="desktop:w-[544px] tablet:w-100%">
          <div>
            <p className="font-rblack uppercase desktop:mt-10px tablet:mt-0 tablet:text-84px tablet:leading-72px mobile:text-46px mobile:leading-40px">
              The NFT-museum
            </p>
            <p className="font-rblack mobile:mt-10px mobile:mb-40px mobile:text-27px mobile:leading-30px tablet:text-32px tablet:leading-36px tablet:mt-12px tablet:mb-48px desktop:mb-0">
              of the war of putin&apos;s russia against Ukraine
            </p>
          </div>
        </div>
        <div className="desktop:w-[544px] tablet:w-100%">
          <div
            dangerouslySetInnerHTML={{
              __html: `<video
                src="/vid/pd-header-optimized.mp4"
                autoPlay
                loop
                muted
                playsinline
              />`,
            }}
          />
        </div>
      </div>
      <div className="w-100% flex justify-end">
        <div className="desktop:w-45% mobile:w-100%">
          <PoweredByFrame />
        </div>
      </div>
    </div>
  );
};

export default ContentTopConnected;
