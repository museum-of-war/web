import React from 'react';
import Blurb from '@sections/AboutProject/Blurb';
import { openInNewTab } from '@sections/utils';
import { AmbassadorType } from '@sections/types';

const data = [
  {
    name: 'Vesa',
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
    name: 'Alona Shevchenko',
    url: 'https://linktr.ee/ukrainedao',
    info: [
      'Founder of Ukraine DAO, a Web3-native community with a mission, blockchain activist',
      'Solving real-life problems with the help of digital art',
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
    name: 'Rev Miller',
    url: 'https://me.linkedin.com/in/revmiller',
    info: [
      'Innovative serial entrepreneur, creator of Unchain Ukraine, a charity organization',
      'Co-founder of Atlantis World, first lightweight metaverse enabling interactive, token-gated community spaces',
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
    name: 'Alex Slobozhenko',
    url: 'https://www.traffic-devils.com/',
    info: ['CEO & founder of Traffic Devils'],
  },
  {
    name: 'Vladimir Panchenko',
    url: 'https://dmarket.com/',
    info: [
      'Video game and technology entrepreneur with over 15 years of experience',
      'Building the future of the in-game items industry that covers the needs of 2.4 billion gamers worldwide',
    ],
  },
] as AmbassadorType[];

const Ambassadors = () => {
  const hideOnDesktop = data.length % 4 === 0;

  return (
    <div className="font-rlight desktop:py-120px tablet:py-[96px] mobile:py-60px">
      <Blurb header="Ambassadors" classNames="break-all" />
      <div className="flex desktop:flex-row tablet:flex-row mobile:flex-col justify-between desktop:mt-40px tablet:mt-40px mobile:mt-32px gap-48px">
        <div
          className={`grid desktop:grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-1 flex-wrap gap-48px`}
        >
          {data.map((datum) => (
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
          <div
            className={`mobile:hidden tablet:flex ${
              !hideOnDesktop ? '' : 'desktop:hidden'
            } self-center desktop:col-start-4 justify-end`}
          >
            <img
              src="/img/dots-ambassadors.svg"
              className="w-[248px] h-96px mt-auto"
              alt="dots"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ambassadors;
