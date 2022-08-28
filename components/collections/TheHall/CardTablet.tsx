import React from 'react';
import Dotdotdot from 'react-dotdotdot';
import SocialMediaButton from '@components/SocialMediaButton';
import ScaledImage from '@components/ScaledImage';
import { HallItemType } from '@sections/types';

const MAX_WIDTH = 528;

export const CardTablet: React.FC<HallItemType> = ({
  TwitterUrl,
  TwitterUsername,
  TwitterAccountName,
  ImageSrc,
  TweetText,
}) => (
  <div
    className="bg-transparent min-w-full flex flex-col items-start"
    style={{
      margin: 20,
    }}
  >
    <ScaledImage
      src={ImageSrc}
      style={{
        minHeight: 528,
        maxWidth: MAX_WIDTH,
      }}
      className="w-auto object-cover"
      breakpoints={[
        {
          lowerBound: 'tablet',
          width: MAX_WIDTH,
        },
      ]}
    />
    <div className="bg-carbon text-white h-auto p-48px w-[456px] ml-[130px] mt-[-1px]">
      <h3 style={{ fontSize: 32, lineHeight: '24px' }} className="font-rblack">
        {TwitterAccountName}
      </h3>
      <div style={{ fontSize: 16, marginTop: 24 }} className="font-rlight">
        <Dotdotdot clamp={4}>{TweetText}</Dotdotdot>
      </div>
      <div
        style={{
          lineHeight: '48px',
          marginTop: 20,
        }}
        className="flex justify-between flex-row items-center"
      >
        <span className="font-rlight" style={{ fontSize: 14 }}>
          @{TwitterUsername}
        </span>
        <SocialMediaButton
          customClasses="border-white border-2 box-content"
          customStyle={{ borderRadius: '50%' }}
          twitter
          href={TwitterUrl}
        />
      </div>
    </div>
  </div>
);
