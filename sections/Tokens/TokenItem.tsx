import { AuctionItemType } from '@sections/types';
import React, { useMemo, useState } from 'react';
import { getUrls } from '@sections/Warline/WarlineUrls';
import WarlineData from '@sections/Warline/WarlineData';
import { useAppRouter } from '@hooks/useAppRouter';
import AuctionData from '@sections/Auction/AuctionData';
import ScaledImage from '@components/ScaledImage';
import AuctionCollectionData from '@sections/Auction/AuctionCollectionData';
import Button from '../../components/Button';
import { Nft } from '@alch/alchemy-web3/dist/esm/alchemy-apis/types';

type TokenItemProps = {
  tokenData: Nft | Nft[];
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

  const { push } = useAppRouter();

  type Attribute = {
    display_type: string;
    max_value?: any;
    trait_type: string;
    value: any;
  };

  const grouped = useMemo(() => Array.isArray(tokenData), [tokenData]);

  const nft = useMemo(
    () => (Array.isArray(tokenData) ? tokenData[0]! : tokenData),
    [tokenData],
  );

  const alt = useMemo(() => {
    return nft.metadata?.name ?? 'Unknown';
  }, [nft]);
  const editionInfo = useMemo(() => {
    const edition = (nft.metadata?.attributes as Attribute[])?.find(
      (attr) => attr.trait_type === 'Edition',
    );
    return edition
      ? `${edition.value} of ${edition.max_value ?? edition.value}`
      : '1 of 1';
  }, [nft]);
  const itemEvent = useMemo(() => {
    return (
      WarlineData.flatMap((data) => data.events).find(
        (event) => event.Tokenid === nft.metadata?.item_number,
      ) ??
      AuctionData.find(
        (data) =>
          AuctionCollectionData[data.category].contractAddress.toLowerCase() ===
            (nft as any).contract.address &&
          data.tokenId === parseInt(nft.id.tokenId),
      ) ??
      ({
        name: nft.title,
        descriptionEnglish: nft.description,
        imageSrc: nft.metadata?.image,
      } as AuctionItemType)
    );
  }, [nft]);

  const renderImage = (className: string, tokenId: string) => {
    const randomSrc = rand_imgs[1 % 8] as string;
    const { push } = useAppRouter();
    const { originalSrc, previewSrc, animationSrc, isAnimation } =
      itemEvent && 'ImageType' in itemEvent
        ? getUrls(tokenId, itemEvent?.ImageType, randomSrc as string)
        : {
            originalSrc: (itemEvent as AuctionItemType)?.imageSrc,
            previewSrc: (itemEvent as AuctionItemType)?.imageSrc,
            animationSrc: (itemEvent as AuctionItemType)?.animationSrc,
            isAnimation: !!(itemEvent as AuctionItemType)?.animationSrc,
          };

    return (
      <>
        <ScaledImage
          alt={alt}
          onClick={() => push(`/tokens/${index}`)}
          src={isAnimation ? previewSrc : originalSrc}
          postLoad={isAnimation ? animationSrc : false}
          className={className}
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
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
      </>
    );
  };

  return (
    <div className="desktop:mt-50px tablet:mt-30px mobile:mt-30px">
      <div className="relative">
        {renderImage(
          'desktop:h-[240px] tablet:h-[288px] mobile:h-[270px] desktop:max-w-[240px] tablet:max-w-[288px] mobile:max-w-[270px] m-auto cursor-pointer object-contain',
          nft.metadata?.item_number,
        )}
        {grouped && (
          <>
            <Button
              mode="secondary"
              label="Upgrade Now"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-24px py-32px"
              onClick={() =>
                push(
                  `/upgrade-your-nft/${nft?.metadata?.item_number}/${
                    nft?.metadata?.level ?? 0
                  }`,
                )
              }
              round={true}
            />
            <div className="before:absolute before:content-[''] before:border-solid before:border-carbon before:border-b-8 before:border-r-8 before:w-8px before:h-90% before:-bottom-7 before:-right-7 after:absolute after:content-[''] after:border-solid after:border-carbon after:border-b-8 after:border-r-8 after:w-90% after:h-8px after:-bottom-7 after:-right-7" />
          </>
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
          {nft.metadata?.name ?? 'Unknown'}
        </p>
        <p className="font-rlight mobile:text-12px tablet:text-14px pb-5px">
          {grouped
            ? `x${(tokenData as []).length}`
            : +nft.balance > 1
            ? `x${nft.balance}`
            : editionInfo}
        </p>
      </div>
    </div>
  );
};

export default TokenItem;
