import { SharedProps } from "@components/wrapper";
import TheHall from "@sections/TheHall/TheHall";
import type { NextPage } from "next";
import Head from "next/head";

const TheHallPage: NextPage<SharedProps> = () => {
  return (
    <>
      <Head>
        <title>The Hall</title>
        <meta name="description" content="The Hall" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TheHall />
    </>
  );
};

export default TheHallPage;
