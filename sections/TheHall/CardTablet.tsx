import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
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
        <LinesEllipsis
          text={TweetText}
          maxLine="4"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      </div>
      <div
        style={{
          lineHeight: '48px',
          marginTop: 20,
        }}
        className="flex justify-between flex-row items-center"
      >
        <span className="font-rlight">@{TwitterUsername}</span>
        <SocialMediaButton
          customClasses="border-white border-2 rounded-3xl"
          twitter
          href={TwitterUrl}
        />
      </div>
    </div>
  </div>
);
