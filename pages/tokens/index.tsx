import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import Tokens from '@sections/Tokens/Tokens';
import type { NextPage } from 'next';

const TokensPage: NextPage<SharedProps> = (props) => {
  if (!props.signerAddress) {
    props.handleConnect();
  }
  return (
    <>
      <PageHead
          title="Tokens"
          data={{
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [{
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Tokens',
              }]
          }}
      />
      <Tokens signerAddress={props.signerAddress} />
    </>
  );
};

export default TokensPage;
