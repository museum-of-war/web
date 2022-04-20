import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import PrivacyPolicy from '@sections/PrivacyPolicy/PrivacyPolicy';
import type { NextPage } from 'next';

const WarlinePage: NextPage<SharedProps> = (props) => {
  return (
    <>
      <PageHead title="Privacy Policy" />
      <PrivacyPolicy />
    </>
  );
};

export default WarlinePage;
