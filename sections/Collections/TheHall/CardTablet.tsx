import React from 'react';
import ScaledImage from '@components/ScaledImage';
import { HallItemType } from '@sections/types';

const MAX_WIDTH = 528;

export const CardTablet: React.FC<HallItemType> = ({ ImageSrc }) => (
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
  </div>
);
