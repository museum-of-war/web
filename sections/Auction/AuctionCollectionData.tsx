import { AuctionCollections, AuctionCollectionType } from '@sections/types';
import {
  FIRST_DROP_ADDRESS,
  PROSPECT_100_ADDRESS,
  AVATARS_ADDRESS,
} from '@sections/Constants';

const AuctionCollectionData: Record<AuctionCollections, AuctionCollectionType> =
  {
    [AuctionCollections.firstDrop]: {
      name: 'First Drop',
      description:
        'First 4 tokens from the first drop that are presented in One of One edition. The NFTs are facts accompanied by personal reflections. Each NFT is a real news piece from an official source and an illustration from artists.',
      headerImageSrc: '/img/auction/covers/drop1.png',
      posterSrc: '/img/auction/posters/drop1.png',
      contractAddress: FIRST_DROP_ADDRESS,
      startsAt: new Date('2022-04-17T23:00:00.000+03:00'),
      endsIn: new Date('2022-04-22T23:00:00.000+03:00'),
    },
    [AuctionCollections.prospect100]: {
      name: 'PROSPECT 100',
      description:
        'PROSPECT 100 creates design competitions that award prestigious opportunities to designers globally. Competitions are free to enter, are open to anyone from anywhere in the world.\n' +
        '100 designers were selected by 10 top judges to create unique collection specially for MetaHistory. Every piece is unique and presented in One of One edition.\n' +
        'The part of PROSPECT 100 collection can be obtained at this auction.',
      headerImageSrc: '/img/auction/covers/prospect100.png',
      posterSrc: '/img/auction/posters/prospect100.png',
      contractAddress: PROSPECT_100_ADDRESS,
      startsAt: new Date('2022-04-17T23:00:00.000+03:00'),
      endsIn: new Date('2022-04-22T23:00:00.000+03:00'),
    },
    [AuctionCollections.avatarsForUkraine]: {
      name: 'Avatars for Ukraine',
      description:
        'Avatar - अवतार - ‘incarnation’.\n' +
        'Avatars for Ukraine is a charity NFT collection of the iconic digital art created in response to the largest war since WWII. The incarnations of the spirit of Ukraine in its fight for existence. The avatars for the free nation. Created by the top digital Ukrainian artists and produced by the video game hit makers, this collection is a historic event for the NFT. 100% of the proceeds will support the humanitarian and defence efforts of Ukraine. The official collection approved by the Ministry of Digital Transformation of Ukraine.',
      headerImageSrc: '/img/auction/covers/avatars.png',
      posterSrc:
        'https://static.wixstatic.com/media/23d6fe_84f2f12b18864b0a8ac0c97402ebbe1af000.jpg',
      videoSrc:
        'https://video.wixstatic.com/video/23d6fe_84f2f12b18864b0a8ac0c97402ebbe1a/1080p/mp4/file.mp4',
      contractAddress: AVATARS_ADDRESS,
      startsAt: new Date('2022-05-19T21:45:00.000+03:00'),
      endsIn: new Date('2022-05-22T22:00:00.000+03:00'),
    },
  };

export default AuctionCollectionData;
