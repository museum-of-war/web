import React from "react";
import Blurb from "./Blurb";

const ContentMiddle = () => {
  return (
    <div className ="pl-10% pr-10% flex flex-direction justify-between mt-20">
    <div className = "w-45%">
    {Blurb("MISSION","To preserve the memory of the real events of that time, to spread truthful information among the digital community and in the world and to collect donations for the support of Ukraine.","Зберегти пам'ять про реальні події цього часу, розповсюдити правдиву інформацію серед діджитал-спільноти та й у світі та зібрати благодійні внески на підтримку України.")}
    </div>
    <div className = "w-45%">
    {Blurb("100%","of funds from the sales will go directly to the official crypto-accounts of the Ministry of Digital Transformation of Ukraine.","коштів з продажу музейної колекції надійдуть безпосередньо на офіційні крипто-рахунки Міністерства цифрової трансформації України.")}
    </div>
    </div>
  );
};

export default ContentMiddle;
