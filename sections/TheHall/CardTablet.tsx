import React from 'react';
import Dotdotdot from 'react-dotdotdot';
import SocialMediaButton from '@components/SocialMediaButton';
import { HallItemType } from '@sections/types';

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
    <img
      src={ImageSrc}
      style={{
        minHeight: 528,
        maxWidth: 528,
      }}
      className="w-auto object-cover"
    />
    <div
      style={{
        width: 456,
        marginLeft: 130,
        padding: 48,
      }}
      className="bg-carbon text-white h-auto"
    >
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
