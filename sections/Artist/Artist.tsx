import React, { useMemo } from 'react';
import { Parallax } from 'react-parallax';
import { useViewPort } from '@hooks/useViewport';
import { RoundLogo } from '@sections/elements';
import Blurb from '@sections/AboutProject/Blurb';
import { NavBack } from './elements';
import { ARTISTS_WITH_ARTS } from '@sections/Artists/constants';
import { IMG_STORAGE } from '@sections/constants';
import Link from 'next/link';
import ScaledImage from '@components/ScaledImage';
import { getImageSources } from '@utils/Warline/WarlineUrls';
import AuctionData from '@sections/Auction/AuctionData';

type ArtistPageProps = {
  menuOpen: boolean;
  id: string;
};
export const ArtistPage: React.FC<ArtistPageProps> = ({ menuOpen, id }) => {
  const { isMobile } = useViewPort();
  const artist = ARTISTS_WITH_ARTS.find((artist) => artist.id == id);

  if (!artist) {
    return null;
  }

  const artistCollectionData = AuctionData.filter((event) =>
    event.artist.includes(artist.name),
  );

  const coverHeight = useMemo(() => (isMobile ? 180 : 408), [isMobile]);

  return (
    <div className="desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px desktop:mt-[-48px] tablet:mt-[-48px] mobile:mt-[-40px]">
      {artist?.arts[0] && (
        <div className="absolute left-0 top-100px z-0 right-0">
          {artist.arts[0].ImageType?.includes('.mp4') ? (
            <video
              style={{ height: coverHeight, width: '100%', objectFit: 'cover' }}
              src={`${IMG_STORAGE}/original/${artist.arts[0].ImageType}`}
            />
          ) : (
            <Parallax
              strength={isMobile ? 0 : 200}
              style={{ height: coverHeight, width: '100%' }}
              bgImage={`${IMG_STORAGE}/original/${artist.arts[0].ImageType}`}
              bgImageAlt={`${artist.name} Cover Image`}
              bgImageStyle={{ height: coverHeight, objectFit: 'cover' }}
            />
          )}
        </div>
      )}
      {!artist?.arts[0] && artistCollectionData[0] && (
        <div className="absolute left-0 top-100px z-0 right-0">
          <Parallax
            strength={isMobile ? 0 : 200}
            style={{ height: coverHeight, width: '100%' }}
            bgImage={artistCollectionData[0].imageSrc}
            bgImageAlt={`${artist.name} Cover Image`}
            bgImageStyle={{ height: coverHeight, objectFit: 'cover' }}
          />
        </div>
      )}
      <div
        className="relative"
        style={{
          marginTop: '-8%',
          paddingTop: menuOpen ? coverHeight - 4 : coverHeight,
        }}
      >
        <div
          className="absolute h-120px bg-white m-auto items-center
              mx-auto min-h-screen mobile:hidden tablet:flex desktop:flex left-[-72px] right-[-72px] px-72px"
          style={{
            marginTop: -60,
          }}
        >
          <RoundLogo
            size={120}
            src={`${IMG_STORAGE}/avatars/${artist.avatar || 'placeholder.png'}${
              artist.avatar?.includes('.webp') ? '' : '?w=120&h=120'
            }`}
          />
          <NavBack />
        </div>
        <div className="h-100px flex bg-white items-center desktop:hidden tablet:hidden relative">
          <RoundLogo
            size={80}
            src={`${IMG_STORAGE}/avatars/${
              artist.avatar || 'placeholder.png'
            }?w=80&h=80`}
          />
          <NavBack />
        </div>
        <Blurb
          header={artist.name}
          classNames="desktop:pt-60px tablet:pt-60px mobile:pt-0"
          english={artist.descriptionEn}
          ukrainian={artist.descriptionUa}
          oneColumn={!artist.descriptionEn || !artist.descriptionUa}
          rightContent={
            <span
              className="desktop:leading-[48px] desktop:text-14px tablet:leading-[48px] tablet:text-14px
             mobile:leading-[40px] mobile:text-12px font-rlight lowercase ml-auto whitespace-nowrap mt-auto"
            >
              {artist.arts?.length} art{artist.arts?.length === 1 ? '' : 's'}
            </span>
          }
        />
        <div className="h-5px w-100%" />
        <div className="desktop:py-40px tablet:pb-0 tablet:pt-40px mobile:pb-0 mobile:pt-20px relative tablet:flex desktop:flex-row tablet:flex-row mobile:flex-col font-rnarrow mobile:leading-20px tablet:leading-24px mobile:text-14px tablet:text-16px flex-wrap">
          {artist.arts.map((art) => {
            const title = `Day ${art.DayNo}, ${art.Time}`;
            const imageSources = getImageSources(art);

            return (
              <Link key={art.Tokenid} href={`/warline/${art.Tokenid}`} passHref>
                <a className="desktop:w-1/4 tablet:w-1/2 mobile:w-full flex flex-col p-14px border-4 border-transparent hover:border-carbon">
                  <ScaledImage
                    alt={title}
                    title={title}
                    src={
                      imageSources.isAnimation
                        ? imageSources.previewSrc
                        : imageSources.originalSrc
                    }
                    postLoad={
                      imageSources.isAnimation
                        ? imageSources.animationSrc
                        : false
                    }
                    className="cursor-pointer object-contain aspect-square transition-transform hover:scale-[101%]"
                    containerClassName="flex-1"
                    breakpoints={[
                      {
                        lowerBound: 'tablet',
                        ratio: 0.5,
                      },
                      {
                        lowerBound: 'desktop',
                        ratio: 0.25,
                      },
                    ]}
                  />
                  <div className="h-[44px] flex items-center">
                    <span
                      className="font-rblack text-[14px] ml-[8px] h-full leading-[44px] group-hover:border-b-4 group-hover:border-b-carbon transition-[border-width] line-clamp-1"
                      title={title}
                    >
                      {title}
                    </span>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
