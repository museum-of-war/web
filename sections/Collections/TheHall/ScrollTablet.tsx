import React from 'react';
import { HallItemType } from '@sections/types';
import { CardTablet } from './CardTablet';
import { ComingSoon } from './ComingSoon';
import Link from 'next/link';

type ScrollTabletProps = {
  data: HallItemType[];
};
export const ScrollTablet: React.FC<ScrollTabletProps> = ({ data }) => (
  <div
    className="relative"
    style={{
      height: 552,
      marginTop: 20,
      marginBottom: 60,
      left: -72,
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
          top: 40,
          width: '100%',
          paddingLeft: 52,
          paddingRight: 92,
        }}
      >
        {data.map((datum) => (
          <Link
            key={datum.Tokenid}
            href={`/collection/hall/${datum.Tokenid}`}
            passHref
          >
            <a>
              <CardTablet key={datum.Tokenid} {...datum} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  </div>
);
