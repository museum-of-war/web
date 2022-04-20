import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import { useAppRouter } from '@hooks/useAppRouter';
import Tokens from '@sections/Tokens/Tokens';
import type { NextPage } from 'next';

const TokensPage: NextPage<SharedProps> = (props) => {
  const { push } = useAppRouter();
  if (!props.signerAddress) {
    push('/');
  }
  return (
    <>
      <PageHead title="Tokens - Meta History: Museum of War" />
      <Tokens signerAddress={props.signerAddress} />
    </>
  );
};

export default TokensPage;
