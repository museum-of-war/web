export type TokenDataType = {
  imageUrl: string;
  timeOfEvent: string;
  day: number;
};

export type DayType = {
  dayNo: number;
  date: string;
  events: Array<EventType>;
};

export type EventType = {
  imageUrl: string;
  time: string;
  description: string;
  tokenId: number;
  username: string;
};
