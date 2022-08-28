import { TITLES } from '@sections/constants';
import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import PrivacyPolicy from '@sections/PrivacyPolicy/PrivacyPolicy';
import type { NextPage } from 'next';

const WarlinePage: NextPage<SharedProps> = (props) => {
  return (
    <>
      <PageHead
        title={TITLES.PRIVACY_POLICY}
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Privacy Policy',
            },
          ],
        }}
        canonical={'/privacy-policy'}
      />
      <PrivacyPolicy />
    </>
  );
};

export default WarlinePage;
