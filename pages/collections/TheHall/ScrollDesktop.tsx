import React, { useEffect, useRef, useState } from 'react';
import { HallItemType } from '@sections/types';
import { CardDesktop } from './CardDesktop';
import { ComingSoon } from './ComingSoon';

const CARD_WIDTH = 990;

const PrevButton = ({
  active,
  onClick,
}: {
  active: boolean;
  onClick: () => void;
}) => (
  <button type="button" onClick={onClick} disabled={!active}>
    <img
      alt="Previous"
      src={'/img/down.svg'}
      className={`rotate-90 flex-grow-0 rounded-full p-7px tablet:p-[11px] border-carbon border ${
        active ? 'cursor-pointer active:translate-y-1' : 'opacity-20'
      }`}
    />
  </button>
);

const NextButton = ({
  active,
  onClick,
}: {
  active: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className="bg-transparent border-0"
    disabled={!active}
  >
    <img
      alt="Next"
      src={'/img/down.svg'}
      style={{ marginLeft: 24 }}
      className={`-rotate-90 flex-grow-0 rounded-full p-7px tablet:p-[11px] border-carbon border ${
        active ? 'cursor-pointer active:translate-y-1' : 'opacity-20'
      } `}
    />
  </button>
);

type ScrollProps = {
  data: HallItemType[];
};
export const ScrollDesktop: React.FC<ScrollProps> = ({ data }, ref) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const [activeButton, setActiveButton] = useState({
    next: true,
    prev: false,
  });

  const handleScroll = (direction: number) => {
    if (!scrollRef.current) {
      return;
    }

    const left =
      (parseInt(scrollRef.current.style.left) || 0) + direction * CARD_WIDTH;

    if (left === 0) {
      setActiveButton({ next: true, prev: false });
    } else if (left === -1 * (data.length - 1) * CARD_WIDTH) {
      setActiveButton({ next: false, prev: true });
    } else {
      setActiveButton({ next: true, prev: true });
    }

    if (!scrollRef.current) {
      return;
    }
    scrollRef.current.style.left = `${left}px`;
  };

  useEffect(() => {
    const handleResize = () => {
      const element = document.querySelector('.the-hall-wrapper');

      if (element && backgroundRef.current && scrollRef.current) {
        // @ts-ignore
        const { offsetLeft: offset } = element;

        backgroundRef.current.style.left = `${offset}px`;
        scrollRef.current.style.paddingLeft = `${offset + 40}px`;
      }

      if (buttonsRef.current && element) {
        // @ts-ignore
        const { offsetLeft: offset } = element;

        buttonsRef.current.style.right = `${offset}px`;
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div style={{ paddingBottom: data.length ? 750 : 650 }} />
      <div
        className="absolute"
        style={{
          height: 800,
          width: '100vw',
          overflow: 'hidden',
          left: 0,
          top: data.length ? 420 : 270,
          zIndex: 100,
        }}
      >
        {data.length > 1 ? (
          <div className="absolute right-0 z-10 top-0" ref={buttonsRef}>
            <PrevButton
              active={activeButton.prev}
              onClick={() => handleScroll(1)}
            />
            <NextButton
              active={activeButton.next}
              onClick={() => handleScroll(-1)}
            />
          </div>
        ) : null}
        <div
          className="absolute"
          style={{
            height: 552,
            width: '100vw',
            top: 100,
          }}
        >
          <div
            ref={backgroundRef}
            className="absolute z-1 bg-no-repeat"
            style={{
              backgroundImage: 'url(/img/theHall/bg-desktop.svg)',
              width: 828,
              height: 552,
              top: 100,
              ...{
                ...(data.length
                  ? {}
                  : {
                      margin: 'auto',
                      right: 0,
                      left: 0,
                    }),
              },
            }}
          />
          {data.length ? null : <ComingSoon />}
          <div
            className="overflow-hidden absolute z-2"
            style={{
              width: '100%',
            }}
          >
            <div
              ref={scrollRef}
              className="relative inline-flex flex-row the-hall-cards-wrapper"
              style={{ left: 0 }}
            >
              {data.map((datum) => (
                <CardDesktop key={datum.Id} {...datum} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
