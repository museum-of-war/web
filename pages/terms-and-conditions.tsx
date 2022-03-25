import { SharedProps } from "@components/wrapper";
import TermsAndConditions from "@sections/TermsAndConditions/TermsAndConditions";
import type { NextPage } from "next";
import Head from "next/head";

const WarlinePage: NextPage<SharedProps> = (props) => {
  return (
    <>
      <Head>
        <title>Terms and Conditions</title>
        <meta name="description" content="Terms and Conditions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TermsAndConditions />
    </>
  );
};

export default WarlinePage;
