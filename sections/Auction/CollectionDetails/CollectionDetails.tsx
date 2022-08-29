import React, { useState } from 'react';
import ContentAuction from '@sections/Auction/ContentAuction';
import MintingModal from '@components/MintingModal';
import DropNft from '@sections/Auction/DropNft';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import { openInNewTab } from '@sections/utils';
import { MINT_LINK, OPENSEA_LINK } from '@sections/constants';
import { useAppRouter } from '@hooks/useAppRouter';
import { Dialog } from '@mui/material';
import { AuctionCollection, AuctionCollectionType } from '@sections/types';
import { Parallax } from 'react-parallax';
import { useViewPort } from '@hooks/useViewport';
import { RoundLogo, NavBack } from './elements';

type CollectionDetailsPageProps = {
  menuOpen: boolean;
  canMint: boolean;
  collectionData: AuctionCollectionType;
};
const CollectionDetailsPage: React.FC<CollectionDetailsPageProps> = ({
  menuOpen,
  canMint,
  collectionData,
}) => {
  const { query } = useAppRouter();
  const { canMint: getCanMint, canMintSecondDrop } = useWeb3Modal();
  const { isMobile } = useViewPort();

  const [openMintingModal, setOpenMintingModal] = useState<boolean>(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const handleBuyNft = async () => {
    if (await canMintSecondDrop()) {
      setOpenMintingModal(true);
    } else if (await getCanMint()) {
      openInNewTab(MINT_LINK);
    } else {
      openInNewTab(OPENSEA_LINK);
    }
  };

  return (
    <div className="desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px desktop:mt-[-48px] tablet:mt-[-48px] mobile:mt-[-40px]">
      <div className="absolute left-0 top-100px z-0 right-0">
        <Parallax
          strength={isMobile ? 0 : 200}
          style={{ height: 456, width: '100%' }}
          bgImage={collectionData.headerImageSrc}
          bgImageAlt={`${collectionData.name} Cover Image`}
          bgImageStyle={{ height: 456, objectFit: 'cover' }}
        />
      </div>
      <div
        className="relative"
        style={{ marginTop: '-8%', paddingTop: menuOpen ? 452 : 456 }}
      >
        <div
          className="absolute h-120px bg-carbon m-auto items-center
              mx-auto min-h-screen mobile:hidden tablet:flex desktop:flex left-[-72px] right-[-72px] px-72px"
          style={{
            marginTop: -60,
          }}
        >
          <RoundLogo size={120} src={collectionData.logoSrc} />
          <NavBack />
        </div>
        <div className="h-100px flex items-center desktop:hidden tablet:hidden relative">
          <RoundLogo size={80} src={collectionData.logoSrc} />
          <NavBack />
        </div>
        <p className="font-rblack break-words mobile:text-38px mobile:leading-38px tablet:text-70px tablet:leading-70px uppercase desktop:pt-60px tablet:pt-60px mobile:pt-0">
          {collectionData.name}
        </p>
        <div className="h-5px w-100% bg-carbon dark:bg-white" />
        <div className="desktop:py-40px tablet:pb-0 tablet:pt-40px mobile:pb-0 mobile:pt-20px relative tablet:flex desktop:flex-row tablet:flex-row mobile:flex-col font-rnarrow mobile:leading-20px tablet:leading-24px mobile:text-14px tablet:text-16px tablet:justify-between">
          <p className="whitespace-pre-wrap pt-10 desktop:w-65% tablet:w-65% mobile:w-100% mobile:mb-6% desktop:pr-48px tablet:pr-48px mobile:pr-0">
            {collectionData.description}
          </p>
          <p
            className="desktop:w-35% tablet:w-35% mobile-w100% relative self-center"
            onClick={() => setVideoOpen(!!collectionData.videoSrc)}
          >
            {!!collectionData.videoSrc && (
              <svg
                data-bbox="22.5 22.5 155 155"
                viewBox="0 0 200 200"
                height="100"
                width="100"
                xmlns="http://www.w3.org/2000/svg"
                data-type="shape"
                className="fill-white hover:fill-black cursor-pointer absolute m-auto left-0 top-0 right-0 bottom-0 z-[1]"
              >
                <g>
                  <path d="M100 177.5c-42.8 0-77.5-34.7-77.5-77.5S57.2 22.5 100 22.5s77.5 34.7 77.5 77.5-34.7 77.5-77.5 77.5zm0-150.6c-40.4 0-73.1 32.7-73.1 73.1s32.7 73.1 73.1 73.1 73.1-32.7 73.1-73.1c-.1-40.3-32.8-73-73.1-73.1zm-15.2 99.6v-53l46 26.5-46 26.5zm4.4-45.4v37.7l32.7-18.9-32.7-18.8z" />
                </g>
              </svg>
            )}
            {collectionData.videoSrc?.includes('youtube') &&
            !collectionData.posterSrc ? (
              <iframe
                src={collectionData.videoSrc}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="m-auto h-100% w-100% min-h-[220px]"
              />
            ) : collectionData.posterSrc ? (
              <img
                src={collectionData.posterSrc}
                width="100%"
                height="auto"
                alt={collectionData.name + ' Poster'}
                className={`${
                  !!collectionData.videoSrc ? 'cursor-pointer' : ''
                } object-contain desktop:max-h-300px`}
                onClick={() => setVideoOpen(!!collectionData.videoSrc)}
              />
            ) : null}
          </p>
        </div>
        <ContentAuction collection={query.id as AuctionCollection} />
        {openMintingModal ? (
          <MintingModal setOpenMintingModal={setOpenMintingModal} />
        ) : (
          <></>
        )}
        {canMint && (
          <DropNft
            desc="Meanwhile, the current drop is still on sale. The NFTs are unique but any NFT will support Ukraine. Get yours."
            buttonLabel="Mint NFT Now"
            className="desktop:mb-120px tablet:mb-96px mobile:mb-[60px] tablet:my-72px mobile:my-40px"
            handleClick={handleBuyNft}
          />
        )}
        <Dialog
          open={videoOpen}
          disablePortal
          fullWidth
          maxWidth="lg"
          onClose={() => setVideoOpen(false)}
        >
          {collectionData.videoSrc?.includes('youtube') ? (
            <iframe
              src={collectionData.videoSrc}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="m-auto h-100% w-100% min-h-[75vmin]"
            />
          ) : (
            <video src={collectionData.videoSrc} autoPlay />
          )}
        </Dialog>
      </div>
    </div>
  );
};

export default CollectionDetailsPage;
