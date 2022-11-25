import React from 'react';

import PageHead from '@components/PageHead';
import { useAbsoluteUrl } from '@hooks/useAbsoluteUrl';
import { TITLES } from '@sections/constants';
import { VesaZenaida } from '@sections/Collections/VesaZenaida/VesaZenaida';
import { nftDescription } from '@sections/Collections/VesaZenaida/data';

const VesaZinaidaCollection = () => {
  const url = useAbsoluteUrl();

  return (
    <>
      <PageHead
        title="Vesa&Zinaida nft"
        subtitle={TITLES.AUCTION}
        description={nftDescription}
        // image={collectionData.logoSrc}
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
                name: 'Vesa&Zinaida',
              },
            ],
          },
        ]}
        canonical="/auction/collection/vesa-zinaida"
      />

      <VesaZenaida />
    </>
  );
};

export default VesaZinaidaCollection;
