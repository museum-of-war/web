import React from 'react';
import ScaledImage from '@components/ScaledImage';
import { IMG_STORAGE } from '@sections/constants';
import Link from 'next/link';
import * as VesaZenaidaConstants from '@sections/Collections/VesaZenaida/data';
import ReactGA from 'react-ga4';

type ContentChapterProps = {};

const ContentChapter = ({}: ContentChapterProps) => (
  <div className="mb-60px tablet:mb-100px desktop:mb-120px grid grid-cols-1 new_md:grid-cols-2 gap-30px new_md:gap-48px">
    <Link href="/collection/warline" passHref>
      <a className="cursor-pointer">
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
      </a>
    </Link>
    <Link href="/auction/collection/vesa-and-zinaida" passHref>
      <a
        className="cursor-pointer"
        onClick={() => {
          ReactGA.send({
            category: 'auction',
            action: 'open',
            label: 'vesa_zenaida',
          });
        }}
      >
        <div className="border-4 border-carbon border-solid flex-1 flex flex-col h-full">
          <div className="desktop:p-48px tablet:py-48px tablet:px-36px mobile:py-20px mobile:px-24px flex-1 flex flex-col text-white bg-carbon">
            <h2 className="tablet:text-32px mobile:text-27px font-rblack">
              Charity fine art auction
            </h2>
            <p className="tablet:text-16px mobile:text-14px font-normal leading-150% font-rnarrow tablet:mt-24px mobile:mt-10px tracking-wider">
              World-famous artists donated their artworks for tokenization and
              selling
            </p>
          </div>
          <div className="flex flex-wrap border-t-4 border-carbon border-solid ">
            <img
              src="/img/posters/vesa-zinaida.jpg"
              alt={VesaZenaidaConstants.auctionName}
              className="w-full"
            />
          </div>
        </div>
      </a>
    </Link>
  </div>
);

export default ContentChapter;
