import React from 'react';
import Dotdotdot from 'react-dotdotdot';
import SocialMediaButton from '@components/SocialMediaButton';
import ScaledImage from '@components/ScaledImage';
import { HallItemType } from '@sections/types';

export const CardMobile: React.FC<HallItemType> = ({
  TwitterUrl,
  TwitterUsername,
  TwitterAccountName,
  ImageSrc,
  TweetText,
}) => (
  <div
    className="bg-transparent min-w-full flex flex-col items-start"
    style={{
      height: 552,
      margin: 20,
      minWidth: '80%',
    }}
  >
    <ScaledImage
      className="w-auto h-full object-cover"
      src={ImageSrc}
      containerStyle={{
        minHeight: 250,
      }}
    />
    <div className="bg-carbon text-white h-auto p-24px mt-[-1px]">
      <h3 style={{ fontSize: 27, lineHeight: '30px' }} className="font-rblack">
        {TwitterAccountName}
      </h3>
      <div style={{ fontSize: 14, marginTop: 24 }} className="font-rlight">
        <Dotdotdot clamp={4}>{TweetText}</Dotdotdot>
      </div>
      <div
        className="flex flex-row items-center justify-between"
        style={{
          lineHeight: '48px',
          marginTop: 20,
        }}
      >
        <span style={{ fontSize: 12 }} className="font-rlight">
          @{TwitterUsername}
        </span>
        <SocialMediaButton
          customClasses="border-white border-2 mobile:rounded-20px box-content"
          customStyle={{ borderRadius: '50%' }}
          twitter
          href={TwitterUrl}
        />
      </div>
    </div>
  </div>
);
