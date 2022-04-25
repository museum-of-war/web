import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import type { NextPage } from 'next';
import Warline from '@sections/Warline/Warline';

const WarlinePage: NextPage<SharedProps> = () => (
  <>
    <PageHead
        title="Warline - Meta History: Museum of War"
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
