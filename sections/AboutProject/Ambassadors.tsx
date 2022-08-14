import React from 'react';
import Blurb from '@sections/AboutProject/Blurb';
import { openInNewTab } from '@sections/utils';

const data = [
  { name: 'Vesa', url: 'https://www.artforcrypto.com/' },
  { name: 'Brittany Kaiser', url: 'https://ownyourdata.foundation/' },
  { name: 'Alona Shevchenko', url: 'https://linktr.ee/ukrainedao' },
  { name: 'Ian Scarffe', url: 'https://ianscarffe.com/' },
  { name: 'Rev Miller', url: 'https://me.linkedin.com/in/revmiller' },
];

const Ambassadors = () => {
  return (
    <div className="font-rlight desktop:py-120px tablet:py-[96px] mobile:py-60px">
      <Blurb header="Ambassadors" classNames="break-all" />
      <div className="flex desktop:flex-row tablet:flex-row mobile:flex-col justify-between">
        <div className="flex desktop:flex-row tablet:flex-row mobile:flex-col flex-wrap">
          {data.map((datum) => (
            <div
              className="desktop:basis-1/3 tablet:basis-1/2 mobile:basis-1"
              key={datum.name}
            >
              <div className="flex flex-col desktop:mt-40px tablet:mt-40px mobile:mt-32px">
                <img className="w-96px" alt="wreath" src="wreath.svg" />
                <div className="mobile:leading-48px tablet:leading-48px desktop:leading-40px text-20px">
                  {datum.name}
                </div>
              </div>
              <div
                className="font-rblack inline-flex flex-row cursor-pointer text-14px desktop:leading-48px tablet:leading-48px mobile:leading-40px border-b-4 hover:border-b-4 hover:border-solid border-transparent hover:border-carbon"
                onClick={() => {
                  openInNewTab(datum.url);
                }}
              >
                About <img src="img/link.svg" alt="link" className="ml-12px" />
              </div>
            </div>
          ))}
          <div className="mobile:hidden tablet:flex desktop:hidden self-end tablet:basis-1/2 justify-end">
            <img
              src="/img/dots-ambassadors.svg"
              className="w-[248px] h-96px mt-auto"
              alt="dots"
            />
          </div>
        </div>
        <div className="mobile:hidden desktop:flex self-center">
          <img
            src="/img/dots-ambassadors.svg"
            className="w-[248px] h-96px mt-auto"
            alt="dots"
          />
        </div>
      </div>
    </div>
  );
};

export default Ambassadors;
