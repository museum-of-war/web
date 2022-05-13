import React from 'react';
import { LinkButton } from '@components/LinkButton';
import { DayType } from '@sections/types';
import { OLDEST } from './constants';

type DaysNavigationProps = {
  onPrevDayClickHandler: () => void;
  onNextDayClickHandler: () => void;
  dayData: DayType;
  daysCount: number;
  direction: 'vertical' | 'horizontal';
  selectedByNewest: string | undefined;
};

function DaysNavigation(props: DaysNavigationProps) {
  const {
    dayData,
    onNextDayClickHandler,
    onPrevDayClickHandler,
    daysCount,
    direction = 'vertical',
    selectedByNewest,
  } = props;
  const wrapperCn =
    direction === 'horizontal'
      ? 'flex-row'
      : selectedByNewest === OLDEST
      ? 'flex-col mb-10px'
      : 'flex-col-reverse mb-10px';
  return (
    <div
      className={`flex justify-between items-center font-rblack mt-24px ${wrapperCn}`}
    >
      {dayData.dayNo > 1 && (
        <span
          onClick={onPrevDayClickHandler}
          className="flex flex-row items-center hover:cursor-pointer"
        >
          <LinkButton>Day {dayData.dayNo - 1}</LinkButton>
          <img
            className="ml-10px"
            alt={selectedByNewest === OLDEST ? 'Up' : 'Down'}
            src={
              props.selectedByNewest === OLDEST ? 'img/up.svg' : 'img/down.svg'
            }
          />
        </span>
      )}
      {dayData.dayNo < daysCount && (
        <span
          onClick={onNextDayClickHandler}
          className="flex flex-row items-center hover:cursor-pointer desktop:ml-0 tablet:ml-32px mobile:ml-0"
        >
          <LinkButton>Day {dayData.dayNo + 1}</LinkButton>
          <img
            className="ml-10px"
            alt={selectedByNewest === OLDEST ? 'Down' : 'Up'}
            src={
              props.selectedByNewest === OLDEST ? 'img/down.svg' : 'img/up.svg'
            }
          />
        </span>
      )}
    </div>
  );
}

export default DaysNavigation;
