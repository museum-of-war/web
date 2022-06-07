import { ArrowSvg } from '@components/DropdownSelect';
import { useAppRouter } from '@hooks/useAppRouter';
import Blurb from '@sections/AboutProject/Blurb';
import AuctionData from '@sections/Auction/AuctionData';
import NftCardDetail from './NftCardDetail';
import { useMemo } from 'react';
import AuctionCollectionData from '@sections/Auction/AuctionCollectionData';
import Link from 'next/link';

type NftDetailProps = {};

const NftDetail = ({}: NftDetailProps) => {
  const { query } = useAppRouter();

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

  return (
    <div className="desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px desktop:mb-120px tablet:mb-96px tablet:mt-0 desktop:mt-[0px]">
      <Link href={`/auction#${cardId}`} passHref>
        <a>
          <span className="inline-flex content-center hover:cursor-pointer mb-24px">
            <span className="rotate-[270deg] mr-15px">
              <ArrowSvg />
            </span>
            <span className="text-14px font-rblack">Auction</span>
          </span>
        </a>
      </Link>
      <Blurb header={item.name} />
      <NftCardDetail item={item} />
    </div>
  );
};

export default NftDetail;
