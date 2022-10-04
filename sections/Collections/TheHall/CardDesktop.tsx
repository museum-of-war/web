import React from 'react';
import ScaledImage from '@components/ScaledImage';
import { HallItemType } from '@sections/types';

const MAX_WIDTH = 544;

export const CardDesktop: React.FC<HallItemType> = ({ ImageSrc }) => (
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
  </div>
);
