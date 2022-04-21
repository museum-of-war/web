import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import NftDetail from '@sections/NftDetail/NftDetail';
import type { NextPage } from 'next';

const NftDetailPage: NextPage<SharedProps> = () => {
  return (
    <>
      <PageHead title="Auction - Meta History: Museum of War" />
      <NftDetail />
    </>
  );
};

export default NftDetailPage;
