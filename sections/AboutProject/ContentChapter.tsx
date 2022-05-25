import React from 'react';
import { useAppRouter } from '@hooks/useAppRouter';
import ScaledImage from '@components/ScaledImage';
import { IMG_STORAGE } from '@sections/Constants';

type ContentChapterProps = {};

const ContentChapter = ({}: ContentChapterProps) => {
  const { push } = useAppRouter();

  const handleCardClick = (route: string) => () => push(route);

  return (
    <div className="flex justify-between desktop:mb-120px tablet:mb-100px mobile:mb-60px desktop:flex-row tablet:flex-row mobile:flex-col">
      <div className="desktop:w-[544px] tablet:w-45% mobile:w-full flex">
        <div
          className="hover:cursor-pointer "
          onClick={handleCardClick('/warline')}
        >
          <div className="border-4 border-carbon border-solid flex-1 flex flex-col text-carbon h-full">
            <div className="desktop:p-48px tablet:py-48px tablet:px-36px mobile:py-20px mobile:px-24px flex-1 flex flex-col">
              <h2 className="tablet:text-32px mobile:text-27px font-rblack">
                Warline
              </h2>
              <p className="tablet:text-16px mobile:text-14px font-normal leading-150% font-rnarrow tablet:mt-24px mobile:mt-10px tracking-wider">
                A timeline-based set of NFT art pieces that tells how the war
                unfolds
              </p>
            </div>
            <div className="flex flex-wrap border-t-4 border-carbon border-solid ">
              <ScaledImage
                alt="Warline"
                src={`${IMG_STORAGE}/banners/warline-animation.gif`}
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
      <div className="desktop:w-[544px] tablet:w-45% mobile:w-full mt-30px tablet:mt-0 flex flex-col">
        <div
          className="hover:cursor-pointer"
          onClick={handleCardClick('/auction/collection/kalush')}
        >
          <div className="border-4 border-carbon border-solid flex-1 flex flex-col h-full">
            <div className="desktop:p-48px tablet:py-48px tablet:px-36px mobile:py-20px mobile:px-24px flex-1 flex flex-col text-white bg-carbon">
              <h2 className="tablet:text-32px mobile:text-27px font-rblack">
                Stefania For Ukraine
              </h2>
              <p className="tablet:text-16px mobile:text-14px font-normal leading-150% font-rnarrow tablet:mt-24px mobile:mt-10px tracking-wider">
                Kalush Orchestra and Serhiy Prytula to auction the Eurovision
                Glass Mic Trophy
              </p>
            </div>
            <div className="flex flex-wrap  border-t-4 border-carbon border-solid ">
              <ScaledImage
                src={`${IMG_STORAGE}/banners/stefania.png`}
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
