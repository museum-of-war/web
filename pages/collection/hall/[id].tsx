import { TITLES } from '@sections/constants';
import { useAbsoluteUrl } from '@hooks/useAbsoluteUrl';
import { NftDetails, PrevNextRecord } from '@components/nft-details/NftDetails';
import PageHead from '@components/PageHead';
import { data as HallData } from '@constants/collections/TheHall/data';
import { getImageSources } from '@utils/Warline/WarlineUrls';
import React from 'react';
import { ARTISTS } from '@sections/Artists/constants';
import { HallItemType } from '@sections/types';

type WarlineItemProps = { id: string };

const WarlineItemPage: React.FC<WarlineItemProps> = ({ id }) => {
  const event = React.useMemo(
    () => HallData.find((event) => event.Tokenid === id),
    [id],
  );

  return event ? (
    <TheHallItem event={event} allEvents={HallData} id={id} />
  ) : (
    <div>Event not found</div>
  );
};

const TheHallItem: React.FC<{
  event: HallItemType;
  allEvents: HallItemType[];
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
          title: event.Title,
          path: `/collection/hall/${event.Tokenid}`,
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
          title: event.Title,
          path: `/collection/hall/${event.Tokenid}`,
        };
      }
    }
    return undefined;
  }, [allEvents, event]);

  const artist = ARTISTS.find((artist) => artist.name === event.ArtistName);

  const artistLink = artist ? `/artists/${artist.id}` : event.ArtistLink;

  return (
    <>
      <PageHead
        title={event.Title}
        subtitle={TITLES.HALL}
        description={event.ShortDescription}
        image={imageSources.originalSrc}
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'The Hall',
              item: url('/collection/hall'),
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: event.Title,
            },
          ],
        }}
        canonical={`/hall/${id}`}
      />
      <NftDetails
        id={event.Tokenid}
        title={event.Title}
        descriptionEnglish={event.DescriptionEnglish}
        descriptionUkrainian={event.DescriptionUkrainian}
        twitterUrl={event.TwitterUrl}
        twitterUsername={event.TwitterUsername}
        headline={event.Headline}
        artistUrl={artistLink}
        artistName={event.ArtistName}
        imageSources={imageSources}
        linkBack="/collection/hall"
        linkBackText="The Hall"
        nextRecord={nextEventData}
        prevRecord={prevEventData}
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
    paths: HallData.map((event) => ({
      params: { id: event.Tokenid },
    })),
    fallback: false,
  };
}
