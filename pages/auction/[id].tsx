//import { AUCTION_START_DATE, AUCTION_END_DATE } from '@sections/Constants';
import { TITLES } from '@sections/Constants';
import { useAbsoluteUrl } from '@hooks/useAbsoluteUrl';
import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import AuctionData from '@sections/Auction/AuctionData';
import NftDetail from '@sections/NftDetail/NftDetail';
import type { NextPage } from 'next';

type AuctionItemProps = { id: string };

const NftDetailPage: NextPage<SharedProps & AuctionItemProps> = ({ id }) => {
  const url = useAbsoluteUrl();
  const item = AuctionData[Number(id)];
  return (
    <>
      <PageHead
        title={item?.name ?? 'Auction item'}
        subtitle={TITLES.AUCTION}
        description={
          item
            ? `NFT of ${item.name} created by ${item.artist}.\n${item.descriptionEnglish}`
            : ''
        }
        image={item?.imageSrc}
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Auction',
                item: url('/auction'),
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: item?.name || 'Auction item',
              },
            ],
          } /*{
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
          }*/, //TODO: uncomment for auctions
        ]}
        canonical={`/auction/${id}`}
      />
      <NftDetail />
    </>
  );
};

export default NftDetailPage;

export function getStaticProps({ params }: { params: AuctionItemProps }) {
  return { props: params };
}

export function getStaticPaths() {
  return {
    paths: AuctionData.map((_, index) => ({
      params: { id: index.toString() },
    })),
    fallback: false,
  };
}
