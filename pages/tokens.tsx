import type { NextPage } from "next";
import { SharedProps } from "@components/wrapper";
import Tokens from "../sections/Tokens/Tokens";
import { useAppRouter } from "@hooks/useAppRouter";

const TokensPage: NextPage<SharedProps> = (props) => {
  const { push } = useAppRouter();
  if (!props.signerAddress) {
    push("/");
  }
  return <Tokens />;
};

export default TokensPage;
