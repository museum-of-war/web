import React, { useEffect, useState } from 'react';
import ContentAuction from '@sections/Auction/ContentAuction';
import MintingModal from '@components/MintingModal';
import DropNft from '@sections/Auction/DropNft';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import { openInNewTab } from '@sections/utils';
import { MINT_LINK, OPENSEA_LINK } from '@sections/Constants';
import { useAppRouter } from '@hooks/useAppRouter';
import Link from 'next/link';
import { SharedProps } from '@components/wrapper';
import { AuctionCollections, AuctionCollectionType } from '@sections/types';
import AuctionCollectionData from '@sections/Auction/AuctionCollectionData';
import PageHead from '@components/PageHead';
import { useAbsoluteUrl } from '@hooks/useAbsoluteUrl';
import { Parallax } from 'react-parallax';
import { useViewPort } from '@hooks/useViewport';
import { useVideoModal } from '@providers/VideoProvider';

const NavBack = () => (
  <Link href={'/auction'} passHref>
    <div className="h-[48px] flex items-center cursor-pointer group">
      <img
        alt="arrow back"
        src={'/img/down-white.svg'}
        className="rotate-90 flex-grow-0 leading-[48px]"
      />
      <span className="font-rblack text-[14px] ml-[8px] h-full leading-[48px] hover:border-b-4 hover:border-white">
        All collections
      </span>
    </div>
  </Link>
);

const CollectionLogo = ({ size, src }: { size: number; src?: string }) =>
  src ? (
    <div
      className="border-4 border-white bg-carbon"
      style={{
        width: size + 8,
        height: size + 8,
        borderRadius: '50%',
        top: -size / 2,
        left: 0,
        right: 0,
        margin: 'auto',
        position: 'absolute',
      }}
    >
      <img
        src={src}
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
        }}
      />
    </div>
  ) : null;

const CollectionDetailsPage: React.FC<SharedProps> = ({ menuOpen }) => {
  const { query } = useAppRouter();
  const url = useAbsoluteUrl();
  const { canMint, canMintSecondDrop } = useWeb3Modal();
  const { isMobile } = useViewPort();
  const { VideoElement } = useVideoModal();

  const [isCanMint, setCanMint] = useState<boolean>(false);
  const [openMintingModal, setOpenMintingModal] = useState<boolean>(false);
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
      <div className="desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px">
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
            <VideoElement
              videoSrc={collectionData.videoSrc}
              posterSrc={collectionData.posterSrc}
              name={collectionData.name}
              classNames="desktop:w-35% tablet:w-35% mobile-w100%"
            />
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
              buttonLabel="Mint NFT Now"
              className="desktop:mb-120px tablet:mb-96px mobile:mb-[60px] tablet:my-72px mobile:my-40px"
              handleClick={handleBuyNft}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CollectionDetailsPage;
