import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import Auction from '@sections/Auction/Auction';
import type { NextPage } from 'next';

const AuctionPage: NextPage<SharedProps> = (props) => {
  return (
    <>
      <PageHead
          title="Auction - Meta History: Museum of War"
          data={{
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [{
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Auction',
              }]
          }}
      />
      <Auction
        signerAddress={props.signerAddress}
        handleConnect={props.handleConnect}
      />
    </>
  );
};

export default AuctionPage;
