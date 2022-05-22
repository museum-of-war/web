import React from 'react';

type PropsBlurb = {
  header?: string;
  english?: string;
  ukrainian?: string;
  isDark?: boolean;
  classNames?: string;
  rightContent?: React.ReactNode;
};

const Blurb = ({
  header,
  english,
  ukrainian,
  isDark,
  classNames,
  rightContent,
}: PropsBlurb) => {
  return (
    <div className={classNames}>
      <p
        className={`font-rblack mobile:text-38px mobile:leading-40px tablet:text-70px tablet:leading-72px uppercase flex items-center flex-row ${
          isDark ? 'text-white' : ''
        }`}
      >
        {header} {rightContent || null}
      </p>
      <div
        className={`h-5px w-100% bg-carbon dark:bg-white ${
          isDark ? 'bg-white' : ''
        }`}
      />
      <div className="pt-20px relative tablet:flex tablet:flex-row font-rnarrow mobile:leading-20px tablet:leading-24px mobile:text-14px tablet:text-16px tablet:justify-between">
        {english && (
          <p className="whitespace-pre-wrap pt-10 tablet:w-45% mobile:mb-6%">
            {english}
          </p>
        )}
        {ukrainian && (
          <p className="whitespace-pre-wrap tablet:w-45%">{ukrainian}</p>
        )}
      </div>
    </div>
  );
};

export default Blurb;
