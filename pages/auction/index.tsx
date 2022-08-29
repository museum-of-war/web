import { TITLES } from '@sections/constants';
import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import Auction from '@sections/Auction/Auction';
import type { NextPage } from 'next';

const AuctionPage: NextPage<SharedProps> = (props) => {
  return (
    <>
      <PageHead
        title={TITLES.AUCTION}
        description="Unique NFTs of special collections are auctioned by MetaHistory together with partners from Avatars for Ukraine & Prospect100 design competition."
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Auction',
            },
          ],
        }}
        canonical={'/auction'}
      />
      <Auction
        signerAddress={props.signerAddress}
        handleConnect={props.handleConnect}
      />
    </>
  );
};

export default AuctionPage;
