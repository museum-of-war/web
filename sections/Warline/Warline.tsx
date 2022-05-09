import React, { useEffect, useMemo, useRef, useState } from "react";
import Day from "./Day";
import DonatePopup from "./DonatePopup";
import SupportBanner from "./SupportBanner";
import { useViewPort } from "@hooks/useViewport";
import SupportSticky from "./SupportSticky";
import WarlineData from "./WarlineData";
import { DayType, EventType } from "@sections/types";
import { PopupProvider } from "../../providers/PopupProvider";
import Blurb from "@sections/AboutProject/Blurb";
import Toggle from "@components/Toggle";
import DropdownSelect from "@components/DropdownSelect";
import { BY_HOUR, BY_DAY, ALL_ARTS, ON_SALE, BY_NEWEST_BY_OLDEST_OPTIONS } from "./constants";
import SideMenu from "./SideMenu";

const Warline = () => {
  const { isMobile, isTablet } = useViewPort();
  const toggleComponentRef = useRef<HTMLDivElement>(null);
  const [showDonatePopup, setShowDonatePopup] = useState<boolean>(false);
  const [warlineData, setWarlineData] = useState<DayType[]>([]);
  const [view, setView] = useState<string>(BY_HOUR);
  const [byType, setByType] = useState<string>(ALL_ARTS);
  const [selectedByNewest, setSelectedByNewest] = useState<string | undefined>(BY_NEWEST_BY_OLDEST_OPTIONS[1]?.value);
  const [showSideMenu, setShowSideMenu] = useState<boolean>(false);

  const sordByNewestHandler = (v?: string) => setSelectedByNewest(v);

  const allEvents = useMemo(() => {
    return WarlineData.reduce((all: Array<EventType>, dayData: DayType) => {
      return [
        ...all,
        ...dayData.events,
      ]
    }, []);
  }, []);

  useEffect(() => {
    const height = toggleComponentRef.current?.offsetTop;
    function onScrollHandler() {
      if (window && window.scrollY > (height ?? 0)) {
        toggleComponentRef.current?.classList.add("sticky", "top-0", "w-screen", "bg-white", "shadow-lg", "tablet:-mx-72px", "tablet:py-32px", "tablet:px-72px", "mobile:-mx-24px", "mobile:px-24px", "mobile:py-16px");
      } else {
        toggleComponentRef.current?.classList.remove("sticky", "top-0", "w-screen", "bg-white", "shadow-lg", "tablet:-mx-72px", "tablet:py-32px", "tablet:px-72px", "mobile:-mx-24px", "mobile:px-24px", "mobile:py-16px");
      }
    }

    if (isMobile || isTablet) {
      window.addEventListener('scroll', onScrollHandler);
    }

    return () => window.removeEventListener('scroll', onScrollHandler);
  }, []);

  const sortByDate = (warlineData: DayType[]) => {
    if (selectedByNewest === BY_NEWEST_BY_OLDEST_OPTIONS[1]?.value) {
      return warlineData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    }
    return warlineData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }

  useEffect(() => {
    let result = sortByDate(WarlineData);
    setWarlineData([...result])
  }, [selectedByNewest]);

  return (
    <PopupProvider>
      <div className="">
        <div className="laptop:flex laptop:flex-row laptop:justify-between mt-20 mobile:mb-8% tablet:mb-0">
          <Blurb
            header="WARLINE"
            english="A chronology of events of the Ukrainian history of modern times, set in stone. The NFTs are facts accompanied by personal reflections. The formula of each NFT is clear and simple: each token is a real news piece from an official source and an illustration from artists, both Ukrainian and international."
            ukrainian="Відверта хронологія подій новітньої історії України. Експонати — це факти, супроводжені емоційними спогадами. Формула експонату проста і прозора, кожен токен — реальне новинне повідомлення з офіційних джерел та ілюстрація до нього від художників — як українських, так і світових."
          />
        </div>
        <div className={`w-full mb-48px tablet:flex mobile:block tablet:justify-between mobile:justify-center tablet:sticky laptop:static`} ref={toggleComponentRef}>
          <div className="flex">
            {!isMobile && (
              <div className="mr-32px mobile:w-100%">
                <Toggle active={view} onClick={setView} option1={BY_HOUR} option2={BY_DAY} />
              </div>
            )}
            {!isMobile && !isTablet && (
              <div>
                <Toggle active={byType} onClick={setByType} option1={ALL_ARTS} option2={ON_SALE} />
              </div>
            )}
          </div>
          {!isMobile && !isTablet ?
            <div>
              <DropdownSelect
                options={BY_NEWEST_BY_OLDEST_OPTIONS}
                selectedValue={selectedByNewest}
                isDark={false}
                onChange={sordByNewestHandler}
                className="ml-auto w-192px pl-32px" />
            </div>
            : <div>
              <button
                className="font-rblack flex mobile:w-100% mobile:justify-center items-center tablet:text-16px tablet:leading-44px mobile:text-14px mobile:leading-36px border-carbon border-2 rounded-full pl-32px pr-24px"
                onClick={() => setShowSideMenu(true)}
              >
                <span className="mr-12px">Filters and Sorting</span>
                <img src="img/filter_icon.svg" alt="filter" />
              </button>
            </div>}
        </div>
        {warlineData.map((dayData, idx, arr) => (
          <Day key={idx} dayData={dayData} daysCount={arr.length} allEvents={allEvents} pageView={view} selectedByNewest={selectedByNewest} />
        ))}
        <div className={`${isMobile || isTablet ? "mb-20%" : "ml-33%"}`}>
          <SupportBanner setShowDonatePopup={setShowDonatePopup} />
        </div>
      </div>
      <SupportSticky setShowDonatePopup={setShowDonatePopup} />
      {showDonatePopup && (<DonatePopup setShowDonatePopup={setShowDonatePopup} />)}
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