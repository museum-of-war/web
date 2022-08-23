import { TITLES } from '@sections/Constants';
import { useAbsoluteUrl } from '@hooks/useAbsoluteUrl';
import { NftDetails, PrevNextRecord } from '@components/nft-details/NftDetails';
import PageHead from '@components/PageHead';
import { EventType } from '@sections/types';
import WarlineData from '@sections/Warline/WarlineData';
import { getUrls } from '@sections/Warline/WarlineUrls';
import React from 'react';

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

type WarlineItemProps = { id: string };

const WarlineItemPage: React.FC<WarlineItemProps> = ({ id }) => {
  const allEvents = React.useMemo(
    () => WarlineData.flatMap((data) => data.events),
    [],
  );
  const event = React.useMemo(
    () => allEvents.find((event) => event.Tokenid === id),
    [allEvents, id],
  );

  return event ? (
    <WarlineItem event={event} allEvents={allEvents} id={id} />
  ) : (
    <div>Event not found</div>
  );
};

const getImageSources = (event: EventType) => {
  const randomSrc = rand_imgs[parseInt(event.Tokenid, 10) % 8] as string;
  return getUrls(event.Tokenid, event.ImageType, randomSrc as string);
};

const getTitle = (event: EventType) => `Day ${event.DayNo}, ${event.Time}`;

const WarlineItem: React.FC<{
  event: EventType;
  allEvents: EventType[];
  id: string;
}> = ({ event, allEvents, id }) => {
  const url = useAbsoluteUrl();

  const imageSources = React.useMemo(() => {
    return getImageSources(event);
  }, [event]);

  const prevEventData = React.useMemo(() => {
    const eventIndex = allEvents.indexOf(event);
    if (eventIndex > 0) {
      const event = allEvents[eventIndex - 1];
      if (event) {
        return {
          imageSources: getImageSources(event),
          title: getTitle(event),
          path: `/warline/${event.Tokenid}`,
        };
      }
    }
    return undefined;
  }, [allEvents, event]);

  const nextEventData = React.useMemo<PrevNextRecord | undefined>(() => {
    const eventIndex = allEvents.indexOf(event);
    if (eventIndex !== -1 && eventIndex < allEvents.length - 1) {
      const event = allEvents[eventIndex + 1];
      if (event) {
        return {
          imageSources: getImageSources(event),
          title: getTitle(event),
          path: `/warline/${event.Tokenid}`,
        };
      }
    }
    return undefined;
  }, [allEvents, event]);

  const title = getTitle(event);

  return (
    <>
      <PageHead
        title={title}
        subtitle={TITLES.WARLINE}
        description={`NFT of ${getTitle(event)} created by ${
          event.ArtistName
        }.\n${event.DescriptionEnglish}`}
        image={imageSources.originalSrc}
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Warline',
              item: url('/warline'),
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: title,
            },
          ],
        }}
        canonical={`/warline/${id}`}
      />
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
        editions={event.Editions}
        imageSources={imageSources}
        nextRecord={nextEventData}
        prevRecord={prevEventData}
        linkBack="/warline"
        linkBackText="Warline"
        withBuyNowButton={event.IsOnSale}
        withGetNowButton={event.IsWhitelisted}
        warlineDrop={event.WarlineDrop}
      />
    </>
  );
};

export default WarlineItemPage;

export function getStaticProps({ params }: { params: WarlineItemProps }) {
  return { props: params };
}

export function getStaticPaths() {
  return {
    paths: WarlineData.flatMap((data) => data.events).map((event) => ({
      params: { id: event.Tokenid },
    })),
    fallback: false,
  };
}
