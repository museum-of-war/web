import { useAbsoluteUrl } from '@hooks/useAbsoluteUrl';
import { useAppRouter } from '@hooks/useAppRouter';
import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import AuctionData from '@sections/Auction/AuctionData';
import NftDetail from '@sections/NftDetail/NftDetail';
import type { NextPage } from 'next';

const NftDetailPage: NextPage<SharedProps> = () => {
  const url = useAbsoluteUrl();
  const { query } = useAppRouter();
  const item = AuctionData[Number(query.id)];
  return (
    <>
      <PageHead
          title={`${item ? `${item.name} - ` : ''}Auction - Meta History: Museum of War`}
          data={{
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [{
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Auction',
                  item: url('/auction'),
              }, {
                  '@type': 'ListItem',
                  position: 2,
                  name: item?.name || 'Auction item',
              }]
          }}
      />
      <NftDetail />
    </>
  );
};

export default NftDetailPage;
