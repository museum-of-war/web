import React from "react";

type PropsBlurb = {
  header: string;
  english: string;
  ukrainian: string;
};

const Blurb = ({ header, english, ukrainian }: PropsBlurb) => {
  return (
    <div>
      <p className="font-rblack mobile:text-38px mobile:leading-12vw tablet:text-9vw  tablet:leading-9vw laptop:text-5vw  laptop:leading-5.5vw  uppercase">
        {header}
      </p>
      <div className="h-5px w-100% bg-carbon dark:bg-white"></div>
      <div className="pt-20px relative tablet:flex tablet:flex-row font-rnarrow mobile:leading-20px tablet:leading-24px mobile:text-14px tablet:text-16px tablet:justify-between">
        <p className="pt-10 tablet:w-45% mobile:mb-6%">{english}</p>
        <p className="tablet:w-45%">{ukrainian}</p>
      </div>
    </div>
  );
};

export default Blurb;
