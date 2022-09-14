import { TITLES } from '@sections/constants';
import { useAbsoluteUrl } from '@hooks/useAbsoluteUrl';
import { NftDetails, PrevNextRecord } from '@components/nft-details/NftDetails';
import PageHead from '@components/PageHead';
import { EventType } from '@sections/types';
import WarlineData from '../../constants/collections/Warline';
import { getImageSources } from '@utils/Warline/WarlineUrls';
import React from 'react';
import { ARTISTS } from '@sections/Artists/constants';

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

  const artist = ARTISTS.find((artist) => artist.name === event.ArtistName);

  const artistLink = artist ? `/artists/${artist.id}` : event.ArtistLink;

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
              item: url('/collection/warline'),
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
        artistUrl={artistLink}
        artistName={event.ArtistName}
        editions={event.Editions}
        imageSources={imageSources}
        nextRecord={nextEventData}
        prevRecord={prevEventData}
        linkBack="/collection/warline"
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
