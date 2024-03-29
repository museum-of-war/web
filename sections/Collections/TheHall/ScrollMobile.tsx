import React from 'react';
import { HallItemType } from '@sections/types';
import { CardMobile } from './CardMobile';
import { ComingSoon } from './ComingSoon';

type ScrollMobileProps = {
  data: HallItemType[];
};
export const ScrollMobile: React.FC<ScrollMobileProps> = ({ data }) => (
  <div
    className="relative"
    style={{ height: 400, marginTop: data.length ? 240 : 80, left: -24 }}
  >
    <div className="absolute" style={{ height: 400, width: '100vw' }}>
      <div
        className="z-1 absolute bg-no-repeat"
        style={{
          backgroundImage: 'url(/img/theHall/bg-mobile.svg)',
          width: 320,
          height: 340,
          left: 24,
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
        className="scrollbar-hidden flex absolute flex-row overflow-auto z-2 w-full"
        style={{
          top: -220,
        }}
      >
        {data.map((datum) => (
          <CardMobile key={datum.Id} {...datum} />
        ))}
      </div>
    </div>
  </div>
);
