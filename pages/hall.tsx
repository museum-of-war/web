import { SharedProps } from '@components/wrapper';
import TheHall from '@sections/TheHall/TheHall';
import Head from 'next/head';
import type { NextPage } from 'next';

const TheHallPage: NextPage<SharedProps> = () => {
  return (
    <>
      <Head>
        <title>The Hall of Meta History</title>
        <meta name="description" content="The Hall" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TheHall />
    </>
  );
};

export default TheHallPage;
