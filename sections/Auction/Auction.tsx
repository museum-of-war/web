import Blurb from "@sections/AboutProject/Blurb";
import { ethers } from "ethers";
import { NFTAuctionConnect } from "@museum-of-war/auction";
import ContentAuction from "./ContentAuction";
import DropNft from "./DropNft";

type AuctionProps = {
  signerAddress: string;
  handleConnect: () => void;
};

const Auction = ({ signerAddress, handleConnect }: AuctionProps) => {
  async function main() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const auction = NFTAuctionConnect(provider, "rinkeby");
    console.log(auction.address);
  }

  main().catch((error) => {
    console.error(error);
  });

  return (
    <>
      <Blurb
        header="Auction"
        english="A limited set of rare, selected, and generative artworks by both Ukrainian and global artists. Floating price, based on bids and offers. For this time, the Museum invites art collectors to fully shape the charity fundraising. Please note that only Warline art collectors are allowed to bid in the auction."
        ukrainian="Обмежений набір рідкісних та відібраних робіт українських та світових художників. Плаваюча ціна, що базується на ставках та пропозиціях. На цей раз Музей запрошує колекціонерів мистецтва повністю сформувати благодійний збір коштів. Зверніть увагу, що лише колекціонери експонатів Warline можуть брати участь в аукціоні."
      />
      <ContentAuction />
      <DropNft
        desc="Meanwhile, the current drop is still on sale. The NFTs are unique but any NFT will support Ukraine. Get yours."
        buttonLabel="Buy NFT Now"
        className="tablet:my-72px mobile:my-40px"
      />
      <DropNft
        desc="When you're waiting for new arts, you can still donate to Ukraine right away."
        buttonLabel="Support Ukraine"
        className="laptop:mb-120px tablet:mb-96px mobile:mb-[60px]"
      />
    </>
  );
};

export default Auction;
