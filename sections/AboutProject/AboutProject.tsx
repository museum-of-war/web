import SupportProject from '@sections/AboutProject/SupportProject';
import SupportSticky from '@sections/AboutProject/SupportSticky';
import React from 'react';
import ContentMission from './ContentMission';
const ContentTop = dynamic(() => import('./ContentTop/ContentTop'), {
  ssr: false,
});
import ContentWar from './ContentWar';
import ContentMain from './ContentMain';
import ContentMedia from './ContentMedia';
import dynamic from 'next/dynamic';
import ContentChapter from './ContentChapter';
import ContentCounterDaysAndRised from './ContentCounterDaysAndRised';
import Partners from './Partners';
import Countdown from './Countdown';
import { SECOND_DROP_DATE } from '@sections/Constants';


type AboutProjectProps = {
  signerAddress: string;
  handleConnect: () => void;
};

const AboutProject = ({ signerAddress, handleConnect }: AboutProjectProps) => {
  return (
    <div>
      <ContentTop signerAddress={signerAddress} handleConnect={handleConnect} />
      <Countdown countDownDate={SECOND_DROP_DATE} />
      <ContentChapter />
      <ContentMission />
      <ContentCounterDaysAndRised />
      <ContentWar />
      <ContentMain
        signerAddress={signerAddress}
        handleConnect={handleConnect}
      />
      <SupportSticky targetAnchorId="countdown-banner" />
      <SupportProject />
      <Partners />
      <ContentMedia />
    </div>
  );
};

export default AboutProject;
