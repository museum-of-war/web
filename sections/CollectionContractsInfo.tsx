import { CollectionInfoType } from '@sections/types';
import {
  AVATARS_ADDRESS,
  FIRST_DROP_ADDRESS,
  KALUSH_ADDRESS,
  MERGER_ADDRESS,
  PROSPECT_100_ADDRESS,
  SECOND_DROP_ADDRESS,
  THIRD_DROP_ADDRESS,
} from '@sections/Constants';

const collectionContractsInfo = {
  [FIRST_DROP_ADDRESS]: {
    name: 'Meta History: Museum of War - Chapter 1',
    type: 'erc721',
  },
  [SECOND_DROP_ADDRESS]: {
    name: 'Meta History: Museum of War - Chapter 2',
    type: 'erc1155',
  },
  [THIRD_DROP_ADDRESS]: {
    name: 'Meta History: Museum of War - Chapter 3',
    type: 'erc1155',
  },
  [PROSPECT_100_ADDRESS]: {
    name: 'Meta History - PROSPECT 100',
    type: 'erc721',
  },
  [AVATARS_ADDRESS]: {
    name: 'Meta History: Avatars for Ukraine',
    type: 'erc721',
  },
  [KALUSH_ADDRESS]: {
    name: 'Stefania For Ukraine',
    type: 'erc721',
  },
  [MERGER_ADDRESS]: {
    name: 'Meta History: Museum of War - Chapter 1: High Levels',
    type: 'erc721',
  },
} as Readonly<Record<string, CollectionInfoType>>;

export default collectionContractsInfo;
