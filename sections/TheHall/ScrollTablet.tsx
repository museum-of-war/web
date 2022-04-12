import React from 'react';
import { HallItemType } from '@sections/types';
import { CardTablet } from '@sections/TheHall/CardTablet';

type ScrollTabletProps = {
  data: HallItemType[];
};
export const ScrollTablet: React.FC<ScrollTabletProps> = ({ data }) => (
  <div>
    <div className="relative" style={{ height: 552, marginTop: 400 }}>
      <div
        className="absolute z-1 bg-no-repeat"
        style={{
          backgroundImage: 'url(/img/theHall/bg-tablet.svg)',
          width: 492,
          height: 552,
        }}
      />
      <div
        className="flex flex-row z-2 absolute overflow-auto scrollbar-hidden"
        style={{
          top: -340,
          width: '100%',
        }}
      >
        {data.map((datum) => (
          <CardTablet {...datum} />
        ))}
      </div>
    </div>
  </div>
);
