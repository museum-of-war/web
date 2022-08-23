import React from 'react';
import { TITLES } from '@sections/Constants';
import AboutUsContent from '../../sections/AboutUs/AboutUs';
import PageHead from '@components/PageHead';

const AboutUs = () => {
  return (
    <>
      <PageHead
        title={TITLES.ABOUT}
        description="Meta History NFT museum is created to commemorate the history of the current events in Ukraine, preserve the truth, and collect donations for humanitarian aid. "
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'About',
            },
          ],
        }}
      />
      <AboutUsContent />
    </>
  );
};
export default AboutUs;
