import React from 'react';
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

type ArtistPageProps = {
  menuOpen: boolean;
  id: string;
};
export const ArtistPage: React.FC<ArtistPageProps> = ({ menuOpen, id }) => {
  const { isMobile } = useViewPort();
  const artist = ARTISTS_WITH_ARTS.find((artist) => artist.id === +(id || 0));

  if (!artist || !artist.arts[0]) {
    return null;
  }

  return (
    <div className="desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px desktop:mt-[-48px] tablet:mt-[-48px] mobile:mt-[-40px]">
      <div className="absolute left-0 top-100px z-0 right-0">
        {artist.arts[0].ImageType?.includes('.mp4') ? (
          <video
            style={{ height: 456, width: '100%', objectFit: 'cover' }}
            src={`${IMG_STORAGE}/original/${artist.arts[0].ImageType}`}
          />
        ) : (
          <Parallax
            strength={isMobile ? 0 : 200}
            style={{ height: 456, width: '100%' }}
            bgImage={`${IMG_STORAGE}/original/${artist.arts[0].ImageType}`}
            bgImageAlt={`${artist.name} Cover Image`}
            bgImageStyle={{ height: 456, objectFit: 'cover' }}
          />
        )}
      </div>
      <div
        className="relative"
        style={{ marginTop: '-8%', paddingTop: menuOpen ? 452 : 456 }}
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
            src={`${IMG_STORAGE}/avatars/${artist.avatar}?w=256&h=256`}
          />
          <NavBack />
        </div>
        <div className="h-100px flex bg-white items-center desktop:hidden tablet:hidden relative">
          <RoundLogo size={80} src="/img/artist.png" />
          {/* todo @current different back logic */}
          <NavBack />
        </div>
        <Blurb
          header={artist.name}
          classNames="desktop:pt-60px tablet:pt-60px mobile:pt-0"
          english={artist.descriptionEn}
          ukrainian={artist.descriptionUa}
          oneColumn={!artist.descriptionEn || !artist.descriptionUa}
          rightContent={
            <div
              className="desktop:leading-[48px] desktop:text-14px tablet:leading-[48px] tablet:text-14px
             mobile:leading-[40px] mobile:text-12px font-rlight lowercase ml-auto whitespace-nowrap mt-auto"
            >
              {artist.arts?.length} art{artist.arts?.length === 1 ? '' : 's'}
            </div>
          }
        />
        <div className="h-5px w-100%" />
        <div className="desktop:py-40px tablet:pb-0 tablet:pt-40px mobile:pb-0 mobile:pt-20px relative tablet:flex desktop:flex-row tablet:flex-row mobile:flex-col font-rnarrow mobile:leading-20px tablet:leading-24px mobile:text-14px tablet:text-16px tablet:justify-between flex-wrap">
          {artist.arts.map((art) => {
            const title = `Day ${art.DayNo}, ${art.Time}`;
            const imageSources = getImageSources(art);

            return (
              <Link key={art.Tokenid} href={`/warline/${art.Tokenid}`} passHref>
                <div
                  className={`desktop:w-1/4 tablet:w-1/2 mobile:w-full flex flex-col p-14px border-4 border-transparent hover:border-carbon`}
                >
                  <a>
                    <div role="button">
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
                    </div>
                  </a>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
