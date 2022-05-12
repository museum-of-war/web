import SupportProject from '@sections/AboutProject/SupportProject';
import SupportSticky from '@sections/AboutProject/SupportSticky';
import React from 'react';
import ContentMission from './ContentMission';
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

type AboutProjectProps = {
  signerAddress: string;
  handleConnect: () => void;
};

const AboutProject = ({ signerAddress, handleConnect }: AboutProjectProps) => {
  return (
    <div>
      <ContentTop signerAddress={signerAddress} handleConnect={handleConnect} />
      <Countdown
        countDownDate={AuctionCollectionData[
          AuctionCollections.avatarsForUkraine
        ].startsAt!.toISOString()}
      />
      <ContentChapter />
      <ContentMission />
      <ContentCounterDaysAndRised />
      <ContentMain
        signerAddress={signerAddress}
        handleConnect={handleConnect}
      />
      <SupportProject />
      <Partners />
      <ContentMedia />
      <SupportSticky targetAnchorId="countdown-banner" />
    </div>
  );
};

export default AboutProject;
