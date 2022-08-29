import React, { useState } from 'react';
import '@dotlottie/player-component';
import { openInNewTab } from '@sections/utils';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import { MINT_LINK, OPENSEA_LINK } from '@sections/constants';
import MintingModal from '@components/MintingModal';

const BuyMoreNFTs = () => {
  const [openMintingModal, setOpenMintingModal] = useState<boolean>(false);
  const { canMint, canMintSecondDrop } = useWeb3Modal();

  const handleBuyNft = async () => {
    if (await canMintSecondDrop()) {
      setOpenMintingModal(true);
    } else if (await canMint()) {
      openInNewTab(MINT_LINK);
    } else {
      openInNewTab(OPENSEA_LINK);
    }
  };

  return (
    <>
      <div className="desktop:mt-30px tablet:mt-30px mobile:mt-30px">
        <div className="">
          <dotlottie-player
            class="desktop:h-[240px] tablet:h-[288px] mobile:h-[270px] desktop:max-w-[240px] tablet:max-w-[288px] mobile:max-w-[270px] m-auto object-contain"
            src={'/lottie/nft_cover.lottie'}
            autoplay
            loop
          />
        </div>
        <div className="flex justify-center whitespace-nowrap">
          <button
            className="font-rblack bg-carbon text-white rounded-full mt-5px px-32px py-18px tablet:py-12px"
            onClick={handleBuyNft}
          >
            Get more NFTs
          </button>
        </div>
      </div>
      {openMintingModal ? (
        <MintingModal setOpenMintingModal={setOpenMintingModal} />
      ) : (
        <></>
      )}
    </>
  );
};

export default BuyMoreNFTs;
