import React from 'react';
import { LinkButton } from '@components/LinkButton';
import { DayType } from '@sections/types';

type DaysNavigationProps = {
  onPrevDayClickHandler: () => void;
  onNextDayClickHandler: () => void;
  dayData: DayType;
  daysCount: number;
  direction: 'vertical' | 'horizontal';
};

function DaysNavigation(props: DaysNavigationProps) {
  const {
    dayData,
    onNextDayClickHandler,
    onPrevDayClickHandler,
    daysCount,
    direction = 'vertical',
  } = props;
  const wrapperCn =
    direction === 'horizontal' ? 'flex-row' : 'flex-col mb-10px';
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
          <img className="ml-10px" alt="Up" src={'img/up.svg'} />
        </span>
      )}
      {dayData.dayNo < daysCount && (
        <span
          onClick={onNextDayClickHandler}
          className="flex flex-row items-center hover:cursor-pointer"
        >
          <LinkButton>Day {dayData.dayNo + 1}</LinkButton>
          <img className="ml-10px" alt="Down" src={'img/down.svg'} />
        </span>
      )}
    </div>
  );
}

export default DaysNavigation;
