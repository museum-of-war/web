import Blurb from '@sections/AboutProject/Blurb';
import ContentAuction from './ContentAuction';
import DropNft from './DropNft';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import React, { useEffect, useState } from 'react';
import { openInNewTab } from '@sections/utils';
import {
  AUCTION_CLOSING_DATE,
  AUCTION_END_DATE,
  MINT_LINK,
  OPENSEA_LINK,
} from '@sections/Constants';
import CountdownBanner from '@sections/AboutProject/ContentTop/CountdownBanner';
import MintingModal from '@components/MintingModal';

type AuctionProps = {
  signerAddress: string;
  handleConnect: () => void;
};

const Auction = ({ signerAddress, handleConnect }: AuctionProps) => {
  const [isCanMint, setCanMint] = useState<boolean>(false);
  const [openMintingModal, setOpenMintingModal] = useState<boolean>(false);

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

  return (
    <div className="desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px">
      <Blurb
        header="Auction"
        english="A limited set of rare, selected, and generative artworks by both Ukrainian and global artists. Floating price, based on bids and offers. For this time, the Museum invites art collectors to fully shape the charity fundraising. Please note that only Warline art collectors are allowed to bid in the auction."
        ukrainian="Обмежений набір рідкісних та відібраних робіт українських та світових художників. Плаваюча ціна, що базується на ставках та пропозиціях. На цей раз Музей запрошує колекціонерів мистецтва повністю сформувати благодійний збір коштів. Зверніть увагу, що лише колекціонери експонатів Warline можуть брати участь в аукціоні."
      />
      <CountdownBanner
        className={'mb-4% border-4'}
        endDate={AUCTION_CLOSING_DATE}
        hideDate={AUCTION_END_DATE}
      />
      <ContentAuction />
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
  );
};

export default Auction;
