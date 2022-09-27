import React, { useEffect, useState } from 'react';
import SupportButton from '@components/SupportButton';
import DonatePopup from '@sections/Collections/Warline/DonatePopup';
import { useViewPort } from '@hooks/useViewport';
import { MINT_LINK, RELEASE_DATE, OPENSEA_LINK } from '@sections/constants';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import { useIsMounted } from '@hooks/useIsMounted';
import { openInNewTab } from '@sections/utils';
import MintingModal from '@components/MintingModal';

type PropsSupportSticky = {
  targetAnchorId: string;
};

const SupportSticky = ({ targetAnchorId }: PropsSupportSticky) => {
  const { canMint, canMintSecondDrop } = useWeb3Modal();
  const [openMintingModal, setOpenMintingModal] = useState<boolean>(false);
  const [difference, setDifference] = useState(
    +new Date(RELEASE_DATE) - +new Date(),
  );
  useEffect(() => {
    const timer = setTimeout(() => {
      setDifference(+new Date(RELEASE_DATE) - +new Date());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const CTA =
    difference > 0
      ? 'Support Ukraine while waiting for the drop'
      : 'Mint NFT to support Ukraine';

  const [showDonatePopup, setShowDonatePopup] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(true);
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const { isMobile, isTablet } = useViewPort();

  const onScroll = () => {
    const target = document.getElementById(targetAnchorId);
    if (target) {
      const appear =
        window.scrollY > target?.offsetTop + target?.clientHeight - 200;
      setShow(appear);
    }
    window.innerHeight + window.scrollY <= document.body.offsetHeight - 300
      ? setShow(false)
      : setShow(true);
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  const isMounted = useIsMounted();

  const stickyButton =
    difference > 0 ? (
      <SupportButton
        label="Support Ukraine"
        onClick={() => {
          if (isMobile) setShowBtn(false);
          setShowDonatePopup(true);
        }}
      />
    ) : (
      <div className={`mr-4% pb-5px`}>
        <button
          className="font-rblack text-white rounded-full border-2 px-25px py-12px whitespace-nowrap border-white mobile:text-12px desktop:text-16px
            hover:border-2 hover:shadow-[0_0_0_1px_rgba(255,255,255,1)]"
          onClick={async () => {
            if (await canMintSecondDrop()) {
              isMounted.current && setOpenMintingModal(true);
            } else if (await canMint()) {
              isMounted.current && openInNewTab(MINT_LINK);
            } else {
              isMounted.current && openInNewTab(OPENSEA_LINK);
            }
          }}
        >
          Mint NFT
        </button>
      </div>
    );

  return show ? (
    <></>
  ) : (
    <>
      {isMobile ? (
        <div className="fixed z-10 left-0 bottom-0 bg-carbon w-100% px-10% py-20px mx-auto px-24px">
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
              alt="down-white"
              src={'/img/down-white.svg'}
              style={showBtn ? {} : { transform: 'rotate(-90deg)' }}
            />
          </div>
          {showBtn && <div className="pt-20px">{stickyButton}</div>}
        </div>
      ) : isTablet ? (
        <div className="fixed z-10 left-0 bottom-24px bg-carbon w-100% px-10% py-30px mx-auto px-72px">
          <p className="font-rblack text-32px text-white">{CTA}</p>
          <div className="pt-20px">{stickyButton}</div>
          {openMintingModal ? (
            <MintingModal setOpenMintingModal={setOpenMintingModal} />
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div className="sticky mt-48px z-2 left-0 bottom-24px w-100% desktop:container mx-auto px-132px">
          <div className="flex flex-row items-center justify-center bg-carbon shadow-sticky py-30px">
            <p className="font-rblack text-28px leading-28px text-white">
              {CTA}
            </p>
            <div className="ml-30px mt-7">{stickyButton}</div>
            {openMintingModal ? (
              <MintingModal setOpenMintingModal={setOpenMintingModal} />
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
      {showDonatePopup ? (
        <DonatePopup setShowDonatePopup={setShowDonatePopup} />
      ) : null}
    </>
  );
};

export default SupportSticky;
