import { SharedProps } from "@components/wrapper";
import type { NextPage } from "next";
import Head from "next/head";
import AboutProject from "../sections/AboutProject/AboutProject";

const Home: NextPage<SharedProps> = (props) => {
  return (
    <>
      <Head>
        <title>About - Meta History: Museum of War</title>
        <meta
          name="description"
          content="About - Meta History: Museum of War"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutProject
        signerAddress={props.signerAddress}
        handleConnect={props.handleConnect}
      />
    </>
  );
};

export default Home;
