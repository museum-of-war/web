import React from "react";
import Blurb from "./Blurb";
import { useViewPort } from "@hooks/useViewport";

const ContentWar = () => {
  const { isMobile } = useViewPort();

  return (
    <div className="pr-10% mobile:pl-10% tablet:pl-0 flex flex-direction mobile:mt-8% tablet:mt-20 mobile:mb-15% tablet:mb-100px">
      {!isMobile && (
        <div className="w-50% mt-50px mr-6%">
          <img alt="Logo" src={"img/pd-dots1.png"} />
        </div>
      )}
      <div className="w-100%">
        <Blurb
          header="MUSEUM OF WAR"
          english="A chronology of events of the Ukrainian history of modern times, set in stone. The NFTs are facts accompanied by personal reflections. The formula of each NFT is clear and simple: each token is a real news piece from an official source and an illustration from artists, both Ukrainian and international."
          ukrainian="Відверта хронологія подій новітньої історії України. Експонати — це факти, супроводжені емоційними спогадами. Формула експонату проста і прозора, кожен токен — реальне новинне повідомлення з офіційних джерел та ілюстрація до нього від художників — як українських, так і світових."
        />
      </div>
    </div>
  );
};

export default ContentWar;
