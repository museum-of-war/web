import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import type { NextPage } from 'next';
import { TokenDetail } from '@sections/Tokens/TokenDetail';

const TokenDetailPage: NextPage<SharedProps> = () => {
  return (
    <>
      <PageHead title="My NFTs - Meta History: Museum of War" />
      <TokenDetail />
    </>
  );
};

export default TokenDetailPage;
