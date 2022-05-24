import { AuctionCollection, AuctionCollectionType } from '@sections/types';
import {
  FIRST_DROP_ADDRESS,
  PROSPECT_100_ADDRESS,
  AVATARS_ADDRESS,
  KALUSH_ADDRESS,
} from '@sections/Constants';
import { AuctionVersion } from '@museum-of-war/auction';
import KalushAuctionData from '@sections/Auction/AuctionData/kalush';

const AuctionCollectionData: Record<AuctionCollection, AuctionCollectionType> =
  {
    [AuctionCollection.FirstDrop]: {
      name: 'First Drop',
      description:
        'First 4 tokens from the first drop that are presented in One of One edition. The NFTs are facts accompanied by personal reflections. Each NFT is a real news piece from an official source and an illustration from artists.',
      headerImageSrc: '/img/auction/covers/drop1.png',
      logoSrc: '/img/auction/logos/drop1.png',
      contractAddress: FIRST_DROP_ADDRESS,
      startsAt: new Date('2022-04-17T23:00:00.000+03:00'),
      endsIn: new Date('2022-04-22T23:00:00.000+03:00'),
      version: AuctionVersion.V1,
    },
    [AuctionCollection.Prospect100]: {
      name: 'PROSPECT 100',
      description:
        'PROSPECT 100 creates design competitions that award prestigious opportunities to designers globally. Competitions are free to enter, are open to anyone from anywhere in the world.\n\n' +
        '100 designers were selected by 10 top judges to create unique collection specially for MetaHistory. Every piece is unique and presented in One of One edition.\n\n' +
        'The part of PROSPECT 100 collection can be obtained at this auction.',
      headerImageSrc: '/img/auction/covers/prospect100.png',
      logoSrc: '/img/auction/logos/prospect100.png',
      contractAddress: PROSPECT_100_ADDRESS,
      startsAt: new Date('2022-04-17T23:00:00.000+03:00'),
      endsIn: new Date('2022-04-22T23:00:00.000+03:00'),
      version: AuctionVersion.V1,
    },
    [AuctionCollection.AvatarsForUkraine]: {
      name: 'Avatars for Ukraine',
      description:
        'Avatar - अवतार - ‘incarnation’.\n\n' +
        'Avatars for Ukraine is a charity NFT collection of the iconic digital art created in response to the largest war since WWII. The incarnations of the spirit of Ukraine in its fight for existence. The avatars for the free nation. Created by the top digital Ukrainian artists and produced by the video game hit makers, this collection is a historic event for the NFT. 100% of the proceeds will support the humanitarian and defence efforts of Ukraine. The official collection approved by the Ministry of Digital Transformation of Ukraine.',
      headerImageSrc: '/img/auction/covers/avatars.png',
      logoSrc: '/img/auction/logos/avatars.svg',
      posterSrc: '/img/auction/posters/avatars.gif',
      videoSrc: 'https://www.youtube-nocookie.com/embed/GM8jV5Tbzww',
      contractAddress: AVATARS_ADDRESS,
      startsAt: new Date('2022-05-19T21:15:15.000+03:00'),
      endsIn: new Date('2022-05-22T22:00:00.000+03:00'),
      version: AuctionVersion.V2,
    },
    [AuctionCollection.Kalush]: {
      name: 'Kalush eurovision 2022 nft',
      headerImageSrc: '/img/auction/covers/kalush.png',
      logoSrc: '/img/auction/logos/kalush.svg',
      contractAddress: KALUSH_ADDRESS,
      startsAt: new Date('todo @current'),
      endsIn: new Date('todo @current'),
      version: AuctionVersion.V2, // todo @current
      oneItemAuction: true,
      // Item for collection in case if this is collection with 1 item
      item: KalushAuctionData,
    },
  };

export default AuctionCollectionData;
