import Button from '@components/Button';
import Blurb from '@sections/AboutProject/Blurb';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { roadmapData } from './constants';
import { Ruler } from './Ruler';

const NUMBER_OF_RULER_BLOCKS = 16;
const RULER_BLOCKS_GAP = 20; // px

export const Roadmap: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPreviousDisabled, setPreviousDisabled] = useState<boolean>(true);
  const [isNextDisabled, setNextDisabled] = useState<boolean>(false);

  const onPrevious = useCallback(() => {
    scrollRef.current?.scroll({
      left: (currentIndex - 4) * NUMBER_OF_RULER_BLOCKS * RULER_BLOCKS_GAP,
      behavior: 'smooth',
    });
  }, [currentIndex]);

  const onNext = useCallback(() => {
    scrollRef.current?.scroll({
      left: (currentIndex + 4) * NUMBER_OF_RULER_BLOCKS * RULER_BLOCKS_GAP,
      behavior: 'smooth',
    });
  }, [currentIndex]);

  const onScroll = useCallback(() => {
    if (scrollRef.current?.scrollLeft != null) {
      setCurrentIndex(
        Math.ceil(
          scrollRef.current.scrollLeft /
            (NUMBER_OF_RULER_BLOCKS * RULER_BLOCKS_GAP),
        ),
      );

      setPreviousDisabled(scrollRef.current.scrollLeft === 0);
      setNextDisabled(
        scrollRef.current.scrollLeft ===
          scrollRef.current.scrollWidth - scrollRef.current.offsetWidth,
      );
    }
  }, []);

  useEffect(() => {
    const div = scrollRef.current;
    div?.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      div?.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return (
    <>
      <div className="relative desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px">
        <Blurb header="Roadmap" />

        <div className="mt-40px hidden desktop:flex justify-between">
          <Button
            mode={isPreviousDisabled ? 'secondary' : 'primary'}
            label="Previous"
            disabled={isPreviousDisabled}
            onClick={onPrevious}
          />
          <Button
            mode={isNextDisabled ? 'secondary' : 'primary'}
            label="Next"
            disabled={isNextDisabled}
            onClick={onNext}
          />
        </div>
      </div>

      <div
        ref={scrollRef}
        className="mt-32px tablet:mt-40px desktop:mt-48px flex snap-x overflow-x-auto first-line:no-scrollbar px-24px tablet:px-72px desktop:px-[calc(calc(100%_-_1440px)_/_2_+_132px)] scroll-pl-24px tablet:scroll-pl-72px desktop:scroll-pl-[calc(calc(100%_-_1440px)_/_2_+_132px)] highlight-group"
      >
        {roadmapData.map(({ title, subTitle, description }, index) => (
          <div key={index} className="snap-start group highlight-group-inner">
            <div className="relative">
              <Ruler numberOfBlocks={NUMBER_OF_RULER_BLOCKS} />
              <div className="bg-carbon w-6 h-full top-0 left-0 absolute -translate-y-full tablet:group-hover:translate-y-0 transition-transform duration-300" />
              <div className="mt-30px pr-30px tablet:pr-72px tablet:48px tablet:group-hover:translate-x-24px transition-all duration-300 highlight-item">
                <h3 className="font-rblack text-46px leading-40px tablet:text-50px tablet:leading-72px">
                  {title}
                </h3>
                <h4 className="font-rblack text-27px leading-30px tablet:text-32px tablet:leading-24px">
                  {subTitle}
                </h4>
                <p className="mt-10px tablet:mt-24px font-rlight text-14px leading-20px tablet:text-18px tablet:leading-24px">
                  {description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
