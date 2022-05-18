import React from 'react';
import { useAppRouter } from '@hooks/useAppRouter';
import ScaledImage from '@components/ScaledImage';
import { IMG_STORAGE } from '@sections/Constants';

type ContentChapterProps = {};

const ContentChapter = ({}: ContentChapterProps) => {
  const { push } = useAppRouter();

  const handleCardClick = (route: string) => () => push(route);

  return (
    <div className="flex flex-wrap justify-center -mx-24px desktop:mb-120px tablet:mb-100px mobile:mb-60px">
      <div className="tablet:w-1/2 mobile:w-full flex flex-col px-24px">
        <div
          className="hover:cursor-pointer h-full"
          onClick={handleCardClick('/warline')}
        >
          <div className="border-4 border-carbon border-solid flex-1 flex flex-col text-carbon h-full">
            <div className="desktop:p-48px tablet:py-48px tablet:px-36px mobile:py-20px mobile:px-24px flex-1 flex flex-col">
              <h1 className="tablet:text-32px mobile:text-27px font-rblack">
                Warline
              </h1>
              <p className="tablet:text-16px mobile:text-14px font-normal leading-150% font-rnarrow tablet:mt-24px mobile:mt-10px tracking-wider">
                A timeline-based set of NFT art pieces that tells how the war
                unfolds
              </p>
            </div>
            <div className="flex flex-wrap border-t-4 border-carbon border-solid ">
              <ScaledImage
                alt="Dots"
                src={`${IMG_STORAGE}/img/warline-animation.gif`}
                postLoad={true}
                breakpoints={[
                  {
                    lowerBound: 'tablet',
                    ratio: 0.5,
                  },
                ]}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="tablet:w-1/2 mobile:w-full mt-30px tablet:mt-0 flex flex-col px-24px">
        <div
          className="hover:cursor-pointer"
          onClick={handleCardClick('/auction/collection/avatars')}
        >
          <div className="border-4 border-carbon border-solid  flex-1 flex flex-col">
            <div className="desktop:p-48px tablet:py-48px tablet:px-36px mobile:py-20px mobile:px-24px flex-1 flex flex-col text-white bg-carbon">
              <h1 className="tablet:text-32px mobile:text-27px font-rblack">
                Avatars for Ukraine
              </h1>
              <p className="tablet:text-16px mobile:text-14px font-normal leading-150% font-rnarrow tablet:mt-24px mobile:mt-10px tracking-wider">
                A charity collection of the iconic digital art created in
                response to the largest war since WWII
              </p>
            </div>
            <div className="flex flex-wrap  border-t-4 border-carbon border-solid ">
              <ScaledImage
                src={`${IMG_STORAGE}/img/auction.gif`}
                postLoad={true}
                alt="Auction"
                className="w-full"
                breakpoints={[
                  {
                    lowerBound: 'tablet',
                    ratio: 0.5,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentChapter;
