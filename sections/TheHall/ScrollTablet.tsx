import React from 'react';
import { HallItemType } from '@sections/types';
import { CardTablet } from '@sections/TheHall/CardTablet';

type ScrollTabletProps = {
  data: HallItemType[];
};
export const ScrollTablet: React.FC<ScrollTabletProps> = ({ data }) => (
  <div
    className="relative"
    style={{ height: 552, marginTop: 380, marginBottom: 60, left: -72 }}
  >
    <div className="absolute" style={{ height: 552, width: '100vw' }}>
      <div
        className="absolute z-1 bg-no-repeat"
        style={{
          backgroundImage: 'url(/img/theHall/bg-tablet.svg)',
          width: 492,
          height: 552,
          left: 72,
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
          <CardTablet key={datum.Id} {...datum} />
        ))}
      </div>
    </div>
  </div>
);
