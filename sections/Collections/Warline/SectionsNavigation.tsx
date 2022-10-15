import React, { HTMLAttributes } from 'react';
import { LinkButton } from '@components/LinkButton';

type SectionsNavigationProps = {
  prevLabel?: string;
  nextLabel?: string;
  className?: HTMLAttributes<HTMLDivElement>['className'];
  onPrevClick: () => void;
  onNextClick: () => void;
};

const SectionsNavigation = ({
  prevLabel,
  nextLabel,
  className,
  onPrevClick,
  onNextClick,
}: SectionsNavigationProps) => {
  return (
    <div className={className}>
      {prevLabel ? (
        <span
          onClick={onPrevClick}
          className="py-4px flex flex-row items-center cursor-pointer"
        >
          <LinkButton>{prevLabel}</LinkButton>
          <img className="ml-10px" alt="Up" src={'/img/up.svg'} />
        </span>
      ) : (
        <span />
      )}
      {nextLabel && (
        <span
          onClick={onNextClick}
          className="py-4 flex flex-row items-center hover:cursor-pointer desktop:ml-0 tablet:ml-32px mobile:ml-0"
        >
          <LinkButton>{nextLabel}</LinkButton>
          <img className="ml-10px" alt="Down" src="/img/down.svg" />
        </span>
      )}
    </div>
  );
};

export default SectionsNavigation;
