import { AuctionCollection, AuctionCollectionType } from '@sections/types';
import {
  FIRST_DROP_ADDRESS,
  PROSPECT_100_ADDRESS,
  AVATARS_ADDRESS,
  KALUSH_ADDRESS,
  REVIVAL_ADDRESS,
  VESA_AND_ZINAIDA_ADDRESS,
} from '@sections/constants';
import { AuctionVersion } from '@museum-of-war/auction';
import KalushAuctionData from '@sections/Auction/AuctionData/kalush';
import FirstDropRemainingData from '@sections/Auction/AuctionData/drop1rest';
import {
  auctionName,
  nftDescription,
} from '@sections/Collections/VesaZenaida/data';

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
      title: 'Avatars for Ukraine: charity NFT collection to help Ukraine',
      description:
        'Avatar - अवतार - ‘incarnation’.\n\n' +
        'Avatars for Ukraine is a charity NFT collection of the iconic digital art created in response to the largest war since WWII. The incarnations of the spirit of Ukraine in its fight for existence. The avatars for the free nation. Created by the top digital Ukrainian artists and produced by the video game hit makers, this collection is a historic event for the NFT. 100% of the proceeds will support the humanitarian and defence efforts of Ukraine. The official collection approved by the Ministry of Digital Transformation of Ukraine.',
      headerImageSrc: '/img/auction/covers/avatars.png',
      logoSrc: '/img/auction/logos/avatars.svg',
      posterSrc: '/img/auction/posters/avatars.gif',
      videoSrc: 'https://www.youtube-nocookie.com/embed/GM8jV5Tbzww?autoplay=1',
      contractAddress: AVATARS_ADDRESS,
      startsAt: new Date('2022-05-19T21:15:15.000+03:00'),
      endsIn: new Date('2022-05-22T22:00:00.000+03:00'),
      version: AuctionVersion.Seller, //V2
    },
    [AuctionCollection.Kalush]: {
      name: 'Stefania For Ukraine',
      title: 'Kalush Orchestra auction: NFT Eurovision Glass Mic Trophy',
      headerImageSrc: '/img/auction/covers/kalush.png',
      logoSrc: '/img/auction/logos/kalush.png',
      posterSrc: '/img/auction/posters/kalush.png',
      videoSrc: 'https://www.youtube-nocookie.com/embed/F1fl60ypdLs?autoplay=1',
      contractAddress: KALUSH_ADDRESS,
      startsAt: new Date('2022-05-25T11:00:00.000+03:00'),
      endsIn: new Date('2022-05-29T20:00:00.000+03:00'),
      version: AuctionVersion.V3,
      oneItemAuction: true,
      // Item for collection in case if this is collection with 1 item
      item: KalushAuctionData,
    },
    [AuctionCollection.RestOf1stDrop]: {
      name: 'First Drop: Remaining Tokens',
      description:
        'Buy all remaining tokens of the first drop at a fixed price.',
      headerImageSrc: '/img/auction/covers/drop1.png',
      logoSrc: '/img/auction/logos/drop1.png',
      contractAddress: FIRST_DROP_ADDRESS,
      startsAt: new Date('2022-07-17T00:00:00.000+03:00'),
      endsIn: new Date('2022-07-31T00:00:00.000+03:00'),
      version: 'BatchSeller',
      oneItemAuction: true,
      item: FirstDropRemainingData,
    },
    [AuctionCollection.TheRevivalProject]: {
      name: 'The Revival Project by Depositphotos',
      description:
        'Every day, dozens of cultural objects are being shelled in Ukraine, with numbers reaching over 450. Each destroyed museum, monument, or street is a valuable part of the country’s culture; they also play a crucial role in the lives of Ukrainians who call these places their home.\n\nTo help preserve and recover Ukraine’s culture, Depositphotos, an international content marketplace, collaborated with seven local artists to create a series of thematic NFT artworks for sale. Each illustration translates a unique, artistic vision of how some of the destroyed sites could look like in the future.\n\nAll NFT artworks are available for multiple purchases, with funds being directly transferred to the crypto wallet of the Ministry of Culture and Information Policy of Ukraine.\n\nBuy charity NFTs and make your contribution to Ukraine’s culture!',
      headerImageSrc: '/img/auction/covers/revival.png',
      logoSrc: '/img/auction/logos/revival.png',
      posterSrc: '/img/auction/posters/revival.png',
      contractAddress: REVIVAL_ADDRESS,
      startsAt: new Date('2022-08-22T23:00:00.000+03:00'),
      endsIn: new Date('2022-08-23T23:00:00.000+03:00'),
      version: AuctionVersion.SellerV2,
    },
    [AuctionCollection.VesaZinaida]: {
      name: auctionName,
      description: nftDescription,
      logoSrc: '/img/auction/logos/vesa-zinaida.jpg',
      headerImageSrc: '/img/vesa-zinaida/vesa-zinaida_hero.webp',
      contractAddress: VESA_AND_ZINAIDA_ADDRESS,
      startsAt: new Date('2022-11-30T20:00:00.000+02:00'),
      endsIn: new Date('2022-12-07T20:00:00.000+02:00'),
      version: AuctionVersion.Seller,
    },
  };

export default AuctionCollectionData;
