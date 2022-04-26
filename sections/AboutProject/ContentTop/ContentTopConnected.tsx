import PoweredByFrame from '@components/PoweredByFrame';
import { useViewPort } from '@hooks/useViewport';
import React from 'react';
import '@dotlottie/player-component';
import CountdownBanner from './CountdownBanner';
import { AUCTION_CLOSING_DATE, AUCTION_END_DATE } from '@sections/Constants';

const ContentTopConnected = () => {
  const { isMobile } = useViewPort();
  return isMobile ? (
    <div>
      <div className="my-8%">
        <img alt="Logo" src="img/logo.svg" className="w-full" />
        <div className="mt-30px font-rlight text-16px">
          <p>{"The NFT-museum of the war of Putin's Russia against Ukraine"}</p>
          <p className="mt-4% mb-4%">
            NFT-музей війни путінської росії проти України.
          </p>
          <PoweredByFrame />
        </div>
      </div>
      <div className="w-full mb-15%">
        <dotlottie-player src="/lottie/main.lottie" autoplay loop />
      </div>
    </div>
  ) : (
    <div className="pb-100px">
      <div className="flex flex-row justify-between items-center">
        <div className="w-45%">
          <img alt="Logo" src="img/logo.svg" className="w-90%" />
          <div className="mt-30px relative flex flex-row font-rlight justify-between">
            <p className="w-45%">
              The NFT-museum of the war of Putin's Russia against Ukraine{' '}
            </p>
            <p className="w-45%">
              NFT-музей війни путінської росії проти України.{' '}
            </p>
          </div>
        </div>
        <div className="w-45%">
          <dotlottie-player src="/lottie/main.lottie" autoplay loop />
        </div>
      </div>
      <PoweredByFrame />
      <CountdownBanner
        endDate={AUCTION_CLOSING_DATE}
        hideDate={AUCTION_END_DATE}
      />
    </div>
  );
};

export default ContentTopConnected;
