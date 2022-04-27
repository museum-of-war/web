import React from 'react';

type PropsBlurb = {
  header: string;
  english?: string;
  ukrainian?: string;
};

const Blurb = ({ header, english, ukrainian }: PropsBlurb) => {
  return (
    <div>
      <p className="font-rblack mobile:text-38px mobile:leading-40px tablet:text-70px tablet:leading-72px uppercase">
        {header}
      </p>
      <div className="h-5px w-100% bg-carbon dark:bg-white" />
      <div className="pt-20px relative tablet:flex tablet:flex-row font-rnarrow mobile:leading-20px tablet:leading-24px mobile:text-14px tablet:text-16px tablet:justify-between">
        {english && (
          <p className="pt-10 tablet:w-45% mobile:mb-6%">{english}</p>
        )}
        {ukrainian && <p className="tablet:w-45%">{ukrainian}</p>}
      </div>
    </div>
  );
};

export default Blurb;
