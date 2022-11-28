import React from 'react';

import PageHead from '@components/PageHead';
import { useAbsoluteUrl } from '@hooks/useAbsoluteUrl';
import { TITLES } from '@sections/constants';
import { VesaZenaida } from '@sections/Collections/VesaZenaida/VesaZenaida';
import {
  auctionName,
  nftDescription,
} from '@sections/Collections/VesaZenaida/data';
import AuctionCollectionData from '@sections/Auction/AuctionCollectionData';
import { AuctionCollection } from '@sections/types';

const VesaZinaidaCollection = () => {
  const url = useAbsoluteUrl();

  return (
    <>
      <PageHead
        title={auctionName}
        subtitle={TITLES.AUCTION}
        description={nftDescription}
        image={AuctionCollectionData[AuctionCollection.VesaZinaida]?.logoSrc}
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
                name: 'VESA & ZINAIDA',
              },
            ],
          },
        ]}
        canonical="/auction/collection/vesa-and-zinaida"
      />
      <VesaZenaida />
    </>
  );
};

export default VesaZinaidaCollection;
