import SupportProject from '@sections/AboutProject/SupportProject';
import GovernmentApproval from '@sections/AboutProject/GovernmentApproval';
import Ambassadors from '@sections/AboutProject/Ambassadors';
import React from 'react';
const ContentTop = dynamic(() => import('./ContentTop/ContentTop'), {
  ssr: false,
});
import ContentMain from './ContentMain';
import ContentMedia from './ContentMedia';
import dynamic from 'next/dynamic';
import ContentChapter from './ContentChapter';
import ContentCounterDaysAndRised from './ContentCounterDaysAndRised';
import Partners from './Partners';
const Countdown = dynamic(() => import('./Countdown'), {
  ssr: false,
});
import AboutUs from '@sections/AboutProject/AboutUs';
import { THIRD_DROP_DATE } from '@sections/Constants';
import CryptoCirculation from '@sections/CryptoCirculation';

type AboutProjectProps = {
  signerAddress: string;
};

const AboutProject = ({ signerAddress }: AboutProjectProps) => {
  return (
    <div>
      <div className="desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px">
        <ContentTop signerAddress={signerAddress} />
        <Countdown countDownDate={THIRD_DROP_DATE} />
        <ContentChapter />
        <ContentCounterDaysAndRised />
      </div>
      <GovernmentApproval />
      <CryptoCirculation initialSize={5} />
      <div className="desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px">
        <AboutUs />
      </div>
      <ContentMain />
      <div className="desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px">
        <Ambassadors />
        <ContentMedia />
        <Partners />
        <SupportProject />
      </div>
    </div>
  );
};

export default AboutProject;
