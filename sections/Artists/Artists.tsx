import React, { useState } from 'react';
import Blurb from '@sections/AboutProject/Blurb';
import { IMG_STORAGE } from '@sections/constants';
import { ARTISTS_WITH_ARTS } from './constants';
import Link from 'next/link';
import { useViewPort } from '@hooks/useViewport';
import { ApplyAsAnArtist } from './ApplyAsAnArtist';

const Card: React.FC<{ artist: typeof ARTISTS_WITH_ARTS[number] }> = ({
  artist,
}) => (
  <div
    className="flex flex-col desktop:basis-1/4 tablet:basis-1/2 mobile:basis-full border-4 border-transparent
                 hover:border-black p-[8px] cursor-pointer desktop:mt-[60px] tablet:mt-[60px] mobile:mt-[40px]"
  >
    <Link href={`/artists/${artist.id}`} passHref>
      <a>
        <img
          src={`${IMG_STORAGE}/avatars/${
            artist.avatar || 'placeholder.png'
          }?w=128&h=128`}
          alt={`${artist.name} avatar`}
          className="w-96px h-96px rounded-[48px] object-cover"
        />
        <div className="desktop:mt-24px tablet:mt-24px mobile:mt-20px font-rblack">
          {artist.name}
        </div>
        <div className="font-rlight desktop:leading-[36px] desktop:leading-[36px] mobile:leading-[40px] mb-24px">
          {artist.amountOfWorks} art
          {artist.amountOfWorks === 1 ? '' : 's'}
        </div>
      </a>
    </Link>
  </div>
);
export const Artists: React.FC = () => {
  const [filter, setFilter] = useState('');
  const { isDesktop } = useViewPort();

  const artists = ARTISTS_WITH_ARTS.filter((artist) =>
    artist.name.toLowerCase().includes(filter.toLowerCase()),
  );
  const slice = isDesktop ? 6 : 3;

  return (
    <div className="relative desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px pb-36px">
      <Blurb header="Artists" />
      <div className="relative desktop:mt-20px tablet:mt-20px mobile:mt-12px">
        <input
          className="w-full font-rblack text-16px bg-beige border-4 box-border focus:border-black rounded-[24px]
             leading-[40px] px-60px transition-all duration-1500
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
        {filter.length > 0 ? (
          <img
            onClick={() => setFilter('')}
            src="/img/clear.svg"
            alt="clear"
            className="absolute top-0 bottom-0 m-auto right-[24px] cursor-pointer"
          />
        ) : null}
      </div>
      <div className="flex flex-row flex-wrap">
        {artists.slice(0, slice).map((artist) => (
          <Card key={artist.id} artist={artist} />
        ))}
        <ApplyAsAnArtist />
        {artists.slice(slice).map((artist) => (
          <Card key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
};
