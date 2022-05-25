import React, { useState } from 'react';
import PoweredByFrame from '@components/PoweredByFrame';
import { useViewPort } from '@hooks/useViewport';
import Button from '@components/Button';
import { openInNewTab } from '@sections/utils';
import { MINT_LINK, OPENSEA_LINK } from '@sections/Constants';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import { useCountdown } from '@hooks/useCountdown';
import { SECOND_DROP_DATE } from '@sections/Constants';
import MintingModal from '../../../components/MintingModal';
import { Links } from '@components/Links';

const ContentTopNotConnected = () => {
  const { isMobile, isTablet } = useViewPort();
  const { canMint, canMintSecondDrop } = useWeb3Modal();
  const { timerEnd } = useCountdown(SECOND_DROP_DATE);
  const [openMintingModal, setOpenMintingModal] = useState<boolean>(false);

  return (
    <div
      className={
        isMobile
          ? 'pb-40px'
          : isTablet
          ? 'pb-72px'
          : 'flex flex-row justify-between pb-100px mt-8vh'
      }
    >
      <div
        className={`${
          isMobile || isTablet ? 'w-100%' : 'w-[544px]'
        } flex flex-col justify-between`}
      >
        <div>
          <p className="font-rblack uppercase desktop:mt-10px tablet:mt-0 tablet:text-84px tablet:leading-72px mobile:text-46px mobile:leading-40px">
            The NFT-museum
          </p>
          <p className="font-rblack mobile:mt-10px mobile:text-27px mobile:leading-30px tablet:text-32px tablet:leading-36px tablet:mt-12px">
            of the war of putin&apos;s russia against Ukraine
          </p>
        </div>
        <div
          className={`w-100% flex content-center items-center ${
            isTablet ? 'mt-36px mb-48px' : isMobile ? 'mt-30px mb-40px' : ''
          } desktop:flex-row tablet:flex-row mobile:flex-col`}
        >
          <Button
            mode="primary"
            className="px-48px mb-0 tablet:h-48px mobile:h-60px desktop:mb-0 tablet:mb-15 mobile:mb-15 mobile:w-100% tablet:w-auto"
            round={false}
            label="Mint NFT Now"
            onClick={async () => {
              if (timerEnd && (await canMintSecondDrop())) {
                setOpenMintingModal(true);
              } else {
                if (await canMint()) {
                  openInNewTab(MINT_LINK);
                } else {
                  openInNewTab(OPENSEA_LINK);
                }
              }
            }}
          />
          <div
            className="desktop:mt-0 tablet:mt-0 mobile:mt-30px desktop:ml-auto tablet:ml-auto mobile:ml-0
              desktop:px-0 tablet:px-0 mobile:px-20px desktop:w-auto tablet:w-auto mobile:w-full"
          >
            <Links />
          </div>
        </div>
      </div>
      <div
        className={`${
          isMobile || isTablet ? 'w-100%' : 'w-[544px]'
        } flex flex-col justify-between`}
      >
        <div className="inline-block">
          <video src="/vid/pd-header-optimized.mp4" autoPlay loop muted />
        </div>
        <PoweredByFrame />
      </div>
      {openMintingModal ? (
        <MintingModal setOpenMintingModal={setOpenMintingModal} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ContentTopNotConnected;
