import React from "react";
import ContentBottom from "./ContentBottom";
import ContentMission from "./ContentMission";
import ContentTop from "./ContentTop";
import ContentWar from "./ContentWar";
import ContentMain from "./ContentMain";
import ContentMedia from "./ContentMedia";

const Content = () => {
  return (
    <>
      <ContentTop />
      <ContentMission/>
      <ContentWar />
    <ContentMain/>
    <ContentMedia/>

      <ContentBottom />
    </>
  );
};

export default Content;
