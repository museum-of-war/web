import { AuctionItemType } from '@sections/types';
import firstDrop from '@sections/Auction/AuctionData/firstDrop';
import prospect100 from '@sections/Auction/AuctionData/prospect100';
import avatarsForUkraine from '@sections/Auction/AuctionData/avatarsForUkraine';
import kalush from '@sections/Auction/AuctionData/kalush';
import revival from '@sections/Auction/AuctionData/revival';
import vesaAndZinaida from '@sections/Auction/AuctionData/vesaAndZinaida';

const AuctionData: Array<AuctionItemType> = [
  ...firstDrop,
  ...prospect100,
  ...avatarsForUkraine,
  kalush,
  ...revival,
  ...vesaAndZinaida,
].map((item, index) => ({
  index,
  ...item,
}));

export default AuctionData;
