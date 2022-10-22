import { TITLES } from '@sections/constants';
import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import type { NextPage } from 'next';
import SupportProject from '@sections/AboutProject/SupportProject';
import React from 'react';
import { Roadmap } from '@sections/Roadmap/Roadmap';
import { ApplyAsAnArtist } from '@components/ApplyAsAnArtist';

const RoadmapPage: NextPage<SharedProps> = () => {
  return (
    <>
      <PageHead
        title={TITLES.ROADMAP}
        description="The evolution of Meta History. Timeline-based set of important events of Meta History. Past, present and future. Step by step."
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Roadmap',
            },
          ],
        }}
        canonical={'/roadmap'}
      />
      <Roadmap />

      <div className="desktop:container mx-auto px-24px tablet:px-72px desktop:px-132px mt-60px tablet:mt-96px grid desktop:grid-cols-2 gap-30px tablet:gap-48px ">
        <SupportProject />
        <ApplyAsAnArtist />
      </div>

      <div className="desktop:container mx-auto px-24px tablet:px-72px desktop:px-132px mt-24px mb-64px tablet:mb-196px flex justify-center">
        <img
          alt="Dots"
          className="w-full max-w-[370px]"
          src="/img/pd-dots1.png"
        />
      </div>
    </>
  );
};

export default RoadmapPage;
