import { DayType } from '@sections/types';
import { Drop1Data } from './drop1';
import { Drop2Data } from './drop2';
import { Drop3Data } from './drop3';

const allDrops = [...Drop1Data, ...Drop2Data, ...Drop3Data];

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

export { Drop1Data, Drop2Data, Drop3Data };
