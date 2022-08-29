import PageHead from '../../../components/PageHead';
import { SharedProps } from '../../../components/wrapper';
import IncredibleRooster from '@pages/../../temp/pages/collections/IncredibleRooster/IncredibleRooster';
import type { NextPage } from 'next';

const IncredibleRoosterPage: NextPage<SharedProps> = () => {
  return (
    <>
      <PageHead
        title="Incredible Rooster"
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
