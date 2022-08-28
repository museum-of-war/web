import { DayType } from '@sections/types';
import { Drop1Data } from './drop1';
import { Drop2Data } from './drop2';
import { Drop3Data } from './drop3';
import { Drop4Data } from './drop4';
import { WarlineDrop } from '@pages/collections/Warline/constants';

const allDrops = [...Drop1Data, ...Drop2Data, ...Drop3Data, ...Drop4Data];

const Drops = {
  [WarlineDrop.Drop1]: Drop1Data,
  [WarlineDrop.Drop2]: Drop2Data,
  [WarlineDrop.Drop3]: Drop3Data,
  [WarlineDrop.Drop4]: Drop4Data,
} as Readonly<Record<WarlineDrop, ReadonlyArray<DayType>>>;

const DropTokenIdOffsets = Object.keys(Drops).reduce((offsets, drop) => {
  offsets[drop as WarlineDrop] =
    +Drops[drop as WarlineDrop][0]!.events[0]!.Tokenid - 1;
  return offsets;
}, {} as Record<WarlineDrop, number>) as Readonly<Record<WarlineDrop, number>>;

const groupedDropsByDay = allDrops.reduce((group, day) => {
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

export default WarlineData;

export {
  Drops,
  DropTokenIdOffsets,
  Drop1Data,
  Drop2Data,
  Drop3Data,
  Drop4Data,
};
