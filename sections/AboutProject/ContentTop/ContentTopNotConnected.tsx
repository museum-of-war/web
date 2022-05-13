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

type ContentTopNotConnectedProps = {
  signerAddress: string;
  handleConnect: () => void;
};

const ContentTopNotConnected = ({
  signerAddress,
  handleConnect,
}: ContentTopNotConnectedProps) => {
  const { isMobile, isTablet } = useViewPort();
  const { canMint, canMintSecondDrop } = useWeb3Modal();
  const { timerEnd } = useCountdown(SECOND_DROP_DATE);
  const [openMintingModal, setOpenMintingModal] = useState<boolean>(false);

  return (
    <div
      className={
        isMobile
          ? 'pb-60px'
          : isTablet
          ? 'pb-72px'
          : 'flex flex-row justify-between pb-100px mt-8vh'
      }
    >
      <div
        className={`${
          isMobile || isTablet ? 'w-100%' : 'w-50%'
        } flex flex-col justify-between`}
      >
        <div>
          <p className="font-rblack uppercase laptop:mt-10px tablet:mt-0 tablet:text-84px tablet:leading-72px mobile:text-46px mobile:leading-40px">
            The NFT-museum
          </p>
          <p className="font-rblack mobile:mt-10px mobile:text-27px mobile:leading-30px tablet:text-32px tablet:leading-36px tablet:mt-12px">
            of the war of putin&apos;s russia against Ukraine
          </p>
        </div>
        <div
          className={`w-100% flex content-center ${
            isTablet ? 'mt-36px mb-48px' : isMobile ? 'mt-30px mb-40px' : ''
          }`}
        >
          <Button
            mode="primary"
            className="px-48px mb-0 tablet:h-48px mobile:h-60px mb-15 mobile:w-100% tablet:w-auto"
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
        </div>
      </div>
      <div
        className={`${
          isMobile || isTablet ? 'w-100%' : 'w-50%'
        } flex flex-col justify-between`}
      >
        <div
          className={`inline-block ${
            isMobile
              ? 'min-h-[67px]'
              : isTablet
              ? 'min-h-[164px]'
              : 'min-h-[347px]'
          }`}
        >
          <dotlottie-player src={'/lottie/main.lottie'} autoplay loop />
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
