import { useAbsoluteUrl } from '@hooks/useAbsoluteUrl';
import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import type { NextPage } from 'next';
import AboutProject from '../sections/AboutProject/AboutProject';

const Home: NextPage<SharedProps> = (props) => {
  const url = useAbsoluteUrl();
  return (
    <>
      <PageHead
          title="About - Meta History: Museum of War"
          data={{
              '@context': 'https://schema.org',
              '@type': 'Organization',
              url: url(),
              logo: url('/logo.svg'),
          }}
      />
      <AboutProject
        signerAddress={props.signerAddress}
        handleConnect={props.handleConnect}
      />
    </>
  );
};

export default Home;
