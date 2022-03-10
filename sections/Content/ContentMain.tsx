import React from "react";
import Blurb from "./Blurb";
import { useViewPort } from "@hooks/useViewport";

const ContentMain = () => {
  const { isMobile } = useViewPort()
  return isMobile ? (
    <div className="px-10% mb-8%">
      <div className="mt-10">
        <p className="font-rblack text-10vw uppercase mb-15% leading-10.5vw">
          We will never let any single day of this period disappear from the
          ledger of world history.
        </p>
        <div className="flex flex-row mb-8% -ml-10%">
          <img
            className="w-15% mr-10% h-100%"
            alt="dots"
            src="/img/pd-dotsHorizontalSmall.png"
          />{" "}
          <div className="font-rlight text-12px">
            Ми не дамо викреслити жодного дня цього періоду зі сторінок світової
            історії.
          </div>
        </div>
        <Blurb
          header={"THE NFT'S"}
          english="will be created in chronological order, according to the events so the true history will be saved and cherished. And artists will depict how the war is perceived by the peaceful population of sovereign Ukraine — from its full outbreak to the moment of Ukrainian victory celebration. "
          ukrainian="NFT створюватимуться в хронологічній послідовності. Таким чином буде збережно виключно коректний перебіг подій. Художники відображатимуть військові події, пережиті мирним населенням суверенної України — від повних заперечень війни і до моменту святкування української перемоги."
        />
      </div>
    </div>
  ) : (
    <div className="pl-10% pr-10% flex flex-row mt-20 mb-75px">
      <div className="mt-10 w-80% ">
        <p className="font-rblack tablet:text-5vw mobile:text-10vw uppercase tablet:mb-100px mobile:mb-15% tablet:leading-5vw mobile:leading-10.5vw">
          We will never let any single day of this period disappear from the
          ledger of world history.
        </p>
        <Blurb
          header={"THE NFT'S"}
          english="will be created in chronological order, according to the events so the true history will be saved and cherished. And artists will depict how the war is perceived by the peaceful population of sovereign Ukraine — from its full outbreak to the moment of Ukrainian victory celebration. "
          ukrainian="NFT створюватимуться в хронологічній послідовності. Таким чином буде збережно виключно коректний перебіг подій. Художники відображатимуть військові події, пережиті мирним населенням суверенної України — від повних заперечень війни і до моменту святкування української перемоги."
        />
      </div>
      <div className="ml-5% mt-28px tablet:w-20% tablet:justify-between flex tablet:flex-col mobile:flex-row">
        <p className="font-rlight mobile:text-12px tablet:text-14px laptop:text-16px">
          Ми не дамо викреслити жодного дня цього періоду зі сторінок світової
          історії.
        </p>
        <img className="" alt="Logo" src={"img/pd-dots2.png"} />
      </div>
    </div>
  );
};

export default ContentMain;
