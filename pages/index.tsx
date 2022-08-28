import { TITLES } from '@sections/constants';
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
        title={TITLES.MAIN}
        description="Ukraine's NFT museum, supported by the Ministry of Digital Transformation. We created an NFT collection to preserve the memory of the events of the war & collect donations."
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          url: url(),
          logo: url('/img/logo-icon.svg'),
        }}
        canonical={'/'}
      />
      <AboutProject signerAddress={props.signerAddress} />
    </>
  );
};

export default Home;
