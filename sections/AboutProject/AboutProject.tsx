import React from "react";
import ContentMission from "./ContentMission";
import ContentTop from "./ContentTop";
import ContentWar from "./ContentWar";
import ContentMain from "./ContentMain";
import ContentMedia from "./ContentMedia";

const Content = () => {
  return (
    <div>
      <ContentTop />
      <ContentMission />
      <ContentWar />
      <ContentMain />
      <ContentMedia />
    </div>
  );
};

export default Content;
