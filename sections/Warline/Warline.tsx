import React, { useEffect, useMemo, useRef, useState } from 'react';
import Day from './Day';
import DonatePopup from './DonatePopup';
import SupportBanner from './SupportBanner';
import { useViewPort } from '@hooks/useViewport';
import SupportSticky from './SupportSticky';
import WarlineData from './WarlineData';
import { DayType, EventType } from '@sections/types';
import { PopupProvider } from '@providers/PopupProvider';
import Blurb from '@sections/AboutProject/Blurb';
import Toggle, { ToggleOptionsType } from '@components/Toggle';

const Warline = () => {
  const { isMobile, isTablet } = useViewPort();
  const toggleComponentRef = useRef<HTMLDivElement>(null);
  const [showDonatePopup, setShowDonatePopup] = useState<boolean>(false);
  const [view, setView] = useState<ToggleOptionsType>('hours');
  const allEvents = useMemo(() => {
    return WarlineData.reduce((all: Array<EventType>, dayData: DayType) => {
      return [...all, ...dayData.events];
    }, []);
  }, []);

  useEffect(() => {
    const height = toggleComponentRef.current?.offsetTop;
    function onScrollHandler() {
      if (window && window.scrollY > (height ?? 0)) {
        toggleComponentRef.current?.classList.add(
          'sticky',
          'top-0',
          'w-screen',
          'bg-white',
          'shadow-lg',
          'tablet:-mx-72px',
          'tablet:py-32px',
          'tablet:px-72px',
          'mobile:-mx-24px',
          'mobile:px-24px',
          'mobile:py-16px',
        );
      } else {
        toggleComponentRef.current?.classList.remove(
          'sticky',
          'top-0',
          'w-screen',
          'bg-white',
          'shadow-lg',
          'tablet:-mx-72px',
          'tablet:py-32px',
          'tablet:px-72px',
          'mobile:-mx-24px',
          'mobile:px-24px',
          'mobile:py-16px',
        );
      }
    }

    if (isMobile || isTablet) {
      window.addEventListener('scroll', onScrollHandler);
    }

    return () => window.removeEventListener('scroll', onScrollHandler);
  }, []);

  return (
    <PopupProvider>
      <div>
        <div className="desktop:flex desktop:flex-row desktop:justify-between mt-20 mobile:mb-8% tablet:mb-0">
          <Blurb
            header="WARLINE"
            english="A chronology of events of the Ukrainian history of modern times, set in stone. The NFTs are facts accompanied by personal reflections. The formula of each NFT is clear and simple: each token is a real news piece from an official source and an illustration from artists, both Ukrainian and international."
            ukrainian="Відверта хронологія подій новітньої історії України. Експонати — це факти, супроводжені емоційними спогадами. Формула експонату проста і прозора, кожен токен — реальне новинне повідомлення з офіційних джерел та ілюстрація до нього від художників — як українських, так і світових."
          />
        </div>
        {(isMobile || isTablet) && (
          <div className="w-full mb-48px" ref={toggleComponentRef}>
            <Toggle active={view} onClick={setView} />
          </div>
        )}
        {WarlineData.map((dayData, idx, arr) => (
          <Day
            key={idx}
            dayData={dayData}
            daysCount={arr.length}
            allEvents={allEvents}
            pageView={view}
            setView={setView}
          />
        ))}
        <div className={`${isMobile || isTablet ? 'mb-20%' : 'ml-33%'}`}>
          <SupportBanner setShowDonatePopup={setShowDonatePopup} />
        </div>
      </div>
      <SupportSticky setShowDonatePopup={setShowDonatePopup} />
      {showDonatePopup && (
        <DonatePopup setShowDonatePopup={setShowDonatePopup} />
      )}
    </PopupProvider>
  );
};

export default Warline;
