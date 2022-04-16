import { ArrowSvg } from "@components/DropdownSelect";
import { useAppRouter } from "@hooks/useAppRouter";
import Blurb from "@sections/AboutProject/Blurb";

type NftDetailProps = {};

const NftDetail = ({}: NftDetailProps) => {
  const { push } = useAppRouter();
  const handleToAuction = () => push("/auction");
  return (
    <div>
      <div
        className="flex content-center hover:cursor-pointer mb-24px"
        onClick={handleToAuction}
      >
        <span className="rotate-[270deg] mr-15px">
          <ArrowSvg />
        </span>
        <p className="text-14px font-rblack">Auction</p>
      </div>
      <Blurb header="NFT’s name" />
    </div>
  );
};

export default NftDetail;
