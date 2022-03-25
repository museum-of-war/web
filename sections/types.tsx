export type TokenDataType = {
  imageUrl: string;
  timeOfEvent: string;
  day: number;
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
  Tokenid: number;
  DayNo: number;
  FullDate: string;
  TwitterUrl: string;
  TwitterUsername: string;
  Headline: string;
  DescriptionEnglish: string;
  DescriptionUkrainian: string;
  ArtistName: string;
  isAuction?: boolean;
  ArtistLink?: string | undefined;
  FileType?: string;
};
