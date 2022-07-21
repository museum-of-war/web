import { DayType } from '@sections/types';
import { Drop1Data } from './drop1';
import { Drop2Data } from './drop2';

const WarlineData: Array<DayType> = [...Drop1Data, ...Drop2Data];

export default WarlineData;

export { Drop1Data, Drop2Data };
