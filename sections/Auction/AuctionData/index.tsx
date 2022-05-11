import { AuctionItemType } from '@sections/types';
import firstDrop from '@sections/Auction/AuctionData/firstDrop';
import prospect100 from '@sections/Auction/AuctionData/prospect100';

const AuctionData: Array<AuctionItemType> = [...firstDrop, ...prospect100].map(
  (item, index) => ({
    index,
    ...item,
  }),
);

export default AuctionData;
