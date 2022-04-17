import { SharedProps } from '@components/wrapper';
import NftDetail from '@sections/NftDetail/NftDetail';
import type { NextPage } from 'next';
import Head from 'next/head';

const NftDetailPage: NextPage<SharedProps> = () => {
  return (
    <>
      <Head>
        <title>Auction - Meta History: Museum of War</title>
        <meta
          name="description"
          content="Auction - Meta History: Museum of War"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NftDetail />
    </>
  );
};

export default NftDetailPage;
