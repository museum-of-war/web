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
        title="Tokens"
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
      />
      <Tokens signerAddress={signerAddress} />
    </>
  );
};

export default TokensPage;
