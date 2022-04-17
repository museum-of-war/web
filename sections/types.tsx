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

export enum AuctionCategories {
 firstDrop = 'First Drop',
 prospect100 = 'PROSPECT 100',
}

export type AuctionItemType = {
  index?: number;
  name: string;
  startsAt: Date;
  endsIn: Date;
  category: AuctionCategories;
  contractAddress: string;
  tokenId: number;
  imageSrc: string;
  artist: string;
  descriptionEnglish?: string;
  descriptionUkrainian?: string;
};
