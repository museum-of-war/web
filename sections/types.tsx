import { AuctionVersion } from '@museum-of-war/auction';

export type TokenDataType = {
  metadata: any;
  id: any;
};

export type TeamDataType = {
  name: string;
  role: string;
};

export type DayType = {
  dayNo: number;
  date: string;
  events: Array<EventType>;
  isOnSale?: boolean;
};

export type EventType = {
  Time: string;
  Tokenid: string;
  DayNo: string;
  FullDate: string;
  TwitterUrl: string;
  TwitterUsername: string;
  Headline: string;
  DescriptionEnglish: string;
  DescriptionUkrainian: string;
  ArtistName: string;
  isAuction?: boolean;
  ArtistLink?: string | undefined;
  ImageType?: string;
};

export enum AuctionCollections {
  firstDrop = 'drop1',
  prospect100 = 'prospect100',
  avatarsForUkraine = 'avatars',
}

export type AuctionCollectionType = {
  name: string;
  description: string;
  logoSrc?: string;
  headerImageSrc: string;
  posterSrc?: string;
  videoSrc?: string;
  contractAddress: string;
  startsAt?: Date;
  endsIn: Date;
  version: AuctionVersion;
};

export type AuctionItemType = {
  index: number;
  name: string;
  category: AuctionCollections;
  tokenId: number;
  imageSrc: string;
  animationSrc?: string;
  artist: string;
  descriptionEnglish?: string;
  descriptionUkrainian?: string;
  isSale: boolean;
};

export type HallItemType = {
  Id: number;
  TwitterUrl: string;
  ImageSrc: string;
  TwitterUsername: string;
  TwitterAccountName: string;
  TweetText: string;
};

export type BidInfo = {
  eth: string;
  date: Date;
  bidder: string;
};
