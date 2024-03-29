import { TITLES } from '@sections/constants';
import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import type { NextPage } from 'next';
import Warline from '@sections/Collections/Warline/Warline';

const WarlinePage: NextPage<SharedProps> = () => (
  <>
    <PageHead
      title={TITLES.WARLINE}
      description="NFTs that represent historic events to show how the war in Ukraine has developed. Important decisions & news are commemorated on the blockchain forever."
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Warline',
          },
        ],
      }}
      canonical={'/collection/warline'}
    />
    <Warline />
  </>
);

export default WarlinePage;
