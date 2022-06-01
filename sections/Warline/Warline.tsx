import React, { useEffect, useMemo, useRef, useState } from 'react';
import Day from './Day';
import DonatePopup from './DonatePopup';
import SupportBanner from './SupportBanner';
import { useViewPort } from '@hooks/useViewport';
import { useWeb3Modal } from '@hooks/useWeb3Modal';
import { useIsMounted } from '@hooks/useIsMounted';
import SupportSticky from './SupportSticky';
import WarlineData, { Drop2Data } from './WarlineData';
import SideMenu from './SideMenu';
import { DayType, EventType } from '@sections/types';
import { PopupProvider } from '@providers/PopupProvider';
import Blurb from '@sections/AboutProject/Blurb';
import Toggle from '@components/Toggle';
import {
  BY_HOUR,
  BY_DAY,
  ALL_ARTS,
  ON_SALE,
  BY_NEWEST_BY_OLDEST_OPTIONS,
} from './constants';
import DropdownSelect from '@components/DropdownSelect';

const SCROLL_BUFFER_DAYS = 2;

const Warline = () => {
  const { isMobile, isTablet } = useViewPort();
  const toggleComponentRef = useRef<HTMLDivElement>(null);
  const [showDonatePopup, setShowDonatePopup] = useState<boolean>(false);
  const [warlineData, setWarlineData] = useState<DayType[]>([]);
  const [view, setView] = useState<string>(BY_HOUR);
  const [byType, setByType] = useState<string>(ALL_ARTS);
  const [selectedByNewest, setSelectedByNewest] = useState<string | undefined>(
    BY_NEWEST_BY_OLDEST_OPTIONS[0]?.value,
  );
  const [showSideMenu, setShowSideMenu] = useState<boolean>(false);

  const sordByNewestHandler = (v?: string) => setSelectedByNewest(v);

  const { canMint } = useWeb3Modal();

  const isMounted = useIsMounted();

  const sortByTypeHandler = async () => {
    const isMinting = await canMint();
    if (!isMounted.current) {
      return;
    }
    if (isMinting && byType === ON_SALE) {
      const drop2 = [...Drop2Data];
      const toSetData = sortByDate(drop2);
      setWarlineData(toSetData);
    }
    if (!isMinting && byType === ON_SALE) {
      setWarlineData([]);
    }
    if (byType === ALL_ARTS) {
      let result = sortByDate(WarlineData);
      setWarlineData([...result]);
    }
  };

  useEffect(() => {
    sortByTypeHandler();
  }, [byType]);

  const allEvents = useMemo(() => {
    return WarlineData.reduce((all: Array<EventType>, dayData: DayType) => {
      return [...all, ...dayData.events];
    }, []);
  }, []);

  useEffect(() => {
    const height = toggleComponentRef.current?.offsetTop;
    let padding = 132;
    if (window && window.innerWidth >= 1500) {
      padding += (window.innerWidth - 1500) / 2;
    }

    function onScrollHandler() {
      if (window && window.scrollY > (height ?? 0)) {
        if (window && window.innerWidth >= 1500 && toggleComponentRef.current) {
          toggleComponentRef.current.style.paddingLeft = `${padding}px`;
          toggleComponentRef.current.style.paddingRight = `${padding}px`;
        }
        toggleComponentRef.current?.classList.add(
          'mobile:sticky',
          'top-0',
          'w-screen',
          'bg-white',
          'shadow-lg',
          'desktop:py-24px',
          'desktop:fixed',
          'desktop:left-60px',
          'desktop:px-72px',
          'tablet:-mx-72px',
          'tablet:py-32px',
          'tablet:px-72px',
          'mobile:-mx-24px',
          'mobile:px-24px',
          'mobile:py-16px',
        );
      } else {
        if (window && window.innerWidth >= 1500 && toggleComponentRef.current) {
          toggleComponentRef.current.style.paddingLeft = `0`;
          toggleComponentRef.current.style.paddingRight = `0`;
        }
        toggleComponentRef.current?.classList.remove(
          'mobile:sticky',
          'top-0',
          'w-screen',
          'bg-white',
          'shadow-lg',
          'desktop:py-24px',
          'desktop:fixed',
          'desktop:left-60',
          'desktop:px-72px',
          'tablet:-mx-72px',
          'tablet:py-32px',
          'tablet:px-72px',
          'mobile:-mx-24px',
          'mobile:px-24px',
          'mobile:py-16px',
        );
      }
    }

    window.addEventListener('scroll', onScrollHandler);

    return () => window.removeEventListener('scroll', onScrollHandler);
  }, []);

  const sortByDate = (warlineData: DayType[]) => {
    if (selectedByNewest === BY_NEWEST_BY_OLDEST_OPTIONS[1]?.value) {
      const sorted = warlineData.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      );
      sorted.forEach((day) => {
        day.events.sort(
          (a, b) =>
            new Date(`${day.date} ${a.Time}`).getTime() -
            new Date(`${day.date} ${b.Time}`).getTime(),
        );
      });
      return sorted;
    }
    const sorted = warlineData.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
    sorted.forEach((day) => {
      day.events.sort(
        (a, b) =>
          new Date(`${day.date} ${b.Time}`).getTime() -
          new Date(`${day.date} ${a.Time}`).getTime(),
      );
    });
    return sorted;
  };

  useEffect(() => {
    if (byType === ALL_ARTS) {
      let result = sortByDate(WarlineData);
      setWarlineData([...result]);
    }
    if (byType === ON_SALE) {
      let result = sortByDate([...Drop2Data]);
      setWarlineData([...result]);
    }
  }, [selectedByNewest]);

  const [daysShown, setDaysShown] = useState(SCROLL_BUFFER_DAYS);

  return (
    <PopupProvider>
      <div className="relative desktop:container mx-auto desktop:px-132px tablet:px-72px mobile:px-24px">
        <div className="desktop:flex desktop:flex-row desktop:justify-between mt-20 mobile:mb-8% tablet:mb-0">
          <Blurb
            header="WARLINE"
            english="A chronology of events of the Ukrainian history of modern times, set in stone. The NFTs are facts accompanied by personal reflections. The formula of each NFT is clear and simple: each token is a real news piece from an official source and an illustration from artists, both Ukrainian and international."
            ukrainian="Відверта хронологія подій новітньої історії України. Експонати — це факти, супроводжені емоційними спогадами. Формула експонату проста і прозора, кожен токен — реальне новинне повідомлення з офіційних джерел та ілюстрація до нього від художників — як українських, так і світових."
          />
        </div>
        <div
          className={`w-full z-10 mb-48px tablet:flex mobile:block tablet:justify-between mobile:justify-center desktop:z-10`}
          ref={toggleComponentRef}
        >
          <div className="flex">
            {!isMobile && (
              <div className="mr-32px mobile:w-100%">
                <Toggle
                  active={view}
                  onClick={setView}
                  option1={BY_HOUR}
                  option2={BY_DAY}
                />
              </div>
            )}
            {!isMobile && !isTablet && (
              <div>
                <Toggle
                  active={byType}
                  onClick={setByType}
                  option1={ALL_ARTS}
                  option2={ON_SALE}
                />
              </div>
            )}
          </div>
          {!isMobile && !isTablet ? (
            <div>
              <DropdownSelect
                options={BY_NEWEST_BY_OLDEST_OPTIONS}
                selectedValue={selectedByNewest}
                isDark={false}
                onChange={sordByNewestHandler}
                className="ml-auto w-192px pl-32px"
              />
            </div>
          ) : (
            <div>
              <button
                className="font-rblack flex mobile:w-100% mobile:justify-center items-center tablet:text-16px tablet:leading-44px mobile:text-14px mobile:leading-36px border-carbon border-2 rounded-full pl-32px pr-24px"
                onClick={() => setShowSideMenu(true)}
              >
                <span className="mr-12px">Filters and Sorting</span>
                <img src="img/filter_icon.svg" alt="filter" />
              </button>
            </div>
          )}
        </div>

        {warlineData.map(
          (dayData, idx, arr) =>
            idx < daysShown && (
              <Day
                key={idx}
                dayData={dayData}
                daysCount={arr.length}
                allEvents={allEvents}
                pageView={view}
                selectedByNewest={selectedByNewest}
                onInViewChanged={(inView) =>
                  inView &&
                  setDaysShown((daysShown) =>
                    Math.max(daysShown, idx + SCROLL_BUFFER_DAYS + 1),
                  )
                }
              />
            ),
        )}
        {warlineData.length > daysShown && (
          <p className="text-center text-24px font-bold">Loading...</p>
        )}
        <div className={`${isMobile || isTablet ? 'mb-20%' : 'ml-33%'}`}>
          <SupportBanner setShowDonatePopup={setShowDonatePopup} />
        </div>
      </div>
      <SupportSticky setShowDonatePopup={setShowDonatePopup} />
      {showDonatePopup && (
        <DonatePopup setShowDonatePopup={setShowDonatePopup} />
      )}
      <SideMenu
        showSideMenu={showSideMenu}
        setShowSideMenu={setShowSideMenu}
        byType={byType}
        setByType={setByType}
        selectedByNewest={selectedByNewest}
        setSelectedByNewest={setSelectedByNewest}
        view={view}
        setView={setView}
      />
    </PopupProvider>
  );
};

export default Warline;
