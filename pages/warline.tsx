import PageHead from '@components/PageHead';
import { SharedProps } from '@components/wrapper';
import type { NextPage } from 'next';
import Warline from '@sections/Warline/Warline';

const WarlinePage: NextPage<SharedProps> = () => (
  <>
    <PageHead title="Warline - Meta History: Museum of War" />
    <Warline />
  </>
);

export default WarlinePage;
