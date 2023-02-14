import React, { useMemo, useState } from 'react';
import Blurb from '@sections/AboutProject/Blurb';
import { openInNewTab } from '@sections/utils';
import { AmbassadorType } from '@sections/types';
import { useViewPort } from '@hooks/useViewport';

const data = [
  {
    name: 'VESA',
    url: 'https://www.artforcrypto.com/',
    info: [
      'Digital mixed media artist, creates NFT pieces, mixed reality pieces, art in the Multiverse',
      'Ambassador for the International Blockchain Association',
    ],
  },
  {
    name: 'Brittany Kaiser',
    url: 'https://ownyourdata.foundation/',
    info: [
      'Co-Founder of the Own Your Data Foundation and of the Digital Asset Trade Association (DATA), blockchain activist',
      'Promotes digital literacy education and raises awareness of data rights',
    ],
  },
  {
    name: 'Ian Scarffe',
    url: 'https://ianscarffe.com/',
    info: [
      'Serial entrepreneur, investor, key opinion leader, and Blockchain consultant',
      'Key Opinion Leader and Top Global Influencer in Blockchain and Fintech',
    ],
  },
  {
    name: 'Michael Chobanian',
    url: 'https://kuna.family/',
    info: [
      'Founder of KUNA.io, Xreserve (UAX token platform), ideologist of the cryptocurrency community of Ukraine',
      'President of the Blockchain Association of Ukraine, launched a Crypto Fund for Ukraine',
    ],
  },
  {
    name: 'Sergii Vasylchuk',
    url: 'https://everstake.one/',
    info: [
      'CEO and Founder of Everstake, biggest staking provider in the blockchain industry',
      'Closely cooperates with Ukrainian government as the initiator of the extensive project for tokenization',
    ],
  },
  {
    name: 'Oleksandr Tkachenko',
    url: 'https://mkip.gov.ua/',
    info: [
      'Minister of Culture and Information Policy of Ukraine since 2020',
      'Former media manager, journalist, producer and the long-term CEO of the 1+1 Media Group',
    ],
  },
  {
    name: 'Taras Gorbul',
    url: 'https://superheroes.marketing/',
    info: [
      'CEO & Founder of Superheroes.ua, a branding and marketing agency',
      'CEO of Blockchain Association of Ukraine',
    ],
  },
  {
    name: 'Yulia Karnas',
    url: 'https://oneukraine.com/about/',
    info: [
      'Part of Leadership Team in OneUkraine',
      'Independent Legal & Operations consultant with a primary focus on technological projects',
      'Part of KPMG Ukraine and the Presidential Administration of Ukraine',
    ],
  },
  {
    name: 'Volodymyr Panchenko',
    url: 'https://dmarket.com/',
    info: [
      'Video game and technology entrepreneur with over 15 years of experience',
      'Building the future of the in-game items industry that covers the needs of 2.4 billion gamers worldwide',
    ],
  },
  {
    name: 'Pavlo Kartashov',
    url: 'https://usf.com.ua/#usf-sc-2',
    info: ['Director of Ukrainian Startup Fund'],
  },
] as AmbassadorType[];

const Ambassadors = () => {
  const { isTablet, isNewMd, isDesktop } = useViewPort();
  const [startIdx, setStartIdx] = useState(0);

  const itemsOnPage = useMemo(() => {
    if (isNewMd) {
      return 3;
    }
    if (isTablet) {
      return 2;
    }

    if (isDesktop) {
      return 4;
    }
    return 1;
  }, [isDesktop, isNewMd, isTablet]);

  const toShow = useMemo(
    () => data.slice(startIdx, startIdx + itemsOnPage),
    [itemsOnPage, startIdx],
  );

  const disabledLeft = startIdx === 0;
  const disabledRight = startIdx + itemsOnPage >= data.length;

  return (
    <div className="font-rlight desktop:py-120px tablet:py-[96px] mobile:py-60px">
      <Blurb
        header="Ambassadors"
        classNames="w-full break-all"
        rightContent={
          <span className="ml-auto hidden tablet:flex flex-row">
            <button
              disabled={disabledLeft}
              onClick={() => setStartIdx(startIdx - itemsOnPage)}
              className={`${
                disabledLeft ? 'opacity-20' : 'opacity-100'
              } tablet:w-48px tablet:h-48px mobile:w-40px mobile:h-40px flex items-center justify-center border-2 border-carbon rounded-full mr-25px`}
            >
              <img src="/img/left_arrow.svg" alt="left arrow" />
            </button>
            <button
              onClick={() => setStartIdx(startIdx + itemsOnPage)}
              disabled={disabledRight}
              className={`${
                disabledRight ? 'opacity-20' : 'opacity-100'
              } tablet:w-48px tablet:h-48px mobile:w-40px mobile:h-40px flex items-center justify-center border-2 border-carbon rounded-full`}
            >
              <img src="/img/right_arrow.svg" alt="right arrow" />
            </button>
          </span>
        }
      />
      <div className="flex desktop:flex-row tablet:flex-row mobile:flex-col justify-between desktop:mt-40px tablet:mt-40px mobile:mt-32px">
        <div className="grid grid-cols-1 tablet:grid-cols-2 new_md:grid-cols-3 desktop:grid-cols-4 flex-wrap gap-48px">
          {toShow.map((datum) => (
            <div key={datum.name}>
              <div className="flex flex-col">
                <img className="w-96px" alt="wreath" src="/wreath.svg" />
                <div className="mobile:leading-48px tablet:leading-48px desktop:leading-40px text-20px">
                  {datum.name}
                </div>
                <div>
                  <ul className="list-disc list-outside pl-16px tablet:text-16px tablet:leading-24px mobile:text-14px mobile:leading-20px font-rnarrow">
                    {datum.info.map((row, index) => (
                      <li key={index}>{row}</li>
                    ))}
                  </ul>
                </div>
                <div
                  className="font-rblack self-start inline-flex flex-row cursor-pointer text-14px desktop:leading-48px tablet:leading-48px mobile:leading-40px border-b-4 hover:border-b-4 hover:border-solid border-transparent hover:border-carbon"
                  onClick={() => {
                    openInNewTab(datum.url);
                  }}
                >
                  About{' '}
                  <img src="/img/link.svg" alt="link" className="ml-12px" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32px flex flex-row tablet:hidden">
          <button
            disabled={disabledLeft}
            onClick={() => setStartIdx(startIdx - itemsOnPage)}
            className={`${
              disabledLeft ? 'opacity-20' : 'opacity-100'
            } mobile:w-40px mobile:h-40px flex items-center justify-center border-2 border-carbon rounded-full mr-40px`}
          >
            <img src="/img/left_arrow.svg" alt="/img/left_arrow" />
          </button>
          <button
            onClick={() => setStartIdx(startIdx + itemsOnPage)}
            disabled={disabledRight}
            className={`${
              disabledRight ? 'opacity-20' : 'opacity-100'
            } mobile:w-40px mobile:h-40px flex items-center justify-center border-2 border-carbon rounded-full`}
          >
            <img src="/img/right_arrow.svg" alt="/img/right_arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ambassadors;
