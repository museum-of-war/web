import { TITLES } from '@sections/constants';
import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import type { NextPage } from 'next';
import React from 'react';
import Blurb from '@sections/AboutProject/Blurb';
import { JoinProject } from '@sections/JoinProject/JoinProject';

const JoinProjectPage: NextPage<SharedProps> = () => {
  return (
    <>
      <PageHead
        title={TITLES.JOIN_PROJECT}
        description="The evolution of Meta History. Timeline-based set of important events of Meta History. Past, present and future. Step by step."
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Join project',
            },
          ],
        }}
        canonical={'/join-project'}
      />

      <JoinProject />
    </>
  );
};

export default JoinProjectPage;
