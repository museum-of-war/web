import React from 'react';
import ScaledImage from '@components/ScaledImage';
import { IMG_STORAGE } from '@sections/constants';
import Link from 'next/link';

type ContentChapterProps = {};

const ContentChapter = ({}: ContentChapterProps) => (
  <div className="flex justify-between desktop:mb-120px tablet:mb-100px mobile:mb-60px desktop:flex-row tablet:flex-row mobile:flex-col">
    <div className="desktop:w-[544px] tablet:w-45% mobile:w-full flex">
      <Link href="/collection/warline" passHref>
        <a>
          <div className="hover:cursor-pointer ">
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
                  src={`${IMG_STORAGE}/posters/warline-animation.gif`}
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
        </a>
      </Link>
    </div>
    <div className="desktop:w-[544px] tablet:w-45% mobile:w-full mt-30px tablet:mt-0 flex flex-col">
      <Link href="/auction/collection/revival" passHref>
        <a>
          <div className="hover:cursor-pointer">
            <div className="border-4 border-carbon border-solid flex-1 flex flex-col h-full">
              <div className="desktop:p-48px tablet:py-48px tablet:px-36px mobile:py-20px mobile:px-24px flex-1 flex flex-col text-white bg-carbon">
                <h2 className="tablet:text-32px mobile:text-27px font-rblack">
                  The Revival Project
                </h2>
                <p className="tablet:text-16px mobile:text-14px font-normal leading-150% font-rnarrow tablet:mt-24px mobile:mt-10px tracking-wider">
                  Get thematic NFT artworks and contribute to Ukraine’s culture
                </p>
              </div>
              <div className="flex flex-wrap  border-t-4 border-carbon border-solid ">
                <ScaledImage
                  src={`${IMG_STORAGE}/posters/revival.png`}
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
        </a>
      </Link>
    </div>
  </div>
);

export default ContentChapter;
