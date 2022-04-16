import React, { useEffect, useRef } from 'react';
import { HallItemType } from '@sections/types';
import { CardDesktop } from '@sections/TheHall/CardDesktop';

// @ts-ignore
function useHorizontalScroll() {
  const elRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const element = elRef.current;

    if (element) {
      const onWheel = (event: WheelEvent) => {
        if (event.deltaY === 0 || event.deltaX !== 0) return;
        if (
          !(element.scrollLeft === 0 && event.deltaY < 0) &&
          !(
            element.scrollWidth -
              element.clientWidth -
              Math.round(element.scrollLeft) ===
              0 && event.deltaY > 0
          )
        ) {
          event.preventDefault();
        }
        element.scrollTo({
          left: element.scrollLeft + event.deltaY,
        });
      };

      element.addEventListener('wheel', onWheel);

      return () => element.removeEventListener('wheel', onWheel);
    }
  }, []);

  return elRef;
}

type ScrollProps = {
  data: HallItemType[];
};
export const ScrollDesktop: React.FC<ScrollProps> = ({ data }) => {
  // const scrollRef = useHorizontalScroll();

  return (
    <div
      className="relative"
      style={{
        height: 552,
        marginBottom: 120,
        marginTop: 100,
        left: -132,
      }}
    >
      <div
        className="absolute"
        style={{
          height: 552,
          width: '100vw',
        }}
      >
        <div
          className="absolute z-1 bg-no-repeat"
          style={{
            backgroundImage: 'url(/img/theHall/bg-desktop.svg)',
            width: 828,
            height: 552,
            left: 132,
          }}
        />
        <div
          className="flex flex-row overflow-auto absolute z-2 scrollbar-hidden"
          style={{
            top: -50,
            width: '100%',
          }}
          // ref={scrollRef}
        >
          {data.map((datum) => (
            <CardDesktop key={datum.Id} {...datum} />
          ))}
        </div>
      </div>
    </div>
  );
};
