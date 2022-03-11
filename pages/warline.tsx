import { SharedProps } from "@components/wrapper";
import { useAppRouter } from "@hooks/useAppRouter";
import type { NextPage } from "next";
import Warline from "../sections/Warline/Warline";

const WarlinePage: NextPage<SharedProps> = (props) => {
  const { push } = useAppRouter();
  if (!props.signerAddress) {
    push("/");
  }
  return <Warline />;
};

export default WarlinePage;
