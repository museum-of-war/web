import React from 'react';
import { openInNewTab } from '@sections/utils';

type ItemProps = {
  summary: string;
  outlet: string;
  url: string;
  linkText: string;
  isBlackBg?: boolean;
};
export const MediaItem: React.FC<ItemProps> = ({ summary, outlet, url, linkText, isBlackBg }) => {
  return (
    <div className="flex flex-col justify-start items-start">
      <p className="font-rlight text-16px mt-20px">{outlet}</p>
      <p className="font-rnarrow mobile:text-18px desktop:text-18px mt-10px">
        {summary}
      </p>
      <button
        className="mt-auto"
        onClick={() => {
          openInNewTab(url);
        }}
      >
        <p className={`font-rblack tablet:mt-30px mobile:mt-10px py-5px border-b-4 hover:border-b-4 hover:border-solid border-transparent 
          ${isBlackBg ? 'hover:border-white': 'hover:border-carbon'}`}>
          {linkText}
        </p>
      </button>
    </div>
  );
};
