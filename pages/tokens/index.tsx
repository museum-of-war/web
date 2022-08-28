import { TITLES } from '@sections/Constants';
import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import Tokens from '@sections/Tokens/Tokens';
import type { NextPage } from 'next';
import { useEffectOnce } from '@hooks/useEffectOnce';

const TokensPage: NextPage<SharedProps> = ({
  signerAddress,
  handleConnect,
}) => {
  useEffectOnce(() => {
    if (!signerAddress) {
      handleConnect();
    }
  });
  return (
    <>
      <PageHead
        title={TITLES.TOKENS}
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Tokens',
            },
          ],
        }}
        canonical={'/tokens'}
      />
      <Tokens signerAddress={signerAddress} />
    </>
  );
};

export default TokensPage;
