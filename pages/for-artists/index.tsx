import { TITLES } from '@sections/constants';
import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import type { NextPage } from 'next';
import { ForArtists } from '@sections/ForArtists/ForArtists';
import { HowDoWeWork } from '@sections/HowDoWeWork/HowDoWeWork';
import SupportProject from '@sections/AboutProject/SupportProject';

const ForArtistsPage: NextPage<SharedProps> = () => {
  return (
    <>
      <PageHead
        title={TITLES.FOR_ARTISTS}
        description="Join the artists and create works for the Meta History collections." //TODO: check me
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'For artists',
            },
          ],
        }}
        canonical={'/for-artists'}
      />
      <ForArtists />
      <div className="mt-60px tablet:mt-96px desktop:mt-128px">
        <HowDoWeWork />
      </div>
      <div className="mt-60px tablet:mt-96px relative desktop:container mx-auto px-24px tablet:px-72px desktop:px-132px">
        <SupportProject />
      </div>
    </>
  );
};

export default ForArtistsPage;
