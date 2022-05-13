import { AuctionItemType, TokenDataType } from '@sections/types';
import React, { useMemo, useState } from 'react';
import { getUrls } from '@sections/Warline/WarlineUrls';
import WarlineData from '@sections/Warline/WarlineData';
import { useAppRouter } from '@hooks/useAppRouter';
import AuctionData from '@sections/Auction/AuctionData';

type TokenItemProps = {
  tokenData: TokenDataType;
  index: number;
};

const rand_imgs: string[] = [
  'img/dots-1.png',
  'img/dots-2.png',
  'img/dots-3.png',
  'img/dots-4.png',
  'img/dots-5.png',
  'img/dots-6.png',
  'img/dots-7.png',
  'img/dots-8.png',
];

const TokenItem = ({ tokenData, index }: TokenItemProps) => {
  const [hovered, setHovered] = useState(false);

  type Attribute = {
    display_type: string;
    max_value?: any;
    trait_type: string;
    value: any;
  };

  const alt = useMemo(() => {
    return tokenData.metadata.name ?? 'Unknown';
  }, [tokenData]);
  const editionInfo = useMemo(() => {
    const edition = (tokenData.metadata?.attributes as Attribute[])?.find(
      (attr) => attr.trait_type === 'Edition',
    );
    return edition
      ? `${edition.value} of ${edition.max_value ?? edition.value}`
      : '1 of 1';
  }, [tokenData]);
  const itemEvent = useMemo(() => {
    return (
      WarlineData.flatMap((data) => data.events).find(
        (event) => event.Tokenid === tokenData.metadata?.item_number,
      ) ?? AuctionData.find((data) => data.name === tokenData.metadata.name)
    );
  }, [tokenData]);

  const renderImage = (className: string, tokenId: string) => {
    const randomSrc = rand_imgs[1 % 8] as string;
    const { push } = useAppRouter();
    const { previewSrc, animationSrc, isAnimation } =
      itemEvent && 'ImageType' in itemEvent
        ? getUrls(tokenId, itemEvent?.ImageType, randomSrc as string)
        : {
            previewSrc: (itemEvent as AuctionItemType)?.imageSrc,
            animationSrc: (itemEvent as AuctionItemType)?.animationSrc,
            isAnimation: !!(itemEvent as AuctionItemType)?.animationSrc,
          };

    return (
      <>
        <img
          alt={alt}
          onClick={() => push(`/tokens/${index}`)}
          src={previewSrc}
          className={className}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = randomSrc;
          }}
          onLoad={({ currentTarget }) => {
            if (isAnimation && currentTarget.src.endsWith(previewSrc)) {
              currentTarget.src = animationSrc ?? '';
            }
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
      </>
    );
  };

  return (
    <div className="desktop:mt-50px tablet:mt-30px mobile:mt-30px">
      <div>
        {renderImage(
          'desktop:h-[240px] tablet:h-[288px] mobile:h-[270px] desktop:max-w-[240px] tablet:max-w-[288px] mobile:max-w-[270px] m-auto cursor-pointer object-contain',
          tokenData.metadata.item_number,
        )}
      </div>
      <div
        style={{ lineHeight: '48px' }}
        className="flex flex-row mt-10px align-center justify-between items-center whitespace-nowrap"
      >
        <p
          className={`font-rblack text-20px pb-5px border-b-4 overflow-hidden text-ellipsis ${
            hovered ? 'border-carbon' : 'border-transparent'
          }`}
        >
          {tokenData.metadata.name ?? 'Unknown'}
        </p>
        <p className="font-rlight mobile:text-12px tablet:text-14px pb-5px">
          {editionInfo}
        </p>
      </div>
    </div>
  );
};

export default TokenItem;
