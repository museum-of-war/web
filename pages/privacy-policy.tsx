import { SharedProps } from "@components/wrapper";
import PrivacyPolicy from "@sections/PrivacyPolicy/PrivacyPolicy";
import type { NextPage } from "next";
import Head from "next/head";

const WarlinePage: NextPage<SharedProps> = (props) => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta name="description" content="Privacy Policy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PrivacyPolicy />
    </>
  );
};

export default WarlinePage;
