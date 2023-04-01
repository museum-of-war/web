import {
  WarlineDrop,
  WarlineDropVersion,
  WarlineDropType,
} from '@sections/types';
import {
  FIRST_DROP_ADDRESS,
  SECOND_DROP_ADDRESS,
  THIRD_DROP_ADDRESS,
  FOURTH_DROP_ADDRESS,
  FIFTH_DROP_ADDRESS,
  SIXTH_DROP_ADDRESS,
  SEVENTH_DROP_ADDRESS,
  EIGHTH_DROP_ADDRESS,
  NINTH_DROP_ADDRESS,
  TENTH_DROP_ADDRESS,
  ELEVENTH_DROP_ADDRESS,
} from '@sections/constants';

export const rand_imgs: string[] = [
  '/img/dots-1.png',
  '/img/dots-2.png',
  '/img/dots-3.png',
  '/img/dots-4.png',
  '/img/dots-5.png',
  '/img/dots-6.png',
  '/img/dots-7.png',
  '/img/dots-8.png',
];

export const WarlineData: Readonly<Record<WarlineDrop, WarlineDropType>> = {
  [WarlineDrop.Drop1]: {
    name: 'Drop 1',
    address: FIRST_DROP_ADDRESS,
    version: WarlineDropVersion.FairXYZMH,
    priceETH: 0.15,
    editions: 22, // 4 + 99 * 22 - different editions count
    airdropped: 4 + 3 + 1, // first four tokens were sold at auction, 3 quiz prizes, 1 for retweet
  },
  [WarlineDrop.Drop2]: {
    name: 'Drop 2',
    address: SECOND_DROP_ADDRESS,
    version: WarlineDropVersion.DropMH,
    priceETH: 0.15,
    editions: 16,
    airdropped: 30, // for artsy and airdrops (retweets, etc.)
  },
  [WarlineDrop.Drop3]: {
    name: 'Drop 3',
    address: THIRD_DROP_ADDRESS,
    version: WarlineDropVersion.SelectiveDropMH,
    priceETH: 0.15,
    editions: 12,
  },
  [WarlineDrop.Drop4]: {
    name: 'Drop 4',
    address: FOURTH_DROP_ADDRESS, // not deployed yet
    version: WarlineDropVersion.SelectiveDropMHv2,
    priceETH: 0, // free mint, whitelisted drop
    editions: 8,
  },
  [WarlineDrop.Drop5]: {
    name: 'Drop 5',
    address: FIFTH_DROP_ADDRESS,
    version: WarlineDropVersion.SelectiveDropMHv2,
    priceETH: 0.15,
    editions: 4,
  },
  [WarlineDrop.Drop6]: {
    name: 'Drop 6',
    address: SIXTH_DROP_ADDRESS,
    version: WarlineDropVersion.SelectiveDropMHv2,
    priceETH: 0.3,
    editions: 2,
  },
  [WarlineDrop.Drop7]: {
    name: 'Drop 7',
    address: SEVENTH_DROP_ADDRESS,
    version: WarlineDropVersion.SelectiveDropMHv2,
    priceETH: 0.3,
    editions: 2,
  },
  [WarlineDrop.Drop8]: {
    name: 'Drop 8',
    address: EIGHTH_DROP_ADDRESS,
    version: WarlineDropVersion.SelectiveDropMHv2,
    priceETH: 0.3,
    editions: 2,
    airdropped: 50, // for giveaways
  },
  [WarlineDrop.Drop9]: {
    name: 'Drop 9',
    address: NINTH_DROP_ADDRESS,
    version: WarlineDropVersion.SelectiveDropMHv2,
    priceETH: 0.3,
    editions: 2,
  },
  [WarlineDrop.Drop10]: {
    name: 'Drop 10',
    address: TENTH_DROP_ADDRESS,
    version: WarlineDropVersion.SelectiveDropMHv2,
    priceETH: 0.3,
    editions: 2,
  },
  [WarlineDrop.Drop11]: {
    name: 'Drop 11',
    address: ELEVENTH_DROP_ADDRESS,
    version: WarlineDropVersion.SelectiveDropMHv2,
    priceETH: 0.3,
    editions: 2,
  },
};

export const UtorgCurrencies = {
  [WarlineDrop.Drop3]: 'MH3ETH',
} as Record<WarlineDrop, string>;
