import { ArrowSvg } from "@components/DropdownSelect";
import { useAppRouter } from "@hooks/useAppRouter";
import Blurb from "@sections/AboutProject/Blurb";
import AuctionData from "@sections/Auction/AuctionData";
import NftCardDetail from "./NftCardDetail";

type NftDetailProps = {};

const NftDetail = ({}: NftDetailProps) => {
  const { push, query } = useAppRouter();
  const handleToAuction = () => push("/auction");

  const item = AuctionData[Number(query.id)];
  if (!item) return <></>;

  return (
    <div className="laptop:mb-120px tablet:mb-96px tablet:-mt-[80px] laptop:mt-[0px]">
      <div
        className="flex content-center hover:cursor-pointer mb-24px"
        onClick={handleToAuction}
      >
        <span className="rotate-[270deg] mr-15px">
          <ArrowSvg />
        </span>
        <p className="text-14px font-rblack">Auction</p>
      </div>
      <Blurb header={item.name} />
      <NftCardDetail item={item} />
    </div>
  );
};

export default NftDetail;
