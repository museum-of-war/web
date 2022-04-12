import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import SocialMediaButton from '@components/SocialMediaButton';
import { HallItemType } from '@sections/types';

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
      margin: 20,
    }}
  >
    <img
      className="w-auto object-cover"
      src={ImageSrc}
      style={{
        minHeight: 552,
        maxWidth: 544,
      }}
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
        <LinesEllipsis
          text={TweetText}
          maxLine="8"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      </div>
      <div
        className="flex flex-row items-center justify-between mt-20px"
        style={{
          lineHeight: '48px',
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
