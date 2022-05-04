import React, { useEffect, useMemo, useState } from 'react';
import { NftDetails, PrevNextRecord } from '@components/nft-details/NftDetails';
import { EventType } from '@sections/types';
import { useRouter } from 'next/router';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import { getUrls } from '@sections/Warline/WarlineUrls';
import WarlineData from '@sections/Warline/WarlineData';

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

export const TokenDetail: React.FC = () => {
  const router = useRouter();
  const id: string | undefined = router.query.id
    ? (router.query.id as string)
    : undefined;
  const { provider, viewNFTs, initProvider } = useWeb3Modal();

  const [NFTs, setNFTs] = useState<Array<any>>([]);
  const [signerAddress, setSignerAddress] = useState<string>('');

  const itemEvents = useMemo(() => {
    return NFTs.length ? WarlineData.flatMap((data) => data.events) : undefined;
  }, [NFTs]);
  const itemEvent = useMemo(() => {
    return itemEvents?.length && id !== undefined
      ? itemEvents.find(
          // @ts-ignore
          (event) => id === event.Tokenid,
        )
      : undefined;
  }, [itemEvents, id]);

  useEffect(() => {
    if (provider === undefined) {
      initProvider();
    }
  }, []);

  useEffect(() => {
    const getAddress = async () => {
      if (provider !== undefined) {
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setSignerAddress(address);
      } else {
        setSignerAddress('');
      }
    };
    getAddress();
  }, [provider]);

  useEffect(() => {
    const fetchMyNFTs = async () => {
      const NFTs = await viewNFTs(signerAddress);

      setNFTs(NFTs);
    };
    if (signerAddress) {
      fetchMyNFTs();
    }
  }, [signerAddress]);

  return itemEvent && itemEvents && id ? (
    <TokenDetailItem event={itemEvent} allEvents={itemEvents} id={id} />
  ) : (
    <div>Token not found</div>
  );
};

const getTitle = (event: EventType) => `Day ${event.DayNo}, ${event.Time}`;
const getImageSources = (event: EventType) => {
  const randomSrc = rand_imgs[parseInt(event.Tokenid, 10) % 8] as string;
  return getUrls(event.Tokenid, event.ImageType, randomSrc as string);
};

const TokenDetailItem: React.FC<{
  id: string;
  event: EventType;
  allEvents: EventType[];
}> = ({ event, allEvents, id }) => {
  const imageSources = useMemo(() => getImageSources(event), [event]);
  const prevEventData = useMemo(() => {
    const itemIndex = allEvents.indexOf(event);

    if (itemIndex > 0) {
      const event = allEvents[itemIndex - 1];

      if (event) {
        return {
          imageSources: getImageSources(event),
          title: getTitle(event),
          path: `/tokens/${event.Tokenid}`,
        };
      }
    }

    return undefined;
  }, [allEvents, event]);

  const nextEventData = useMemo<PrevNextRecord | undefined>(() => {
    const itemIndex = allEvents.indexOf(event);

    if (itemIndex !== -1 && itemIndex < allEvents.length - 1) {
      const event = allEvents[itemIndex + 1];

      if (event) {
        return {
          imageSources: getImageSources(event),
          title: getTitle(event),
          path: `/tokens/${event.Tokenid}`,
        };
      }
    }

    return undefined;
  }, [allEvents, event]);

  return (
    <>
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
        imageSources={imageSources}
        nextRecord={nextEventData}
        prevRecord={prevEventData}
        linkBack="/tokens"
        linkBackText="My NFTs"
      />
    </>
  );
};
