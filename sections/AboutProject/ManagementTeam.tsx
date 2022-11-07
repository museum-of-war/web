import React from 'react';
import Blurb from '@sections/AboutProject/Blurb';
import { ManagementMemberType } from '@sections/types';

const data: ManagementMemberType[] = [
  {
    name: 'VK',
    title: 'Ceo&Founder',
    avatarSrc: '/img/avatars/vk.webp',
    cta: {
      label: 'Contact',
      url: 'mailto:vk@metahistory.gallery',
    },
  },
  {
    name: 'Taras Gorbul',
    title: 'managing partner',
    avatarSrc: '/img/avatars/Taras_Gorbul.webp',
    cta: {
      label: 'About',
      url: 'https://superheroes.ua/',
    },
  },
  {
    name: 'Michael Chobanian',
    title: 'managing partner',
    avatarSrc: '/img/avatars/Michael_Chobanian.webp',
    cta: {
      label: 'About',
      url: 'https://kuna.family/',
    },
  },
];

export const ManagementTeam = () => {
  return (
    <>
      <Blurb header="Management team" classNames="w-full break-all" />
      <div className="mobile:mt-32px tablet:mt-40px font-rlight grid mobile:grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-4 flex-wrap gap-48px">
        {data.map((item) => (
          <div key={item.name}>
            <div className="flex flex-col">
              <img
                className="w-96px tablet:w-120px rounded-full"
                alt={item.name}
                src={item.avatarSrc}
              />
              <div className="mt-8px text-20px leading-24px">{item.name}</div>
              <p className="mt-4 tablet:text-16px tablet:leading-24px mobile:text-14px mobile:leading-20px font-rnarrow">
                {item.title}
              </p>
              <a
                href={item.cta.url}
                className="mt-16px font-rblack self-start inline-flex flex-row cursor-pointer text-14px desktop:leading-48px tablet:leading-48px mobile:leading-40px border-b-4 hover:border-b-4 hover:border-solid border-transparent hover:border-carbon"
                target="_blank"
                rel="noopener noreferrer"
              >
                {`${item.cta.label} `}
                <img src="/img/link.svg" alt="link" className="ml-12px" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
