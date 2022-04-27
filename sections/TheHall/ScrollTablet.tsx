import React from 'react';
import { HallItemType } from '@sections/types';
import { CardTablet } from '@sections/TheHall/CardTablet';
import { ComingSoon } from '@sections/TheHall/ComingSoon';

type ScrollTabletProps = {
  data: HallItemType[];
};
export const ScrollTablet: React.FC<ScrollTabletProps> = ({ data }) => (
  <div
    className="relative the-hall-scroll"
    style={{
      height: 552,
      marginTop: data.length ? 380 : 96,
      marginBottom: 60,
      width: '100vw',
    }}
  >
    <div className="absolute" style={{ height: 552, width: '100vw' }}>
      <div
        className="absolute z-1 bg-no-repeat"
        style={{
          backgroundImage: 'url(/img/theHall/bg-tablet.svg)',
          width: 492,
          height: 552,
          left: 72,
          ...{
            ...(data.length
              ? {}
              : {
                  left: 0,
                  right: 0,
                  margin: 'auto',
                }),
          },
        }}
      />
      {data.length ? null : <ComingSoon />}
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
