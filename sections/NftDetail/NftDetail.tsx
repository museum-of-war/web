import { ArrowSvg } from '@components/DropdownSelect';
import { useAppRouter } from '@hooks/useAppRouter';
import Blurb from '@sections/AboutProject/Blurb';
import AuctionData from '@sections/Auction/AuctionData';
import NftCardDetail from './NftCardDetail';
import { useMemo } from 'react';
import AuctionCollectionData from '@sections/Auction/AuctionCollectionData';

type NftDetailProps = {};

const NftDetail = ({}: NftDetailProps) => {
  const { push, query } = useAppRouter();

  const item = useMemo(() => AuctionData[Number(query.id)], [query.id]);

  const collectionData = useMemo(
    () => (item?.category ? AuctionCollectionData[item.category] : null),
    [item?.category],
  );

  const cardId = useMemo(
    () => `${collectionData?.contractAddress}-${item?.tokenId}`,
    [collectionData?.contractAddress, item?.tokenId],
  );

  if (!item) return <></>;

  const handleToAuction = () => push(`/auction#${cardId}`);

  return (
    <div className="desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px desktop:mb-120px tablet:mb-96px tablet:mt-0 desktop:mt-[0px]">
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
