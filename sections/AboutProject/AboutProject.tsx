import SupportProject from "@sections/AboutProject/SupportProject";
import SupportSticky from "@sections/AboutProject/SupportSticky";
import React from "react";
import ContentMission from "./ContentMission";
const ContentTop = dynamic(() => import("./ContentTop/ContentTop"), {
  ssr: false,
});
import ContentWar from "./ContentWar";
import ContentMain from "./ContentMain";
import ContentMedia from "./ContentMedia";
import dynamic from "next/dynamic";

type AboutProjectProps = {
  signerAddress: string;
  handleConnect: () => void;
};

const AboutProject = ({ signerAddress, handleConnect }: AboutProjectProps) => {
  return (
    <div>
      <ContentTop signerAddress={signerAddress} handleConnect={handleConnect} />
      <ContentMission />
      <ContentWar />
      <ContentMain
        signerAddress={signerAddress}
        handleConnect={handleConnect}
      />
      <ContentMedia />
      <SupportSticky targetAnchorId={"countdown-banner"}/>
      <SupportProject/>
    </div>
  );
};

export default AboutProject;
