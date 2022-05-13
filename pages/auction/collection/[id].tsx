import React, { useEffect, useState } from 'react';
import ContentAuction from '@sections/Auction/ContentAuction';
import MintingModal from '@components/MintingModal';
import DropNft from '@sections/Auction/DropNft';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import { openInNewTab } from '@sections/utils';
import { MINT_LINK, OPENSEA_LINK } from '@sections/Constants';
import { useAppRouter } from '@hooks/useAppRouter';
import Link from 'next/link';
import { Dialog } from '@mui/material';
import { SharedProps } from '@components/wrapper';
import { AuctionCollections, AuctionCollectionType } from '@sections/types';
import AuctionCollectionData from '@sections/Auction/AuctionCollectionData';
import PageHead from '@components/PageHead';
import { useAbsoluteUrl } from '@hooks/useAbsoluteUrl';

const NavBack = () => (
  <Link href={'/auction'} passHref>
    <div className="h-[48px] flex items-center cursor-pointer group">
      <img
        alt="arrow back"
        src={'/img/down-white.svg'}
        className="rotate-90 flex-grow-0 leading-[48px]"
      />
      <span className="font-rblack text-[14px] ml-[8px] h-full leading-[48px] hover:border-b-4 hover:border-white transition-[border-width]">
        All collections
      </span>
    </div>
  </Link>
);

const CollectionLogo = ({ size, src }: { size: number; src?: string }) =>
  src ? (
    <img
      src={src}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        top: -size / 2,
        left: 0,
        right: 0,
        margin: 'auto',
        position: 'absolute',
      }}
    />
  ) : null;

const CollectionDetailsPage: React.FC<SharedProps> = ({ menuOpen }) => {
  const { query } = useAppRouter();
  const url = useAbsoluteUrl();
  const { canMint, canMintSecondDrop } = useWeb3Modal();

  const [isCanMint, setCanMint] = useState<boolean>(false);
  const [openMintingModal, setOpenMintingModal] = useState<boolean>(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [collectionData, setCollectionData] = useState<AuctionCollectionType>();
  const [mintFetched, setMintFetched] = useState(false);

  useEffect(() => {
    if (collectionData && !mintFetched) {
      canMintSecondDrop().then((val) => {
        if (val) {
          setCanMint(true);
          setMintFetched(true);
        } else {
          canMint().then((i) => {
            setCanMint(i);
            setMintFetched(true);
          });
        }
      });
    }
  }, [collectionData]);

  useEffect(() => {
    setCollectionData(AuctionCollectionData[query.id as AuctionCollections]);
  }, [query.id]);

  const handleBuyNft = async () => {
    if (await canMintSecondDrop()) {
      setOpenMintingModal(true);
    } else if (await canMint()) {
      openInNewTab(MINT_LINK);
    } else {
      openInNewTab(OPENSEA_LINK);
    }
  };

  if (!collectionData) return null;

  return (
    <>
      <PageHead
        title={`${collectionData.name} - Auction`}
        description={collectionData.description}
        image={collectionData.logoSrc}
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Auction',
                item: url('/auction'),
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: collectionData.name,
              },
            ],
          },
        ]}
      />
      <div>
        <img
          src={collectionData.headerImageSrc}
          alt={collectionData.name + ' Cover Image'}
          width="100%"
          style={{ height: 456 }}
          className="absolute left-0 top-100px z-0 object-cover"
        />
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
            <CollectionLogo size={120} src={collectionData.logoSrc} />
            <NavBack />
          </div>
          <div className="h-100px flex items-center desktop:hidden tablet:hidden relative">
            <CollectionLogo size={80} src={collectionData.logoSrc} />
            <NavBack />
          </div>
          <p className="font-rblack mobile:text-38px mobile:leading-38px tablet:text-70px tablet:leading-70px uppercase desktop:pt-60px tablet:pt-60px mobile:pt-0">
            {collectionData.name}
          </p>
          <div className="h-5px w-100% bg-carbon dark:bg-white" />
          <div className="desktop:py-40px tablet:pb-0 tablet:pt-40px mobile:pb-0 mobile:pt-20px relative tablet:flex desktop:flex-row tablet:flex-row mobile:flex-col font-rnarrow mobile:leading-20px tablet:leading-24px mobile:text-14px tablet:text-16px tablet:justify-between">
            <p className="whitespace-pre-line pt-10 desktop:w-65% tablet:w-65% mobile:w-100% mobile:mb-6% desktop:pr-48px tablet:pr-48px mobile:pr-0">
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
                  className="m-auto h-100% w-100%"
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
          <ContentAuction collection={query.id as AuctionCollections} />
          {openMintingModal ? (
            <MintingModal setOpenMintingModal={setOpenMintingModal} />
          ) : (
            <></>
          )}
          {isCanMint && (
            <DropNft
              desc="Meanwhile, the current drop is still on sale. The NFTs are unique but any NFT will support Ukraine. Get yours."
              buttonLabel="Buy NFT Now"
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
    </>
  );
};

export default CollectionDetailsPage;
