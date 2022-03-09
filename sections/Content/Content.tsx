import React from "react";
import ContentBottom from "./ContentBottom";
import ContentMission from "./ContentMission";
import ContentTop from "./ContentTop";
import ContentWar from "./ContentWar";

const Content = () => {
  return (
    <>
      <ContentTop />
      <ContentMission/>
      <ContentWar />

      <ContentBottom />
    </>
  );
};

export default Content;
