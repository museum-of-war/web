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

export enum WarlineDrop {
  Drop1 = 'drop1',
  Drop2 = 'drop2',
  Drop3 = 'drop3',
  Drop4 = 'drop4',
  Drop5 = 'drop5',
  Drop6 = 'drop6',
  Drop7 = 'drop7',
  Drop8 = 'drop8',
}

export const UtorgCurrencies = {
  [WarlineDrop.Drop3]: 'MH3ETH',
} as Record<WarlineDrop, string>;
