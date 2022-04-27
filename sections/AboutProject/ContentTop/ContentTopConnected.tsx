import PoweredByFrame from '@components/PoweredByFrame';
import { useViewPort } from '@hooks/useViewport';
import React from 'react';
import '@dotlottie/player-component';

const ContentTopConnected = () => {
  const { isMobile } = useViewPort();
  return (
    <div className="laptop:pb-100px tablet:pb-72px mobile:pb-60px">
      <div className="flex laptop:flex-row mobile:flex-col justify-between laptop:items-start tablet:items-center">
        <div className="laptop:w-50% tablet:w-100%">
          <div>
            <p
              className={`font-rblack uppercase ${isMobile ? 'text-46px leading-40px' : ''
                }`}
              style={{
                fontSize: isMobile ? '' : '110px',
                lineHeight: isMobile ? '' : '100px',
              }}
            >
              The NFT-museum
            </p>
            <p
              className={`font-rblack laptop:mb-0 tablet:mb-48px mobile:mb-40px ${isMobile ? 'text-27px leading-30px' : 'text-45px leading-48px'
                }`}
            >
              of the war of putin&apos;s russia against Ukraine
            </p>
          </div>
        </div>
        <div className="laptop:w-45% tablet:w-100%">
          <dotlottie-player src={'/lottie/main.lottie'} autoplay loop />
        </div>
      </div>
      <div className="w-100% flex justify-end">
        <div className="laptop:w-45% mobile:w-100%">
          <PoweredByFrame />
        </div>
      </div>
      {/* <CountdownBanner endDate={AUCTION_CLOSING_DATE} hideDate={AUCTION_END_DATE} /> */}
    </div>
  );
};

export default ContentTopConnected;
