import React, { useRef, useState } from 'react';
import { HallItemType } from '@sections/types';
import { CardDesktop } from '@sections/TheHall/CardDesktop';

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
export const ScrollDesktop: React.FC<ScrollProps> = ({ data }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeButton, setActiveButton] = useState({ next: true, prev: false });

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

    requestAnimationFrame(() => {
      if (!scrollRef.current) {
        return;
      }
      scrollRef.current.style.left = `${left}px`;
    });
  };

  return (
    <div
      className="relative the-hall-scroll"
      style={{
        height: 552,
        marginBottom: 120,
        marginTop: 100,
        width: '100vw',
      }}
    >
      <div
        className="absolute right-0 z-10 the-hall-buttons-wrapper"
        style={{ top: -110 }}
      >
        <PrevButton
          active={activeButton.prev}
          onClick={() => handleScroll(1)}
        />
        <NextButton
          active={activeButton.next}
          onClick={() => handleScroll(-1)}
        />
      </div>
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
          className="overflow-hidden absolute z-2"
          style={{
            top: -50,
            width: '100%',
          }}
        >
          <div
            ref={scrollRef}
            className="relative inline-flex flex-row the-hall-cards-wrapper"
          >
            {data.map((datum) => (
              <CardDesktop key={datum.Id} {...datum} />
            ))}
          </div>
          <div style={{ minWidth: 400 }} />
        </div>
      </div>
    </div>
  );
};
