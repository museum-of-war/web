import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import IncredibleRooster from '@sections/Collections/IncredibleRooster/IncredibleRooster';
import type { NextPage } from 'next';
import { TITLES } from '@sections/constants';

const IncredibleRoosterPage: NextPage<SharedProps> = () => {
  return (
    <>
      <PageHead
        title={TITLES.ROOSTER}
        description="NFT version of the rooster without fear, recreated in the style of famous paintings"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Incredible Rooster',
            },
          ],
        }}
      />
      <IncredibleRooster />
    </>
  );
};

export default IncredibleRoosterPage;
