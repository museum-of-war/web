import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
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
    }}
  >
    <img
      className="w-auto object-cover"
      src={ImageSrc}
      style={{
        minHeight: 250,
        maxWidth: 248,
      }}
    />
    <div
      style={{
        width: 248,
        padding: 24,
      }}
      className="bg-carbon text-white h-auto"
    >
      <h3 style={{ fontSize: 27, lineHeight: '30px' }} className="font-rblack">
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
        className="flex flex-row items-center justify-between"
        style={{
          lineHeight: '48px',
          marginTop: 20,
        }}
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
