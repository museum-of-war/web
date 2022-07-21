import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import type { NextPage } from 'next';
import { NftDetails, PrevNextRecord } from '@components/nft-details/NftDetails';
import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import WarlineData from '@pages/collections/Warline/WarlineData';
import { AuctionItemType, EventType } from '@sections/types';
import { getUrls } from '@pages/collections/Warline/WarlineUrls';
import { truncateAddress } from '@sections/utils';
import AuctionData from '@sections/Auction/AuctionData';
import { useIsMounted } from '@hooks/useIsMounted';
import AuctionCollectionData from '@sections/Auction/AuctionCollectionData';
import { groupBy } from '@sections/Tokens/Tokens';
import { Nft } from '@alch/alchemy-web3/dist/esm/alchemy-apis/types';

const rand_imgs: string[] = [
  '/img/dots-1.png',
  '/img/dots-2.png',
  '/img/dots-3.png',
  '/img/dots-4.png',
  '/img/dots-5.png',
  '/img/dots-6.png',
  '/img/dots-7.png',
  '/img/dots-8.png',
];

const getLevel = (nft: Nft) => {
  const levelAttr = nft.metadata?.attributes?.find(
    (attr) => attr.trait_type === 'Level',
  );
  return (levelAttr ? levelAttr.value : nft.metadata?.level) as
    | number
    | undefined;
};

const getEditionInfo = (nft: Nft) => {
  const edition = nft.metadata?.attributes?.find(
    (attr) => attr.trait_type === 'Edition',
  );
  return edition
    ? `${edition.value} of ${edition.max_value ?? edition.value}`
    : '';
};

const getOpenSeaLink = (nft: Nft) => {
  const address = nft.contract.address;
  const strTokenId = nft.id?.tokenId ?? '0';
  const tokenId = strTokenId.startsWith('0x')
    ? parseInt(strTokenId, 16)
    : parseInt(strTokenId, 10);
  return `https://opensea.io/assets/${address}/${tokenId}`;
};

const getTitle = (event: EventType | AuctionItemType) =>
  'DayNo' in event && 'Time' in event
    ? `Day ${event.DayNo}, ${event.Time}`
    : (event as AuctionItemType).name;

const getImageSources = (event?: EventType | AuctionItemType) => {
  const tokenId = event
    ? 'Tokenid' in event
      ? +event?.Tokenid
      : (event as AuctionItemType).tokenId
    : 0;
  const randomSrc = rand_imgs[tokenId % 8] as string;
  return event && 'ImageType' in event
    ? getUrls(tokenId, event.ImageType, randomSrc as string)
    : {
        previewSrc:
          (event as AuctionItemType | undefined)?.imageSrc ?? randomSrc,
        originalSrc:
          (event as AuctionItemType | undefined)?.imageSrc ?? randomSrc,
        animationSrc:
          (event as AuctionItemType | undefined)?.animationSrc ?? randomSrc,
        isAnimation: !!(event as AuctionItemType | undefined)?.animationSrc,
        randomSrc,
      };
};

