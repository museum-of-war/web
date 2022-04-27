import PoweredByFrame from '@components/PoweredByFrame';
import React from 'react';
import '@dotlottie/player-component';

const ContentTopConnected = () => {
  return (
    <div className="laptop:pb-100px tablet:pb-72px mobile:pb-60px">
      <div className="flex laptop:flex-row mobile:flex-col justify-between laptop:items-start tablet:items-center">
        <div className="laptop:w-50% tablet:w-100%">
        <div>
          <p className="font-rblack uppercase laptop:mt-10px tablet:mt-0 tablet:text-84px tablet:leading-72px mobile:text-46px mobile:leading-40px">
            The NFT-museum
          </p>
          <p className="font-rblack mobile:mt-10px mobile:mb-40px mobile:text-27px mobile:leading-30px tablet:text-32px tablet:leading-36px tablet:mt-12px tablet:mb-48px laptop:mb-0">
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
    </div>
  );
};

export default ContentTopConnected;
