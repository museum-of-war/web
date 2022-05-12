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

const NavBack = ({ classNames }: { classNames?: string }) => (
  <div className={classNames}>
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
);

const CollectionDetailsPage: React.FC<SharedProps> = ({ menuOpen }) => {
  const { query } = useAppRouter();
  const url = useAbsoluteUrl();
  const { canMint, canMintSecondDrop } = useWeb3Modal();

  const [isCanMint, setCanMint] = useState<boolean>(false);
  const [openMintingModal, setOpenMintingModal] = useState<boolean>(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [collectionData, setCollectionData] = useState<AuctionCollectionType>();

  useEffect(() => {
    canMintSecondDrop().then((val) =>
      val ? setCanMint(true) : canMint().then((i) => setCanMint(i)),
    );
  }, [canMint, canMintSecondDrop]);

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
            className="absolute h-100px bg-carbon m-auto items-center
          desktop:container mx-auto min-h-screen desktop:px-72px tablet:px-72px mobile:px-24px w-full mobile:hidden tablet:flex desktop:flex"
            style={{
              marginTop: -100,
            }}
          >
            <NavBack />
          </div>
          <NavBack classNames="desktop:hidden tablet:hidden h-100px  flex items-center" />
          <p className="font-rblack mobile:text-38px mobile:leading-38px tablet:text-70px tablet:leading-70px uppercase">
            {collectionData.name}
          </p>
          <div className="h-5px w-100% bg-carbon dark:bg-white" />
          <div className="desktop:py-40px laptop:py-40px tablet:pb-0 tablet:pt-40px mobile:pb-0 mobile:pt-20px relative tablet:flex desktop:flex-row tablet:flex-row mobile:flex-col font-rnarrow mobile:leading-20px tablet:leading-24px mobile:text-14px tablet:text-16px tablet:justify-between">
            <p className="whitespace-pre-line pt-10 desktop:w-65% tablet:w-65% mobile:w-100% mobile:mb-6% desktop:pr-48px tablet:pr-48px mobile:pr-0">
              {collectionData.description}
            </p>
            <p className="desktop:w-35% tablet:w-35% mobile-w100%">
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
                  } object-contain laptop:max-h-300px`}
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
              className="laptop:mb-120px tablet:mb-96px mobile:mb-[60px] tablet:my-72px mobile:my-40px"
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
// todo @current back link underline
// todo @current breakpoints
