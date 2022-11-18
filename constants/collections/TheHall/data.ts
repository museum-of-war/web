import { HallItemType } from '@sections/types';
import { IMG_STORAGE } from '@sections/constants';

export const data: HallItemType[] = [
  {
    Id: 1,
    TwitterUrl: 'https://twitter.com/elonmusk/status/1497701484003213317',
    ImageSrc: `${IMG_STORAGE}/original/hall/elon_musk.png`,
    TwitterUsername: 'elonmusk',
    TwitterAccountName: 'Elon Musk',
    TweetText:
      'Starlink service is now active in Ukraine. More terminals en route.',
  },
  {
    Id: 2,
    TwitterUrl: 'https://twitter.com/unchainfund/status/1497380711288152067',
    ImageSrc: `${IMG_STORAGE}/original/hall/vitalik_buterin.png`,
    TwitterUsername: 'VitalikButerin',
    TwitterAccountName: 'Vitalik Buterin',
    TweetText: '',
  },
  {
    Id: 3,
    TwitterUrl: 'https://twitter.com/MarkHamill/status/1576487966846767104',
    ImageSrc: `${IMG_STORAGE}/original/hall/mark_hamill.jpg`,
    TwitterUsername: 'MarkHamill',
    TwitterAccountName: 'Mark Hamill',
    TweetText: 'Хай буде з вами Сила 🇺🇦',
  },
];
