import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import TermsAndConditions from '@sections/TermsAndConditions/TermsAndConditions';
import type { NextPage } from 'next';

const WarlinePage: NextPage<SharedProps> = (props) => {
  return (
    <>
      <PageHead
          title="Terms and Conditions"
          data={{
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [{
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Terms and Conditions',
              }]
          }}
      />
      <TermsAndConditions />
    </>
  );
};

export default WarlinePage;
