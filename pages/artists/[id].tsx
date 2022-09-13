import { TITLES } from '@sections/constants';
import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import { ArtistPage } from '@sections/Artist/Artist';
import type { NextPage } from 'next';

const Component: NextPage<SharedProps> = ({ menuOpen }) => {
  console.log(menuOpen);
  return (
    <>
      <PageHead
        title={TITLES.ARTISTS}
        description="todo @current"
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'todo @current',
            },
          ],
        }}
        canonical={'/artists'}
      />
      <ArtistPage menuOpen={menuOpen} />
    </>
  );
};

export default Component;
