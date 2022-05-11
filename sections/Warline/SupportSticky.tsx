import React, { useEffect, useState } from 'react';
import SupportButton from '../../components/SupportButton';
import { useViewPort } from '@hooks/useViewport';
import { MINT_LINK, OPENSEA_LINK } from '@sections/Constants';
import { openInNewTab } from '@sections/utils';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import { SECOND_DROP_DATE } from '@sections/Constants';
import { useCountdown } from '@hooks/useCountdown';
import MintingModal from '@components/MintingModal';

type PropsSupportSticky = {
  setShowDonatePopup: (arg: boolean) => void;
};

const SupportSticky = ({ setShowDonatePopup }: PropsSupportSticky) => {
  const { canMint } = useWeb3Modal();
  const [isNFTDrop, setIsNFTDrop] = useState<boolean>(false);
  const { timerEnd } = useCountdown(SECOND_DROP_DATE);
  const [openMintingModal, setOpenMintingModal] = useState<boolean>(false);

  const getCanMint = async () => {
    let isNFTDrop = false;
    try {
      isNFTDrop = await canMint();
    } catch (e: any) {
      isNFTDrop = false;
    }
    setIsNFTDrop(isNFTDrop);
  };

  // @ts-ignore
  useEffect(() => getCanMint(), []);

  const CTA = !isNFTDrop
    ? 'Support Ukraine while waiting for the drop'
    : 'Mint NFT to support Ukraine';

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
        className={`font-rblack text-white  rounded-full   border-2 px-25px py-12px whitespace-nowrap border-white mobile:text-12px laptop:text-14px desktop:text-16px
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
        Mint NFT
      </button>
    </div>
  );

  return isMobile ? (
    <div className="sticky left-0 bottom-0 bg-carbon w-100% px-10% py-20px">
      {openMintingModal ? (
        <MintingModal setOpenMintingModal={setOpenMintingModal} />
      ) : (
        <></>
      )}
      <div
        className="flex align-center justify-between"
        onClick={() => setShowBtn(!showBtn)}
      >
        <p className="font-rblack mobile:text-16px tablet:text-28px text-white w-60%">
          {CTA}
        </p>
        <img
          src={'img/down-white.svg'}
          style={showBtn ? {} : { transform: 'rotate(-90deg)' }}
        />
      </div>

      {showBtn && <div className="pt-20px">{stickyButton}</div>}
    </div>
  ) : isTablet ? (
    <div className="sticky left-0 bottom-24px bg-carbon w-100% px-10% py-30px justify-center">
      <p className="font-rblack text-32px text-white">{CTA}</p>
      {/* <p className="font-rlight pt-15px text-14px text-white">
        Не дозволь цій хронології продовжитись
      </p> */}
      <div className="pt-20px">{stickyButton}</div>
      {openMintingModal ? (
        <MintingModal setOpenMintingModal={setOpenMintingModal} />
      ) : (
        <></>
      )}
    </div>
  ) : (
    <div className="sticky mt-48px z-0 left-0 bottom-24px bg-carbon w-100% px-10% py-30px shadow-sticky">
      <div className="flex flex-row items-center justify-center">
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
