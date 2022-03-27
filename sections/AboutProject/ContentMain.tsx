import React from "react";
import Blurb from "./Blurb";
import Team from "./Team";

import { useViewPort } from "@hooks/useViewport";
const ConnectYourWalletChronology = dynamic(
  () => import("@components/ConnectYourWalletChronology"),
  {
    ssr: false,
  }
);
import dynamic from "next/dynamic";

type ContentTopProps = {
  signerAddress: string;
  handleConnect: () => void;
};

const ContentMain = ({ signerAddress, handleConnect }: ContentTopProps) => {
  const { isMobile } = useViewPort();
  return isMobile ? (
    <div className="mb-8% mt-10">
      <div className="px-10%">
        <p className="font-rblack text-10vw uppercase mb-15% leading-10.5vw">
          We will never let any single day of this period disappear from the
          ledger of world history.
        </p>
        <div className="flex flex-row mb-8% -ml-10% px-10%">
          <img
            className="w-15% mr-10% -mt-10px h-100%"
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
          english="will be created in chronological order, according to the events so the true history will be saved and cherished. And artists will depict how the war is perceived by the peaceful population of sovereign Ukraine — from its full outbreak to the moment of Ukrainian victory celebration. "
          ukrainian="NFT створюватимуться в хронологічній послідовності. Таким чином буде збережено виключно коректний перебіг подій. Художники відображатимуть військові події, пережиті мирним населенням суверенної України — від повних заперечень війни і до моменту святкування української перемоги."
        />
      </div>
      {!signerAddress && (
        <ConnectYourWalletChronology handleConnect={handleConnect} />
      )}
      <div className="mt-8% px-10%">
        <Blurb
          header={"TEAM AND PARTNERS"}
          english="Ukrainian blockchain community in collaboration with the Ministry of Digital Transformation of Ukraine"
          ukrainian="Українська блокчейн-спільнота разом з Міністерством цифрової трансформації України"
        />
        <img
          alt="partners"
          src={"img/pd-partners.png"}
          className="mb-5% mt-8%"
        />
        <Team />
      </div>
    </div>
  ) : (
    <div className="mt-20">
      <div className="flex flex-row px-10%">
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
        <div className="ml-5%  mobile:w-20% tablet:justify-between flex flex-col">
          <p className="font-rlight mt-10px mobile:text-12px tablet:text-14px laptop:text-16px">
            Ми не дамо викреслити жодного дня цього періоду зі сторінок світової
            історії.
          </p>
          <img className="" alt="Logo" src={"img/pd-dots2.png"} />
        </div>
      </div>
      {!signerAddress && (
        <ConnectYourWalletChronology handleConnect={handleConnect} />
      )}
      <div className="mt-8% px-10%">
        <Blurb
          header={"TEAM AND PARTNERS"}
          english="Ukrainian NFT artists community in collaboration with Ministry of digital trasformation of Ukraine"
          ukrainian="Спільнота українських NFT художників у співпраці з Міністерством цифрової трансформації України"
        />
        <img
          alt="partners"
          src={"img/pd-partners.png"}
          className="mb-5% mobile:mt-8% tablet:mt-0 w-100%"
        />
        <Team />
      </div>
    </div>
  );
};

export default ContentMain;
