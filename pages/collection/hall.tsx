import { TITLES } from '@sections/constants';
import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import TheHall from '@sections/Collections/TheHall/TheHall';
import type { NextPage } from 'next';

const TheHallPage: NextPage<SharedProps> = () => {
  return (
    <>
      <PageHead
        title={TITLES.HALL}
        description="One-of-a-kind NFTs of public personalities who vocally support Ukraine. Our team - and our country wants to express gratitude for their contributions."
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'The Hall',
            },
          ],
        }}
        canonical={'/collection/hall'}
      />
      <TheHall />
    </>
  );
};

export default TheHallPage;
