import { TITLES } from '@sections/constants';
import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import { Artists } from '@sections/Artists/Artists';
import type { NextPage } from 'next';

const ArtistsPage: NextPage<SharedProps> = () => {
  return (
    <>
      <PageHead
        title={TITLES.ARTISTS}
        description="Check out the artists who have created works included in the Meta History collections."
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Artists',
            },
          ],
        }}
        canonical={'/artists'}
      />
      <Artists />
    </>
  );
};

export default ArtistsPage;
