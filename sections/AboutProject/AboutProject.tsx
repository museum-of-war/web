import React, { useState } from "react";
import ContentMission from "./ContentMission";
const ContentTop = dynamic(() => import("./ContentTop/ContentTop"), {
  ssr: false,
});
import ContentWar from "./ContentWar";
import ContentMain from "./ContentMain";
import ContentMedia from "./ContentMedia";
import dynamic from "next/dynamic";
import SupportSticky from "@sections/Warline/SupportSticky";
import DonatePopup from "../Warline/DonatePopup";
type AboutProjectProps = {
  signerAddress: string;
  handleConnect: () => void;
};

const AboutProject = ({ signerAddress, handleConnect }: AboutProjectProps) => {
  const [showDonatePopup, setShowDonatePopup] = useState<boolean>(false);

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
      <SupportSticky setShowDonatePopup={setShowDonatePopup} />
      {showDonatePopup ? (
        <DonatePopup setShowDonatePopup={setShowDonatePopup} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default AboutProject;
