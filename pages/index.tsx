import { SharedProps } from "@components/wrapper";
import type { NextPage } from "next";
import AboutProject from "../sections/AboutProject/AboutProject";

const Home: NextPage<SharedProps> = (props) => {
  return (
    <AboutProject
      signerAddress={props.signerAddress}
      handleConnect={props.handleConnect}
    />
  );
};

export default Home;
