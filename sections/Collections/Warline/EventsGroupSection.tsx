import React from 'react';
import { InView } from 'react-intersection-observer';
import { EventsGroup, EventType } from '@sections/types';
import { Sorting, ViewFilter } from './constants';
import SectionsNavigation from './SectionsNavigation';
import Event from './Event';

type EventsGroupSectionProps = {
  eventsGroup: EventsGroup;
  viewFilter: ViewFilter;
  sorting: Sorting;
  prevSectionLabel?: string;
  nextSectionLabel?: string;
  onInViewChanged?: (inView: boolean) => void;
  onScrollToPrevSection: () => void;
  onScrollToNextSection: () => void;
  onBuy: (event: EventType) => void;
  onJoinList: (event: EventType) => void;
};

const EventsGroupSection = ({
  eventsGroup,
  viewFilter,
  sorting,
  prevSectionLabel,
  nextSectionLabel,
  onInViewChanged,
  onScrollToPrevSection,
  onScrollToNextSection,
  onBuy,
  onJoinList,
}: EventsGroupSectionProps) => {
  return (
    <InView as="div" onChange={(inView) => onInViewChanged?.(inView)}>
      <div className="flex flex-col desktop:flex-row gap-20px tablet:gap-28px desktop:gap-48px">
        <div className="pb-8px tablet:pb-16px desktop:sticky desktop:top-120px flex flex-col tablet:flex-row desktop:flex-col tablet:justify-between desktop:justify-start desktop:self-start desktop:w-[248px] border-carbon border-b-4 desktop:border-0">
          <div className="desktop:pb-16px flex flex-col border-carbon desktop:border-b-4">
            <p className="text-32px mr-20px font-rblack">{eventsGroup.name}</p>
            <p className="text-14px mb-16px tablet:mb-0 font-rlight">
              {eventsGroup.description}
            </p>
          </div>

          <SectionsNavigation
            prevLabel={prevSectionLabel}
            nextLabel={nextSectionLabel}
            onPrevClick={onScrollToPrevSection}
            onNextClick={onScrollToNextSection}
            className={`desktop:mt-24px flex justify-between items-center tablet:self-end desktop:self-auto tablet:grid grid-flow-col gap-32 desktop:flex ${
              sorting === Sorting.NEWEST ? 'flex-row-reverse' : ''
            }`}
          />
        </div>

        <div
          className={`flex-1 grid 
          ${
            viewFilter === ViewFilter.BY_HOUR
              ? 'grid-cols-1 gap-32px tablet:gap-48px'
              : ''
          }
          ${
            viewFilter === ViewFilter.BY_DAY
              ? 'grid-cols-2 tablet:grid-cols-3 gap-24px tablet:gap-48px'
              : ''
          }
          ${
            viewFilter === ViewFilter.BY_DROP
              ? 'grid-cols-3 tablet:grid-cols-4 new_md:grid-cols-5 gap-10px tablet:gap-16px'
              : ''
          }
        `}
        >
          {eventsGroup.events.map((event, index) => (
            <Event
              key={index}
              eventData={event}
              idx={index}
              showTime={viewFilter === ViewFilter.BY_DAY}
              extendedView={viewFilter === ViewFilter.BY_HOUR}
              small={viewFilter === ViewFilter.BY_DROP}
              onBuy={() => onBuy(event)}
              onJoinList={() => onJoinList(event)}
            />
          ))}
        </div>
      </div>
    </InView>
  );
};

export default EventsGroupSection;
