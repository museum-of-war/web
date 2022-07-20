import React from 'react';
import Blurb from '@sections/AboutProject/Blurb';
import { openInNewTab } from '@sections/utils';
import { useViewPort } from '@hooks/useViewport';

const data = [
  { name: 'Vesa', url: 'https://www.artforcrypto.com/pagecv' },
  { name: 'Brittany Kaiser', url: 'https://ownyourdata.foundation/' },
  { name: 'Alona DAO', url: 'https://linktr.ee/ukrainedao' },
];

const Ambassadors = () => {
  const { isDesktop, isTablet } = useViewPort();
  const blurbText = isDesktop
    ? 'Ambassadors'
    : isTablet
    ? 'Ambassad\nors'
    : 'Ambassa\ndors';

  return (
    <div className="font-rlight desktop:py-120px tablet:py-[96px] mobile:py-60px">
      <Blurb header={blurbText} />
      <div className="flex desktop:flex-row tablet:flex-row mobile:flex-col justify-between flex-wrap">
        {data.map((datum) => (
          <div
            className="desktop:basis-1/4 tablet:basis-1/2 mobile:basis-1"
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
              About <img src="/img/link.svg" alt="link" className="ml-12px" />
            </div>
          </div>
        ))}
        <div className="mobile:hidden tablet:flex desktop:flex desktop:basis-1/4 tablet:basis-1/2">
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
