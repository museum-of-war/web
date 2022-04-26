import { AUCTION_START_DATE, AUCTION_END_DATE } from '@sections/Constants';
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
  const image = url(`/${item?.imageSrc || ''}`);
  return (
    <>
      <PageHead
          title={`${item ? `${item.name} - ` : ''}Auction`}
          description="Help Ukraine by bidding on war-related art created by those affected."
          image={image}
          data={[{
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
          }, {
              '@context': 'https://schema.org',
              '@type': 'Event',
              name: `Charity NFT Auction for Ukraine${item ? `: ${item.name}` : ''}`,
              startDate: AUCTION_START_DATE,
              endDate: AUCTION_END_DATE,
              eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
              location: {
                  '@type': 'VirtualLocation',
                  url: url(`/auction/${item?.index || ''}`),
              },
              image,
              description: 'Help Ukraine by bidding on war-related art created by those affected.',
              organizer: {
                  '@type': 'Organization',
                  name: 'Ministry of Digital Transformation of Ukraine',
                  url: 'https://thedigital.gov.ua',
              },
          }]}
      />
      <NftDetail />
    </>
  );
};

export default NftDetailPage;
