import { SelectOption } from "@components/DropdownSelect";

export const rand_imgs: string[] = [
  "img/dots-1.png",
  "img/dots-2.png",
  "img/dots-3.png",
  "img/dots-4.png",
  "img/dots-5.png",
  "img/dots-6.png",
  "img/dots-7.png",
  "img/dots-8.png",
];

export const BY_HOUR = 'By Hour';
export const BY_DAY = 'By Day';
export const ALL_ARTS = 'All Arts';
export const ON_SALE = 'On Sale';
export const OLDEST = 'oldest';
export const NEWEST = 'newest';


export const BY_NEWEST_BY_OLDEST_OPTIONS: SelectOption[] = [
  {
    text: 'Newest first',
    value: NEWEST,
  },
  {
    text: 'Oldest first',
    value: OLDEST,
  },
]