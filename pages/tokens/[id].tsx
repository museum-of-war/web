import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import type { NextPage } from 'next';
import { NftDetails, PrevNextRecord } from '@components/nft-details/NftDetails';
import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import WarlineData from '@sections/Warline/WarlineData';
import { EventType } from '@sections/types';
import { getUrls } from '@sections/Warline/WarlineUrls';
import { truncateAddress } from '@sections/utils';

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

const getTitle = (event: EventType) => `Day ${event.DayNo}, ${event.Time}`;

const getImageSources = (event?: EventType) => {
  const randomSrc = rand_imgs[
    parseInt(event?.Tokenid ?? '0', 10) % 8
  ] as string;
  return event
    ? getUrls(event.Tokenid, event.ImageType, randomSrc as string)
    : {
        previewSrc: randomSrc,
        originalSrc: randomSrc,
        animationSrc: randomSrc,
        isAnimation: false,
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

  useEffect(() => {
    const fetchMyNFTs = async () => {
      if (!props.signerAddress) await props.handleConnect();
      const NFTs = await viewNFTs(props.signerAddress);

      setNFTs(NFTs);
    };

    fetchMyNFTs();
  }, [props, viewNFTs]);

  const index = useMemo(() => {
    return parseInt(id ?? '0', 10);
  }, [id]);

  const allEvents = useMemo(() => {
    return NFTs.length ? WarlineData.flatMap((data) => data.events) : [];
  }, [NFTs]);

  const event = useMemo(() => {
    const nftNumber = NFTs[index]?.metadata?.item_number;
    return allEvents.find((event) => event.Tokenid == nftNumber);
  }, [index, NFTs, allEvents]);

  const editionInfo = useMemo(() => {
    const edition = NFTs[index]?.metadata?.attributes?.find(
      (attr) => attr.trait_type === 'Edition',
    );
    return edition
      ? `${edition.value} of ${edition.max_value ?? edition.value}`
      : '';
  }, [NFTs, index]);

  const imageSources = React.useMemo(() => {
    return getImageSources(event);
  }, [event]);

  const openSeaLink = React.useMemo(() => {
    const address = NFTs[index]?.contract.address;
    const strTokenId = NFTs[index]?.id?.tokenId ?? '0';
    const tokenId = strTokenId.startsWith('0x')
      ? parseInt(strTokenId, 16)
      : parseInt(strTokenId, 10);
    return `https://opensea.io/assets/${address}/${tokenId}`;
  }, [NFTs, index]);

  const prevEventData = React.useMemo(() => {
    const eventIndex = index - 1;
    if (eventIndex >= 0) {
      const nftNumber = NFTs[eventIndex]?.metadata?.item_number;
      const event = allEvents.find((event) => event.Tokenid == nftNumber);
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
      const event = allEvents.find((event) => event.Tokenid == nftNumber);
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
    <>
      <PageHead title="My NFTs - Meta History: Museum of War" />
      {event ? (
        <NftDetails
          id={event.Tokenid}
          title={getTitle(event)}
          descriptionEnglish={event.DescriptionEnglish}
          descriptionUkrainian={event.DescriptionUkrainian}
          twitterUrl={event.TwitterUrl}
          twitterUsername={event.TwitterUsername}
          headline={event.Headline}
          artistUrl={event.ArtistLink}
          artistName={event.ArtistName}
          editionInfo={editionInfo}
          owner={truncateAddress(props.signerAddress, 13)}
          openSeaLink={openSeaLink}
          imageSources={imageSources}
          nextRecord={nextEventData}
          prevRecord={prevEventData}
          linkBack="/tokens"
          linkBackText="My NFTs"
        />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default TokenDetailPage;
