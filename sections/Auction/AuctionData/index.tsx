import { AuctionItemType } from '@sections/types';
import firstDrop from '@sections/Auction/AuctionData/firstDrop';
import prospect100 from '@sections/Auction/AuctionData/prospect100';
import avatarsForUkraine from '@sections/Auction/AuctionData/avatarsForUkraine';

const AuctionData: Array<AuctionItemType> = [
  ...firstDrop,
  ...prospect100,
  ...avatarsForUkraine,
].map((item, index) => ({
  index,
  ...item,
}));

export default AuctionData;
