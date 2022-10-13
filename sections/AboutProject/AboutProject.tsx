import SupportProject from '@sections/AboutProject/SupportProject';
import GovernmentApproval from '@sections/AboutProject/GovernmentApproval';
import Ambassadors from '@sections/AboutProject/Ambassadors';
import React from 'react';
import ContentTop from './ContentTop/ContentTop';
import ContentMain from './ContentMain';
import ContentMedia from './ContentMedia';
import dynamic from 'next/dynamic';
import ContentChapter from './ContentChapter';
import ContentCounterDaysAndRised from './ContentCounterDaysAndRised';
import Partners from './Partners';
import AboutUs from '@sections/AboutProject/AboutUs';
import { FIFTH_DROP_DATE } from '@sections/constants';
import CryptoCirculation from '@sections/CryptoCirculation';
import { ApplyAsAnArtist } from '@components/ApplyAsAnArtist';
const Countdown = dynamic(() => import('./Countdown'), {
  ssr: false,
});

type AboutProjectProps = {
  signerAddress: string;
};

const AboutProject = ({ signerAddress }: AboutProjectProps) => {
  return (
    <div>
      <div className="desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px">
        <ContentTop signerAddress={signerAddress} />
        <Countdown countDownDate={FIFTH_DROP_DATE} />
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
        <div className="desktop:flex desktop:flex-row desktop:justify-between mt-20 desktop:mb-120px tablet:mb-96px mobile:mb-60px">
          <div className="desktop:w-[544px] tablet:mt-0 mobile:mt-60px">
            <SupportProject />
          </div>
          <div className="desktop:w-[544px] desktop:mt-0 tablet:mt-48px mobile:mt-30px">
            <ApplyAsAnArtist />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
