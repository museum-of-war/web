import React from "react";
import Blurb from "./Blurb";
import Team from "./Team";
import { useViewPort } from "@hooks/useViewport";

type ContentTopProps = {
  signerAddress: string;
  handleConnect: () => void;
};

const ContentMain = ({ signerAddress, handleConnect }: ContentTopProps) => {
  const { isMobile } = useViewPort();
  return isMobile ? (
    <div className="mb-8% mt-10">
      <div>
        <p className="font-rblack text-29px uppercase mb-40px leading-30px">
          We will never let any single day of this period disappear from the
          ledger of world history.
        </p>
        <div className="flex relative flex-row justify-end mb-40px">
          <img
            className="absolute h-100% -left-20px"
            alt="dots"
            src="/img/pd-dotsHorizontalSmall.png"
          />{" "}
          <div className="font-rnarrow text-14px leading-20px">
            Ми не дамо викреслити<br/>жодного дня цього періоду<br/>зі сторінок світової
            історії.
          </div>
        </div>
      </div>
      <div className="mt-60px">
        <Blurb
          header={"TEAM"}
        />
        <img
          alt="partners"
          src={"img/pd-partners.png"}
          className=""
        />
        <Team />
      </div>
    </div>
  ) : (
    <div className="mt-120px">
      <div className="flex laptop:flex-row laptop:justify-between tablet:flex-col">
        <p className="font-rblack uppercase tablet:text-70px tablet:leading-72px tablet:w-100% laptop:w-70%">
          We will never let any single day of this period disappear from the ledger of world history.
        </p>
        <div className="flex laptop:flex-col tablet:flex-row-reverse tablet:mt-48px laptop:mt-0">
          <p className="font-rnarrow tablet:text-16px tablet:leading-24px reltive">
            Ми не дамо викреслити<br/>жодного дня цього періоду<br/>зі сторінок світової
            історії.
          </p>
          <img className="h-72px absolute -left-0 tablet:block laptop:hidden" alt="Dots" src={"img/pd_horisontal_dots.svg"} />
          <img className="mt-50px h-377px tablet:hidden laptop:block" alt="Dots" src={"img/vertical_dots.svg"} /> 
        </div>
      </div>
      <div className="tablet:mt-96px laptop:mt-120px">
        <Blurb
          header={"TEAM"}
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
