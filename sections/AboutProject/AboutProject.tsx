import SupportProject from '@sections/AboutProject/SupportProject';
import SupportSticky from '@sections/AboutProject/SupportSticky';
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
import Countdown from './Countdown';
import AuctionCollectionData from '@sections/Auction/AuctionCollectionData';
import { AuctionCollections } from '@sections/types';
import AboutUs from '@sections/AboutProject/AboutUs';

type AboutProjectProps = {
  signerAddress: string;
};

const AboutProject = ({ signerAddress }: AboutProjectProps) => {
  return (
    <div>
      <div className="desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px">
        <ContentTop signerAddress={signerAddress} />
        <Countdown
          countDownDate={AuctionCollectionData[
            AuctionCollections.avatarsForUkraine
          ].startsAt!.toISOString()}
        />
        <ContentChapter />
        <ContentCounterDaysAndRised />
        <AboutUs />
      </div>
      <ContentMain />
      <div className="desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px">
        <Partners />
        <ContentMedia />
        <SupportProject />
      </div>
      <SupportSticky targetAnchorId="countdown-banner" />
    </div>
  );
};

export default AboutProject;
