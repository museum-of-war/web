import { TITLES } from '@sections/constants';
import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import type { NextPage } from 'next';
import { ForArtists } from '@sections/ForArtists/ForArtists';
import { HowDoWeWork } from '@sections/HowDoWeWork/HowDoWeWork';
import SupportProject from '@sections/AboutProject/SupportProject';
import { ApplyAsAnArtist } from '@components/ApplyAsAnArtist';
import React from 'react';

const ForArtistsPage: NextPage<SharedProps> = () => {
  return (
    <>
      <PageHead
        title={TITLES.FOR_ARTISTS}
        description="Join the artists and create works for the Meta History collections."
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
      <div className="desktop:flex desktop:flex-row desktop:justify-between mt-60px tablet:mt-96px relative desktop:container mx-auto px-24px tablet:px-72px desktop:px-132px">
        <div className="desktop:w-[544px] tablet:mt-0 mobile:mt-60px">
          <SupportProject />
        </div>
        <div className="desktop:w-[544px] desktop:mt-0 tablet:mt-48px mobile:mt-30px">
          <ApplyAsAnArtist />
        </div>
      </div>
    </>
  );
};

export default ForArtistsPage;
