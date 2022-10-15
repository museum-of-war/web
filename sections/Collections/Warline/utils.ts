import { EventsGroup } from '@sections/types';
import { Sorting, TypeFilter } from './constants';

export const filterByType = (
  eventsGroups: EventsGroup[],
  typeFilter: TypeFilter,
): EventsGroup[] => {
  switch (typeFilter) {
    case TypeFilter.ON_SALE: {
      const result: EventsGroup[] = [];
      for (const data of eventsGroups) {
        const onSale = data.events.filter((event) => event.IsOnSale);
        if (onSale.length) {
          result.push({
            ...data,
            events: onSale,
          });
        }
      }
      return result;
    }
    case TypeFilter.ALL_ARTS:
    default:
      return eventsGroups;
  }
};

export const sortEventGroups = (
  eventGroups: EventsGroup[],
  sorting: Sorting,
): EventsGroup[] => {
  const direction = sorting === Sorting.OLDEST ? 1 : -1;

  const sorted = [...eventGroups].sort(
    (a, b) =>
      (new Date(
        a[sorting === Sorting.OLDEST ? 'firstDate' : 'lastDate'],
      ).getTime() -
        new Date(
          b[sorting === Sorting.OLDEST ? 'firstDate' : 'lastDate'],
        ).getTime()) *
      direction,
  );
  sorted.forEach((eventGroup) => {
    eventGroup.events.sort(
      (a, b) =>
        (new Date(`${a.FullDate} ${a.Time}`).getTime() -
          new Date(`${b.FullDate} ${b.Time}`).getTime()) *
        direction,
    );
  });
  return sorted;
};
