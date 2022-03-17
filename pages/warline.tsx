import { SharedProps } from "@components/wrapper";
import type { NextPage } from "next";
import Warline from "../sections/Warline/Warline";

const WarlinePage: NextPage<SharedProps> = (props) => {
  return <Warline />;
};

export default WarlinePage;
