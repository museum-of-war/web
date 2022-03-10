import React from "react";

type PropsBlurb = {
  header: string;
  english: string;
  ukrainian: string;
};

const Blurb = ({ header, english, ukrainian }: PropsBlurb) => {
  return (
    <div>
      <p className="font-rblack text-90px uppercase">{header}</p>
      <div className="h-5px w-100% bg-carbon"></div>
      <div className="pt-20px relative flex flex-row font-rlight justify-between">
        <p className="pt-10 w-45%	">{english}</p>
        <p className=" w-45%	">{ukrainian}</p>
      </div>
    </div>
  );
};

export default Blurb;
