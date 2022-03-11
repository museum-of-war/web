import React from "react";
import ContentMission from "./ContentMission";
import ContentTop from "./ContentTop/ContentTop";
import ContentWar from "./ContentWar";
import ContentMain from "./ContentMain";
import ContentMedia from "./ContentMedia";

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
    </div>
  );
};

export default AboutProject;
