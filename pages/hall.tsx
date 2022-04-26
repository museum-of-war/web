import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import TheHall from '@sections/TheHall/TheHall';
import type { NextPage } from 'next';

const TheHallPage: NextPage<SharedProps> = () => {
  return (
    <>
      <PageHead
          title="The Hall"
          description="Help Ukraine by bidding on war-related art created by those affected."
          data={{
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [{
                  '@type': 'ListItem',
                  position: 1,
                  name: 'The Hall',
              }]
          }}
      />
      <TheHall />
    </>
  );
};

export default TheHallPage;
