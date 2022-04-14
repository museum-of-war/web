import Blurb from "@sections/AboutProject/Blurb";
import ContentAuction from "./ContentAuction";

type AuctionProps = {
  signerAddress: string;
  handleConnect: () => void;
};

const Auction = ({ signerAddress, handleConnect }: AuctionProps) => {
  return (
    <>
      <Blurb
        header="Auction"
        english="A limited set of rare, selected, and generative artworks by both Ukrainian and global artists. Floating price, based on bids and offers. For this time, the Museum invites art collectors to fully shape the charity fundraising. Please note that only Warline art collectors are allowed to bid in the auction."
        ukrainian="Обмежений набір рідкісних та відібраних робіт українських та світових художників. Плаваюча ціна, що базується на ставках та пропозиціях. На цей раз Музей запрошує колекціонерів мистецтва повністю сформувати благодійний збір коштів. Зверніть увагу, що лише колекціонери експонатів Warline можуть брати участь в аукціоні."
      />
      <ContentAuction />
    </>
  );
};

export default Auction;
