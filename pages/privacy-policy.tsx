import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import PrivacyPolicy from '@sections/PrivacyPolicy/PrivacyPolicy';
import type { NextPage } from 'next';

const WarlinePage: NextPage<SharedProps> = (props) => {
  return (
    <>
      <PageHead
          title="Privacy Policy"
          data={{
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [{
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Privacy Policy',
              }]
          }}
      />
      <PrivacyPolicy />
    </>
  );
};

export default WarlinePage;
