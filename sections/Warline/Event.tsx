import React from "react";

type PropsBlurb = {
  imageUrl: string;
  time: string;
  description: string;
  tokenId: string;
  username:string;
};

const Event = ({ imageUrl, time, description,tokenId,username }: PropsBlurb) => {
  return (
    <div>
      <p className="font-rblack tablet:text-5vw mobile:text-12vw mobile:leading-12vw tablet:leading-5.5vw uppercase">
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

export default Event;
