import React, { useCallback, useEffect, useState } from 'react';
import SupportButton from '@components/SupportButton';
import { useViewPort } from '@hooks/useViewport';
import { MINT_LINK, OPENSEA_LINK } from '@sections/constants';
import { openInNewTab } from '@sections/utils';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import { SECOND_DROP_DATE } from '@sections/constants';
import { useCountdown } from '@hooks/useCountdown';
import MintingModal from '@components/MintingModal';
import Button from '@components/Button';

type PropsSupportSticky = {
  setShowDonatePopup: (arg: boolean) => void;
};

const SupportSticky = ({ setShowDonatePopup }: PropsSupportSticky) => {
  const { canMint } = useWeb3Modal();
  const [isNFTDrop, setIsNFTDrop] = useState<boolean>(false);
  const { timerEnd } = useCountdown(SECOND_DROP_DATE);
  const [openMintingModal, setOpenMintingModal] = useState<boolean>(false);

  const getCanMint = useCallback(async () => {
    let isNFTDrop = false;
    try {
      isNFTDrop = await canMint();
    } catch (e: any) {
      isNFTDrop = false;
    }
    setIsNFTDrop(isNFTDrop);
  }, [canMint]);

  useEffect(() => {
    getCanMint();
  }, [getCanMint]);

  const CTA = !isNFTDrop
    ? 'Support Ukraine while waiting for the drop'
    : 'Mint random NFT to support Ukraine';

  const { isMobile, isTablet } = useViewPort();
  const [showBtn, setShowBtn] = useState<boolean>(false);

  const stickyButton = !isNFTDrop ? (
    <SupportButton
      label={'Support Ukraine'}
      onClick={() => {
        if (isMobile) setShowBtn(false);
        setShowDonatePopup(true);
      }}
    />
  ) : (
    <div className={`mr-4% pb-5px`}>
      <button
        className={`font-rblack text-white rounded-full border-2 px-25px py-12px whitespace-nowrap border-white mobile:text-12px tablet:text-14px desktop:text-16px
        hover:border-2 hover:shadow-[0_0_0_1px_rgba(255,255,255,1)]`}
        onClick={() => {
          if (timerEnd) {
            setOpenMintingModal(true);
          } else {
            if (isNFTDrop) {
              openInNewTab(MINT_LINK);
            } else {
              openInNewTab(OPENSEA_LINK);
            }
          }
        }}
      >
        Mint NFT Now
      </button>
    </div>
  );

  return isMobile ? (
    <div
      className={`sticky left-0 bottom-0  mx-auto px-24px ${
        !isNFTDrop ? 'bg-carbon w-100% px-10% py-20px' : ''
      } `}
    >
      {openMintingModal ? (
        <MintingModal setOpenMintingModal={setOpenMintingModal} />
      ) : (
        <></>
      )}
      {isNFTDrop ? (
        <Button
          mode="primary"
          label="Mint Random NFT Now"
          className="text-14px leading-48px w-100% py-6 border-carbon mb-10px shadow-3xl"
          onClick={() => {
            setShowDonatePopup(true);
          }}
        />
      ) : (
        <div
          className="flex align-center justify-between"
          onClick={() => setShowBtn(!showBtn)}
        >
          <p className="font-rblack mobile:text-16px tablet:text-28px text-white w-60%">
            {CTA}
          </p>
          <img
            src={'/img/down-white.svg'}
            alt="down"
            style={showBtn ? {} : { transform: 'rotate(-90deg)' }}
          />
        </div>
      )}
      {showBtn && <div className="pt-20px">{stickyButton}</div>}
    </div>
  ) : isTablet ? (
    <div className="sticky bottom-24px bg-carbon w-100% p-40px flex items-center justify-between shadow-3xl mx-auto px-72px">
      <p className="font-rblack text-30px leading-36px text-white">{CTA}</p>
      <div>{stickyButton}</div>
      {openMintingModal ? (
        <MintingModal setOpenMintingModal={setOpenMintingModal} />
      ) : (
        <></>
      )}
    </div>
  ) : (
    <div className="sticky mt-48px z-0 left-0 bottom-24px w-100% desktop:container mx-auto px-132px">
      <div className="flex flex-row items-center justify-center py-30px shadow-sticky bg-carbon">
        <p className="font-rblack text-28px leading-28px text-white">{CTA}</p>
        <div className="ml-30px mt-7">{stickyButton}</div>
      </div>
      {openMintingModal ? (
        <MintingModal setOpenMintingModal={setOpenMintingModal} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default SupportSticky;
