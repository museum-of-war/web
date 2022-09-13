import React, { useState } from 'react';
import Blurb from '@sections/AboutProject/Blurb';
import { IMG_STORAGE } from '@sections/constants';
import { ARTISTS_WITH_ARTS } from './constants';
import Link from 'next/link';

export const Artists: React.FC = () => {
  const [filter, setFilter] = useState('');

  return (
    <>
      <div className="relative desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px">
        <Blurb header="Artists" />
        <div className="relative desktop:mt-20px tablet:mt-20px mobile:mt-12px">
          <input
            className="w-full font-rblack text-16px bg-beige border-4 box-border focus:border-black rounded-[24px]
             leading-[40px] pl-60px transition-all duration-1500
             outline-none search-input"
            placeholder="Search by name"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
          />
          <img
            src="/img/search.svg"
            alt="search"
            className="absolute top-0 bottom-0 m-auto left-[24px]"
          />
        </div>
        <div className="flex flex-row flex-wrap">
          {ARTISTS_WITH_ARTS.filter((artist) =>
            artist.name.toLowerCase().includes(filter.toLowerCase()),
          ).map((artist) => (
            <div
              key={artist.id}
              className="flex flex-col desktop:basis-1/4 tablet:basis-1/2 mobile:basis-full border-4 border-transparent
                 hover:border-black p-[8px] cursor-pointer desktop:mt-[60px] tablet:mt-[60px] mobile:mt-[40px]"
            >
              <Link href={`/artists/${artist.id}`} passHref>
                <a>
                  <img
                    src={`${IMG_STORAGE}/avatars/${artist.avatar}?w=128&h=128`}
                    alt={`${artist.name} avatar`}
                    className="w-96px h-96px rounded-[48px] object-cover"
                  />
                  <div className="desktop:mt-24px tablet:mt-24px mobile:mt-20px font-rblack">
                    {artist.name}
                  </div>
                  <div className="font-rlight desktop:leading-[36px] desktop:leading-[36px] mobile:leading-[40px] mb-24px">
                    {artist.arts?.length} art
                    {artist.arts?.length === 1 ? '' : 's'}
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
