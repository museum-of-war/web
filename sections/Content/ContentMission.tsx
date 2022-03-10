import React from "react";
import Blurb from "./Blurb";

const ContentMission = () => {
  return (
    <div className="px-10% flex flex-direction justify-between mt-20 mb-75px">
      <div className="w-45%">
        <Blurb
          header="MISSION"
          english="To preserve the memory of the real events of that time, to spread truthful information among the digital community and in the world and to collect donations for the support of Ukraine."
          russian="Зберегти пам'ять про реальні події цього часу, розповсюдити правдиву інформацію серед діджитал-спільноти та й у світі та зібрати благодійні внески на підтримку України."
        />
      </div>
      <div className="w-45%">
        <Blurb
          header="100%"
          english="of funds from the sales will go directly to the official crypto-accounts of the Ministry of Digital Transformation of Ukraine."
          russian="коштів з продажу музейної колекції надійдуть безпосередньо на офіційні крипто-рахунки Міністерства цифрової трансформації України."
        />
      </div>
    </div>
  );
};

export default ContentMission;
