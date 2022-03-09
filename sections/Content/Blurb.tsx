import React from "react";

const Blurb = (header: string,english: string,russian: string) => {
  return (
    <div>
      <p className="font-rblack text-90px">{header}</p>
      <div className="h-5px w-100% bg-black"></div>
      <div className="mt-10 relative flex flex-row font-rlight justify-between">
          <p className=" w-45%	">
              {english}
          </p>
          <p className=" w-45%	">
            {russian}
          </p>
        </div>
    </div>
  );
};

export default Blurb;