const TokenDetailPage: NextPage<SharedProps> = (props) => {
  const router = useRouter();
  const id: string | undefined = router.query.id
    ? (router.query.id as string)
    : undefined;
  const { viewNFTs } = useWeb3Modal();
  const [NFTs, setNFTs] = useState<Awaited<ReturnType<typeof viewNFTs>>>([]);

  const isMounted = useIsMounted();

  useEffect(() => {
    const fetchMyNFTs = async () => {
      if (!props.signerAddress) await props.handleConnect();
      const NFTs = await viewNFTs(props.signerAddress);
      if (!isMounted.current) return;

      setNFTs(NFTs);
    };

    fetchMyNFTs();
  }, [props.signerAddress]);

  const index = useMemo(() => {
    return parseInt(id ?? '0', 10);
  }, [id]);

  const allEvents = useMemo(() => {
    return NFTs.length ? WarlineData.flatMap((data) => data.events) : [];
  }, [NFTs]);

  const nftNumber = useMemo(
    () => NFTs[index]?.metadata?.item_number,
    [NFTs, index],
  );

  const grouped = useMemo(() => {
    const withIndex = NFTs.map((nft, index) => ({ nft, index }));

    const res = groupBy(
      withIndex,
      (i) =>
        `${i.nft.contract.address}-${
          i.nft.metadata?.item_number ?? i.nft.id.tokenId
        }-${i.nft.metadata?.level ?? 0}` as string,
    );

    return (
      res[
        `${NFTs[index]?.contract.address}-${nftNumber}-${
          NFTs[index]?.metadata?.level ?? 0
        }`
      ] ?? undefined
    );
  }, [NFTs, nftNumber, index]);

  const event = useMemo(() => {
    return (
      allEvents.find((event) => event.Tokenid == nftNumber) ??
      AuctionData.find(
        (data) =>
          AuctionCollectionData[data.category].contractAddress.toLowerCase() ===
            NFTs[index]?.contract?.address &&
          data.tokenId === parseInt(NFTs[index]?.id?.tokenId ?? '0'),
      ) ??
      (NFTs[index]
        ? ({
            tokenId: parseInt(NFTs[index]?.id?.tokenId ?? '0'),
            name: NFTs[index]?.title,
            descriptionEnglish: NFTs[index]?.description,
            imageSrc: NFTs[index]?.metadata?.image,
          } as AuctionItemType)
        : undefined)
    );
  }, [nftNumber, index, NFTs, allEvents]);

  const level = useMemo(() => {
    return NFTs[index] ? getLevel(NFTs[index]!) : undefined;
  }, [NFTs, index]);

  const isERC721 = useMemo(() => {
    return NFTs[index]?.id.tokenMetadata?.tokenType?.toLowerCase() === 'erc721';
  }, [NFTs, index]);

  const editionInfo = useMemo(() => {
    return NFTs[index] ? getEditionInfo(NFTs[index]!) : '';
  }, [NFTs, index]);

  const imageSources = React.useMemo(() => {
    return getImageSources(event);
  }, [event]);

  const openSeaLink = React.useMemo(() => {
    return NFTs[index] ? getOpenSeaLink(NFTs[index]!) : '';
  }, [NFTs, index]);

  const prevEventData = React.useMemo(() => {
    const eventIndex = index - 1;
    if (eventIndex >= 0) {
      const nftNumber = NFTs[eventIndex]?.metadata?.item_number;
      const event =
        allEvents.find((event) => event.Tokenid == nftNumber) ??
        AuctionData.find(
          (data) =>
            AuctionCollectionData[
              data.category
            ].contractAddress.toLowerCase() ===
              NFTs[eventIndex]?.contract?.address &&
            data.tokenId === parseInt(NFTs[eventIndex]?.id?.tokenId ?? '0'),
        ) ??
        ({
          name: NFTs[eventIndex]?.title,
          descriptionEnglish: NFTs[eventIndex]?.description,
          imageSrc: NFTs[eventIndex]?.metadata?.image,
        } as AuctionItemType);
      if (event) {
        return {
          imageSources: getImageSources(event),
          title: getTitle(event),
          path: `/tokens/${eventIndex}`,
        };
      }
    }
    return undefined;
  }, [index, NFTs, allEvents]);

  const nextEventData = React.useMemo<PrevNextRecord | undefined>(() => {
    const eventIndex = index + 1;
    if (eventIndex < NFTs.length) {
      const nftNumber = NFTs[eventIndex]?.metadata?.item_number;
      const event =
        allEvents.find((event) => event.Tokenid == nftNumber) ??
        AuctionData.find(
          (data) =>
            AuctionCollectionData[
              data.category
            ].contractAddress.toLowerCase() ===
              NFTs[eventIndex]?.contract?.address &&
            data.tokenId === parseInt(NFTs[eventIndex]?.id?.tokenId ?? '0'),
        ) ??
        ({
          name: NFTs[eventIndex]?.title,
          descriptionEnglish: NFTs[eventIndex]?.description,
          imageSrc: NFTs[eventIndex]?.metadata?.image,
        } as AuctionItemType);
      if (event) {
        return {
          imageSources: getImageSources(event),
          title: getTitle(event),
          path: `/tokens/${eventIndex}`,
        };
      }
    }
    return undefined;
  }, [index, NFTs, allEvents]);

  return (
    <div>
      <PageHead title="My NFTs - Meta History: Museum of War" />
      {event ? (
        <NftDetails
          id={
            (event as EventType).Tokenid ?? (event as AuctionItemType).tokenId
          }
          level={level}
          title={getTitle(event)}
          descriptionEnglish={
            (event as EventType).DescriptionEnglish ??
            (event as AuctionItemType).descriptionEnglish
          }
          descriptionUkrainian={
            (event as EventType).DescriptionUkrainian ??
            (event as AuctionItemType).descriptionUkrainian
          }
          twitterUrl={(event as EventType).TwitterUrl ?? null}
          twitterUsername={(event as EventType).TwitterUsername ?? null}
          headline={(event as EventType).Headline ?? null}
          artistUrl={(event as EventType).ArtistLink ?? undefined}
          artistName={
            (event as EventType).ArtistName ?? (event as AuctionItemType).artist
          }
          editionInfo={editionInfo}
          editionsList={
            isERC721
              ? grouped?.map((g) => ({
                  edition: getEditionInfo(g.nft),
                  openSeaLink: getOpenSeaLink(g.nft),
                }))
              : undefined
          }
          owner={truncateAddress(props.signerAddress, 13)}
          openSeaLink={openSeaLink}
          imageSources={imageSources}
          nextRecord={nextEventData}
          prevRecord={prevEventData}
          linkBack="/tokens"
          linkBackText="My NFTs"
        />
      ) : (
        <div className="desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px">
          Loading...
        </div>
      )}
    </div>
  );
};

export default TokenDetailPage;
