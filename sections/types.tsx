import { AuctionVersion } from '@museum-of-war/auction';
import { BigNumberish } from 'ethers';

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

export enum AuctionCollection {
  FirstDrop = 'drop1',
  Prospect100 = 'Prospect100',
  AvatarsForUkraine = 'avatars',
  Kalush = 'kalush',
}

export type AuctionCollectionType = {
  name?: string;
  description?: string;
  logoSrc?: string;
  headerImageSrc: string;
  posterSrc?: string;
  videoSrc?: string;
  contractAddress: string;
  startsAt?: Date;
  endsIn: Date;
  version: AuctionVersion;
  oneItemAuction?: boolean;
  item?: AuctionItemType;
};

export type AuctionItemType = {
  index?: number;
  name: string;
  category: AuctionCollection;
  tokenId: number;
  imageSrc: string;
  animationSrc?: string;
  artist: string;
  descriptionEnglish?: string | JSX.Element;
  descriptionUkrainian?: string;
  isSale: boolean;
  videoSrc?: string;
  posterSrc?: string;
  bonuses?: string[];
  externalBid?: BigNumberish;
  externalButton?: {
    Big(): JSX.Element;
    Small(): JSX.Element;
  };
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

export type ArtistType = {
  name: string;
  bio: string;
  avatarSrc?: string;
};
