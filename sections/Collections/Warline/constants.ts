import { ValueLabel } from 'types';

export enum ViewFilter {
  BY_HOUR,
  BY_DAY,
  BY_DROP,
}

export enum TypeFilter {
  ALL_ARTS,
  ON_SALE,
}

export enum Sorting {
  OLDEST,
  NEWEST,
}

export const VIEW_OPTIONS: ValueLabel<ViewFilter>[] = [
  { value: ViewFilter.BY_HOUR, label: 'By Hour' },
  { value: ViewFilter.BY_DAY, label: 'By Day' },
  { value: ViewFilter.BY_DROP, label: 'By Drop' },
];

export const TYPE_FILTER_OPTIONS: ValueLabel<TypeFilter>[] = [
  { value: TypeFilter.ALL_ARTS, label: 'All Arts' },
  { value: TypeFilter.ON_SALE, label: 'On Sale' },
];

export const SORTING_OPTIONS: ValueLabel<Sorting>[] = [
  { value: Sorting.NEWEST, label: 'Newest first' },
  { value: Sorting.OLDEST, label: 'Oldest first' },
];
