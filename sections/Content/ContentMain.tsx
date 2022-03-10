import React from "react";
import Blurb from "./Blurb";

const ContentMain = () => {
  return (
    <div className="pl-10% pr-10% flex flex-direction  mt-20">
      <div className="mt-10 w-80%">
        <p className="font-rblack text-75px uppercase mb-100px">
          We will never let any single day of this period disappear from the
          ledger of world history.
        </p>
        <Blurb
          header={"THE NFT'S"}
          english="will be created in chronological order, according to the events so the true history will be saved and cherished. And artists will depict how the war is perceived by the peaceful population of sovereign Ukraine — from its full outbreak to the moment of Ukrainian victory celebration. "
          russian="NFT створюватимуться в хронологічній послідовності. Таким чином буде збережно виключно коректний перебіг подій. Художники відображатимуть військові події, пережиті мирним населенням суверенної України — від повних заперечень війни і до моменту святкування української перемоги."
        />
      </div>
      <div className="ml-10 mt-16 w-20% justify-between flex flex-col">
        <p>
          Ми не дамо викреслити жодного дня цього періоду зі сторінок світової
          історії.
        </p>
        <img alt="Logo" src={"img/pd-dots2.png"} />
      </div>
    </div>
  );
};

export default ContentMain;
