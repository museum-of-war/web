import React from 'react';
import Dotdotdot from 'react-dotdotdot';
import SocialMediaButton from '@components/SocialMediaButton';
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
    <img
      className="w-auto object-cover"
      src={ImageSrc}
      style={{
        minHeight: 250,
        maxWidth: '100%',
      }}
    />
    <div
      style={{
        padding: 24,
      }}
      className="bg-carbon text-white h-auto"
    >
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
