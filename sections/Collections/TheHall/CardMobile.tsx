import React from 'react';
import ScaledImage from '@components/ScaledImage';
import { HallItemType } from '@sections/types';

export const CardMobile: React.FC<HallItemType> = ({ ImageSrc }) => (
  <div
    className="bg-transparent min-w-full flex flex-col items-start"
    style={{
      height: 372,
      margin: 20,
      minWidth: '90%',
    }}
  >
    <ScaledImage
      className="w-auto h-full object-cover"
      src={ImageSrc}
      containerStyle={{
        minHeight: 250,
      }}
    />
  </div>
);
