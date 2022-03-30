import type { NextPage } from "next";
import { SharedProps } from "@components/wrapper";
import Tokens from "../sections/Tokens/Tokens";
import { useAppRouter } from "@hooks/useAppRouter";
import Head from "next/head";

const TokensPage: NextPage<SharedProps> = (props) => {
  const { push } = useAppRouter();
  if (!props.signerAddress) {
    push("/");
  }
  return (
    <>
      <Head>
        <title>Tokens - Meta History: Museum of War</title>
        <meta
          name="description"
          content="Tokens - Meta History: Museum of War"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tokens signerAddress={props.signerAddress} />
    </>
  );
};

export default TokensPage;
