import { useViewPort } from "@hooks/useViewport";
import React from "react";
import Blurb from "./Blurb";

const ContentMission = () => {
  const { isMobile } = useViewPort();
  return (
    <>
      <div className="px-10% tablet:flex tablet:flex-row tablet:justify-between mt-20 tablet:mb-75px mobile:mb-8%">
        <div className="tablet:w-45%">
          <Blurb
            header="MISSION"
            english="To preserve the memory of the real events of that time, to spread truthful information among the digital community in the world and to collect donations for the support of Ukraine."
            ukrainian="Зберегти пам’ять про реальні події цього часу, розповсюдити правдиву інформацію серед діджитал-спільноти у світі та зібрати благодійні внески на підтримку України."
          />
        </div>
        <div className="tablet:w-45% mobile:mt-8% tablet:mt-0">
          <Blurb
            header="100%"
            english="of funds from the sale will go directly to the official crypto-accounts of the Ministry of Digital Transformation of Ukraine to support army and civilians."
            ukrainian="коштів з продажу музейної колекції надійдуть безпосередньо на офіційні крипто-рахунки Міністерства цифрової трансформації України, що йдуть на підтримку ЗСУ та населення."
          />
        </div>
      </div>
      {isMobile && (
        <img
          className="w-100% pl-10%"
          alt="dots"
          src="/img/pd-dotsHorizontalMobile.png"
        />
      )}
    </>
  );
};

export default ContentMission;
