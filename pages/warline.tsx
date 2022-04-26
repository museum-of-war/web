import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import type { NextPage } from 'next';
import Warline from '@sections/Warline/Warline';

const WarlinePage: NextPage<SharedProps> = () => (
  <>
    <PageHead
        title="Warline"
        description="Help Ukraine by bidding on war-related art created by those affected."
        data={{
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [{
                '@type': 'ListItem',
                position: 1,
                name: 'Warline',
            }]
        }}
    />
    <Warline />
  </>
);

export default WarlinePage;
