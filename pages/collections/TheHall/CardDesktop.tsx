import React from 'react';
import Dotdotdot from 'react-dotdotdot';
import SocialMediaButton from '@components/SocialMediaButton';
import ScaledImage from '@components/ScaledImage';
import { HallItemType } from '@sections/types';

const MAX_WIDTH = 544;

export const CardDesktop: React.FC<HallItemType> = ({
  TwitterUrl,
  TwitterUsername,
  TwitterAccountName,
  ImageSrc,
  TweetText,
}) => (
  <div
    className="flex flex-row items-start bg-transparent min-w-full"
    style={{
      height: 552,
      marginLeft: 50,
    }}
  >
    <ScaledImage
      className="w-auto object-cover"
      src={ImageSrc}
      style={{
        minHeight: 552,
        maxWidth: MAX_WIDTH,
      }}
      breakpoints={[
        {
          lowerBound: 'desktop',
          width: MAX_WIDTH,
        },
      ]}
    />
    <div
      style={{
        width: 396,
        marginTop: 40,
        padding: 48,
      }}
      className="bg-carbon h-auto text-white"
    >
      <h3 style={{ fontSize: 32 }} className="font-rblack leading-9">
        {TwitterAccountName}
      </h3>
      <div style={{ fontSize: 16, marginTop: 24 }} className="font-rlight">
        <Dotdotdot clamp={8}>{TweetText}</Dotdotdot>
      </div>
      <div
        className="flex flex-row items-center justify-between mt-20px"
        style={{
          lineHeight: '48px',
        }}
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
