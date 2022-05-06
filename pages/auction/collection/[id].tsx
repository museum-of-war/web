import React, { useCallback, useEffect, useRef, useState } from 'react';
import ContentAuction from '@sections/Auction/ContentAuction';
import MintingModal from '@components/MintingModal';
import DropNft from '@sections/Auction/DropNft';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import { openInNewTab } from '@sections/utils';
import { MINT_LINK, OPENSEA_LINK } from '@sections/Constants';
import { useAppRouter } from '@hooks/useAppRouter';
import { FILTER_OPTIONS_CATEGORIES } from '@sections/Auction/cosntants';
import Link from 'next/link';
import { Dialog } from '@mui/material';
import { useViewPort } from '@hooks/useViewport';
import { SharedProps } from '@components/wrapper';

const CollectionDetailsPage: React.FC<SharedProps> = ({ menuOpen }) => {
  const { isMobile, isTablet, isDesktop } = useViewPort();
  const [isCanMint, setCanMint] = useState<boolean>(false);
  const [openMintingModal, setOpenMintingModal] = useState<boolean>(false);
  const [splashHeight, setSplashHeight] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const { query } = useAppRouter();
  const splashRef = useRef<HTMLImageElement>(null);

  const { canMint, canMintSecondDrop } = useWeb3Modal();

  useEffect(() => {
    canMintSecondDrop().then((val) =>
      val ? setCanMint(true) : canMint().then((i) => setCanMint(i)),
    );
  }, []);

  const handleBuyNft = async () => {
    if (await canMintSecondDrop()) {
      setOpenMintingModal(true);
    } else if (await canMint()) {
      openInNewTab(MINT_LINK);
    } else {
      openInNewTab(OPENSEA_LINK);
    }
  };

  const handleResize = useCallback(() => {
    if (splashRef.current) {
      setSplashHeight(splashRef.current.clientHeight);
    }
  }, [isDesktop, isTablet, isMobile]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (query.id === undefined) return null;

  return (
    <div>
      <img
        src="/img/temp/img_1.png"
        alt=""
        width="100%"
        height="auto"
        className="absolute left-0 top-100px z-0"
        onLoad={handleResize}
        ref={splashRef}
      />
      <div
        className="absolute desktop:h-120px tablet:h-120px mobile:h-100px bg-carbon m-auto flex items-center desktop:px-80px tablet:px-40px mobile:px-30px"
        style={{
          top: splashHeight - (isMobile ? -80 : 20),
          left: isMobile ? 0 : 72,
          right: isMobile ? 0 : 72,
        }}
      >
        <Link href={'/auction'} passHref>
          <div className="h-[48px] flex items-center cursor-pointer group desktop:mt-20px tablet:mt-20px mobile:mt-0">
            <img
              alt="arrow back"
              src={'/img/down-white.svg'}
              className="rotate-90 flex-grow-0 leading-[48px]"
            />
            <span className="font-rblack text-[14px] ml-[8px] h-full leading-[48px] group-hover:border-b-4 group-hover:border-b-carbon transition-[border-width]">
              All collections
            </span>
          </div>
        </Link>
      </div>
      <p
        className="font-rblack mobile:text-38px mobile:leading-38px tablet:text-70px tablet:leading-70px uppercase"
        style={{ marginTop: splashHeight - (menuOpen ? 124 : 0) - 8 }}
      >
        {FILTER_OPTIONS_CATEGORIES[+query.id]?.text}
      </p>
      <div className="h-5px w-100% bg-carbon dark:bg-white" />
      <div className="desktop:py-40px laptop:py-40px tablet:pb-0 tablet:pt-40px mobile:pb-0 mobile:pt-20px relative tablet:flex desktop:flex-row tablet:flex-col font-rnarrow mobile:leading-20px tablet:leading-24px mobile:text-14px tablet:text-16px tablet:justify-between">
        <p className="pt-10 desktop:w-65% tablet:w-100% mobile:mb-6%">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          aut delectus deserunt error hic ipsum odit perspiciatis possimus quas
          ut!
        </p>
        <p className="desktop:w-25% tablet:w-100%">
          <img
            src="/img/temp/img.png"
            width="100%"
            height="auto"
            alt=""
            onClick={() => setVideoOpen(true)}
          />
        </p>
      </div>
      <ContentAuction isCollection />
      {openMintingModal ? (
        <MintingModal setOpenMintingModal={setOpenMintingModal} />
      ) : (
        <></>
      )}
      {isCanMint && (
        <DropNft
          desc="Meanwhile, the current drop is still on sale. The NFTs are unique but any NFT will support Ukraine. Get yours."
          buttonLabel="Buy NFT Now"
          className="laptop:mb-120px tablet:mb-96px mobile:mb-[60px] tablet:my-72px mobile:my-40px"
          handleClick={handleBuyNft}
        />
      )}
      <Dialog
        open={videoOpen}
        disablePortal
        onClose={() => setVideoOpen(false)}
      >
        <video
          src="https://ia804503.us.archive.org/15/items/kikTXNL6MvX6ZpRXM/kikTXNL6MvX6ZpRXM.mp4"
          autoPlay
        ></video>
      </Dialog>
    </div>
  );
};

export default CollectionDetailsPage;
// todo @current back link underline
// todo @current breakpoints
