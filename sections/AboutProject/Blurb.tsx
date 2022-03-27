import React from "react";

type PropsBlurb = {
  header: string;
  english: string;
  ukrainian: string;
};

const Blurb = ({ header, english, ukrainian }: PropsBlurb) => {
  return (
    <div>
      <p className="font-rblack mobile:text-[36px] mobile:leading-12vw tablet:text-9vw  tablet:leading-9vw laptop:text-5vw  laptop:leading-5.5vw  uppercase">
        {header}
      </p>
      <div className="h-5px w-100% bg-carbon"></div>
      <div className="pt-20px relative tablet:flex tablet:flex-row font-rlight tablet:justify-between">
        <p className="pt-10 tablet:w-45% mobile:text-12px tablet:text-14px laptop:text-16px mobile:mb-6%">
          {english}
        </p>
        <p className="tablet:w-45% mobile:text-12px tablet:text-14px laptop:text-16px">
          {ukrainian}
        </p>
      </div>
    </div>
  );
};

export default Blurb;
