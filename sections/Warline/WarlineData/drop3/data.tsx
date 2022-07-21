import { DayType } from '@sections/types';
import { WarlineDrop } from '@sections/Warline/constants';

export default (
  [
    /*TODO*/
  ] as ReadonlyArray<DayType>
).map((day) => ({
  ...day,
  events: day.events.map((event) => ({
    ...event,
    Editions: 12,
    WarlineDrop: WarlineDrop.Drop3,
    IsOnSale: true,
  })),
})) as ReadonlyArray<DayType>;
