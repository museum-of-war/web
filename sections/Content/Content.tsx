import React from "react";
import ContentBottom from "./ContentBottom";
import ContentMission from "./ContentMission";
import ContentTop from "./ContentTop";
import ContentWar from "./ContentWar";
import ContentMain from "./ContentMain";

const Content = () => {
  return (
    <>
      <ContentTop />
      <ContentMission/>
      <ContentWar />
    <ContentMain/>
      <ContentBottom />
    </>
  );
};

export default Content;
