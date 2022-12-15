import { DayType, EventsGroup } from '@sections/types';
import { Drop1Data } from './drop1';
import { Drop2Data } from './drop2';
import { Drop3Data } from './drop3';
import { Drop4Data } from './drop4';
import { Drop5Data } from './drop5';
import { Drop6Data } from './drop6';
import { WarlineDrop } from './constants';

const Drops = {
  [WarlineDrop.Drop1]: Drop1Data,
  [WarlineDrop.Drop2]: Drop2Data,
  [WarlineDrop.Drop3]: Drop3Data,
  [WarlineDrop.Drop4]: Drop4Data,
  [WarlineDrop.Drop5]: Drop5Data,
  [WarlineDrop.Drop6]: Drop6Data,
} as Readonly<Record<WarlineDrop, ReadonlyArray<DayType>>>;

const dropTitle: Readonly<Record<WarlineDrop, string>> = {
  [WarlineDrop.Drop1]: 'Drop 1',
  [WarlineDrop.Drop2]: 'Drop 2',
  [WarlineDrop.Drop3]: 'Drop 3',
  [WarlineDrop.Drop4]: 'Drop 4',
  [WarlineDrop.Drop5]: 'Drop 5',
  [WarlineDrop.Drop6]: 'Drop 6',
};

const AllDropsData = Object.values(Drops).flat();

const DropTokenIdOffsets = Object.keys(Drops).reduce((offsets, drop) => {
  offsets[drop as WarlineDrop] =
    +Drops[drop as WarlineDrop][0]!.events[0]!.Tokenid - 1;
  return offsets;
}, {} as Record<WarlineDrop, number>) as Readonly<Record<WarlineDrop, number>>;

const groupedDropsByDay = AllDropsData.reduce((group, day) => {
  const { dayNo } = day;
  const arr = group[dayNo] ?? [];
  arr.push(day);
  group[dayNo] = arr;
  return group;
}, {} as Record<number, DayType[]>);

const WarlineData: Array<DayType> = Object.keys(groupedDropsByDay).map(
  (dayNo) => {
    const dayInfos = groupedDropsByDay[+dayNo]!;
    if (dayInfos.length === 1) return dayInfos[0]!;
    return {
      ...dayInfos[0]!,
      events: dayInfos.flatMap((day) => day.events),
    };
  },
);

export const eventsGroupByDay: EventsGroup[] = Object.entries(
  groupedDropsByDay,
).reduce<EventsGroup[]>((group, [dayNumber, day]) => {
  return [
    ...group,
    {
      name: `Day ${dayNumber}`,
      description: day[0]!.date,
      firstDate: day[0]!.date,
      lastDate: day[0]!.date,
      events: day.flatMap((day) => day.events),
    },
  ];
}, []);

export const eventsGroupByDrop: EventsGroup[] = Object.entries(Drops).reduce<
  EventsGroup[]
>((group, [dropId, drop]) => {
  return [
    ...group,
    {
      name: dropTitle[dropId as WarlineDrop],
      // We should guarantee that array is sorted by days
      description: `${drop[0]!.date} - ${drop[drop.length - 1]!.date}`,
      firstDate: drop[0]!.date,
      lastDate: drop[drop.length - 1]!.date,
      events: drop.flatMap((day) => day.events),
    },
  ];
}, []);

export default WarlineData;

export {
  Drops,
  AllDropsData,
  DropTokenIdOffsets,
  Drop1Data,
  Drop2Data,
  Drop3Data,
  Drop4Data,
  Drop5Data,
  Drop6Data,
};
