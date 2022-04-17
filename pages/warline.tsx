import { SharedProps } from '@components/wrapper';
import type { NextPage } from 'next';
import Head from 'next/head';
import Warline from '@sections/Warline/Warline';

const WarlinePage: NextPage<SharedProps> = () => (
  <>
    <Head>
      <title>Warline - Meta History: Museum of War</title>
      <meta
        name="description"
        content="Warline - Meta History: Museum of War"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Warline />
  </>
);

export default WarlinePage;
