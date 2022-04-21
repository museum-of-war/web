import { NftDetails } from '@components/nft-details/NftDetails';
import { EventType } from '@sections/types';
import WarlineData from '@sections/Warline/WarlineData';
import { getUrls } from '@sections/Warline/WarlineUrls';
import { useRouter } from 'next/router';
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

const WarlineItemPage: React.FC = () => {
  const router = useRouter();
  const id: string = router.query.id as string;

  const allEvents = React.useMemo(
    () => WarlineData.flatMap((data) => data.events),
    [],
  );
  const event = React.useMemo(
    () => allEvents.find((event) => event.Tokenid === id),
    [allEvents, id],
  );

  return event ? (
    <WarlineItem id={id} event={event} allEvents={allEvents} />
  ) : (
    <div>Event not found</div>
  );
};

const WarlineItem: React.FC<{
  id: string;
  event: EventType;
  allEvents: EventType[];
}> = ({ id, event, allEvents }) => {
  const imageSources = React.useMemo(() => {
    const randomSrc = rand_imgs[parseInt(id, 10) % 8] as string;
    return getUrls(id, event.ImageType, randomSrc as string);
  }, [event.ImageType, id]);

  return (
    <NftDetails
      title={`Day ${event.DayNo}, ${event.Time}`}
      descriptionEnglish={event.DescriptionEnglish}
      descriptionUkrainian={event.DescriptionUkrainian}
      imageSources={imageSources}
    />
  );
};

export default WarlineItemPage;
