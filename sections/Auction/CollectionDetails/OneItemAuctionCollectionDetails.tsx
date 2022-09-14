import React, { useState } from 'react';
import MintingModal from '@components/MintingModal';
import { AuctionCollectionType } from '@sections/types';
import { Parallax } from 'react-parallax';
import { useViewPort } from '@hooks/useViewport';
import { RoundLogo } from '../../elements';
import NftCardDetail from '@sections/NftDetail/NftCardDetail';
import { NavBack } from './elements';

type OneItemAuctionProps = {
  menuOpen: boolean;
  canMint: boolean;
  collectionData: AuctionCollectionType;
};
export const OneItemAuctionCollectionDetails: React.FC<OneItemAuctionProps> = ({
  menuOpen,
  collectionData,
}) => {
  const { isMobile } = useViewPort();

  const [openMintingModal, setOpenMintingModal] = useState<boolean>(false);

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
        <p className="font-rblack mobile:text-38px mobile:leading-38px tablet:text-70px tablet:leading-70px uppercase desktop:pt-60px tablet:pt-60px mobile:pt-0">
          {collectionData.name}
        </p>
        <div className="h-5px w-100% bg-carbon dark:bg-white" />
        {collectionData.item && (
          <>
            <NftCardDetail
              item={collectionData.item}
              oneItemAuction
              className="mobile:mb-120px tablet:mb-168px desktop:mb-192px"
            />
          </>
        )}
        {openMintingModal ? (
          <MintingModal setOpenMintingModal={setOpenMintingModal} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
