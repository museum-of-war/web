import {
  AUCTION_END_DATE,
  AUCTION_START_DATE,
  FIRST_DROP_ADDRESS,
  IMG_STORAGE,
} from '@sections/Constants';
import { AuctionCollections, AuctionItemType } from '@sections/types';
import WarlineData from '@sections/Warline/WarlineData';

const FirstDropAuctionData: Array<Omit<AuctionItemType, 'index'>> = [
  ...WarlineData[0]!.events.slice(0, 4).map((event) => ({
    name: `Day ${event.DayNo}, ${event.Time}`,
    startsAt: new Date(AUCTION_START_DATE),
    endsIn: new Date(AUCTION_END_DATE),
    category: AuctionCollections.firstDrop,
    contractAddress: FIRST_DROP_ADDRESS,
    tokenId: +event.Tokenid,
    imageSrc: `${IMG_STORAGE}/original/${event.ImageType}`,
    artist: event.ArtistName,
    descriptionEnglish: event.DescriptionEnglish,
    descriptionUkrainian: event.DescriptionUkrainian,
    isSale: false,
  })),
];

export default FirstDropAuctionData;