import { TITLES } from '@sections/constants';
import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import TermsAndConditions from '@sections/TermsAndConditions/TermsAndConditions';
import type { NextPage } from 'next';

const WarlinePage: NextPage<SharedProps> = (props) => {
  return (
    <>
      <PageHead
        title={TITLES.TERMS_AND_CONDITIONS}
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Terms and Conditions',
            },
          ],
        }}
        canonical={'/terms-and-conditions'}
      />
      <TermsAndConditions />
    </>
  );
};

export default WarlinePage;
