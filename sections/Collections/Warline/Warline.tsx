import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import DonatePopup from '@sections/Collections/Warline/DonatePopup';
import SupportBanner from '@sections/Collections/Warline/SupportBanner';
import {
  DropTokenIdOffsets,
  eventsGroupByDay,
  eventsGroupByDrop,
} from '@constants/collections/Warline';
import { EventType } from '@sections/types';
import { PopupProvider } from '@providers/PopupProvider';
import Blurb from '@sections/AboutProject/Blurb';
import Toggle from '@components/Toggle';
import DropdownSelect from '@components/DropdownSelect';
import {
  Sorting,
  SORTING_OPTIONS,
  TypeFilter,
  TYPE_FILTER_OPTIONS,
  ViewFilter,
  VIEW_OPTIONS,
} from './constants';
import EventsGroupSection from './EventsGroupSection';
import SideMenu from './SideMenu';
import { filterByType, sortEventGroups } from './utils';
import MintingModal from '@components/MintingModal';
import { JOINLIST_LINK } from '@sections/constants';
import { openInNewTab } from '@sections/utils';
import { WarlineDrop } from '@constants/collections/Warline/constants';
import ReactGA from 'react-ga4';

const SCROLL_BUFFER_BLOCKS = 2;

type DropToMint = {
  tokenId: number;
  drop: WarlineDrop;
};

const Warline = () => {
  const filtersRef = useRef<HTMLDivElement>(null);

  const [viewFilter, setViewFilter] = useState<ViewFilter>(ViewFilter.BY_HOUR);
  const [typeFilter, setTypeFilter] = useState<TypeFilter>(TypeFilter.ALL_ARTS);
  const [sorting, setSorting] = useState<Sorting>(Sorting.NEWEST);

  const [dropToMint, setDropToMint] = useState<DropToMint | null>(null);

  const [showDonatePopup, setShowDonatePopup] = useState<boolean>(false);
  const [showSideMenu, setShowSideMenu] = useState<boolean>(false);
  const [isFiltersSticked, setFiltersSticked] = useState<boolean>(false);

  const [daysShown, setDaysShown] = useState(SCROLL_BUFFER_BLOCKS);

  const eventsGroups =
    viewFilter === ViewFilter.BY_DROP ? eventsGroupByDrop : eventsGroupByDay;

  const eventsGroupsByType = useMemo(
    () => filterByType(eventsGroups, typeFilter),
    [eventsGroups, typeFilter],
  );
  const eventsGroupsSorted = useMemo(
    () => sortEventGroups(eventsGroupsByType, sorting),
    [eventsGroupsByType, sorting],
  );

  useEffect(() => {
    function onScrollHandler() {
      if (filtersRef.current) {
        const { top } = filtersRef.current.getBoundingClientRect();
        setFiltersSticked(top === 0);
      }
    }
    onScrollHandler();
    window.addEventListener('scroll', onScrollHandler);

    return () => window.removeEventListener('scroll', onScrollHandler);
  }, []);

  const scrollToSection = useCallback(
    (index) => () => {
      const targetPosition = document.getElementById(`events-group-${index}`);

      window.scroll({
        top: targetPosition?.offsetTop,
        behavior: 'smooth',
      });
    },
    [],
  );

  const onSetViewFilter = useCallback(
    (nextViewFilter) => {
      setViewFilter(nextViewFilter);

      if (nextViewFilter === ViewFilter.BY_DROP) {
        setDaysShown(SCROLL_BUFFER_BLOCKS);
        scrollToSection(0)();
      }
    },
    [scrollToSection],
  );

  const onInViewChanged = useCallback(
    (index: number) => (inView: boolean) =>
      inView &&
      setDaysShown((daysShown) =>
        Math.max(daysShown, index + SCROLL_BUFFER_BLOCKS + 1),
      ),
    [],
  );

  const onBuy = useCallback((event: EventType) => {
    setDropToMint({
      drop: event.WarlineDrop,
      tokenId:
        +event.Tokenid -
        (event.WarlineDrop ? DropTokenIdOffsets[event.WarlineDrop] : 0),
    });
    ReactGA.send({
      category: 'warline',
      action: 'open_buy_modal',
      label: event.Tokenid,
    });
  }, []);

  const onJoinList = useCallback((event: EventType) => {
    openInNewTab(JOINLIST_LINK);
    ReactGA.send({
      category: 'warline',
      action: 'join_list',
      label: event.Tokenid,
    });
  }, []);

  return (
    <PopupProvider>
      <div className="relative">
        <div className="desktop:container mx-auto px-24px tablet:px-72px desktop:px-132px">
          <div className="desktop:flex desktop:flex-row desktop:justify-between mt-20 pb-36px new_md:pb-0">
            <Blurb
              header="WARLINE"
              english="A chronology of events of the Ukrainian history of modern times, set in stone. The NFTs are facts accompanied by personal reflections. The formula of each NFT is clear and simple: each token is a real news piece from an official source and an illustration from artists, both Ukrainian and international."
              ukrainian="Відверта хронологія подій новітньої історії України. Експонати — це факти, супроводжені емоційними спогадами. Формула експонату проста і прозора, кожен токен — реальне новинне повідомлення з офіційних джерел та ілюстрація до нього від художників — як українських, так і світових."
            />
          </div>
        </div>

        <div
          ref={filtersRef}
          className={`z-10 bg-white sticky -mt-16px tablet:-mt-24px top-0 transition-shadow duration-300 ease-in ${
            isFiltersSticked ? 'shadow-lg' : ''
          }`}
        >
          <div className="desktop:container mx-auto py-16px tablet:py-24px px-24px tablet:px-72px desktop:px-132px flex tablet:justify-between">
            <div className="grid grid-flow-col gap-32px">
              <div className="mobile:hidden new_md:block">
                <Toggle
                  selected={viewFilter}
                  onChange={onSetViewFilter}
                  options={VIEW_OPTIONS}
                />
              </div>
              <div className="mobile:hidden desktop:block">
                <Toggle
                  selected={typeFilter}
                  onChange={setTypeFilter}
                  options={TYPE_FILTER_OPTIONS}
                />
              </div>
            </div>
            <div className="mobile:hidden desktop:block">
              <DropdownSelect
                options={SORTING_OPTIONS}
                selected={sorting}
                isDark={false}
                onChange={setSorting}
                className="ml-auto w-192px pl-32px"
              />
            </div>

            <button
              className="font-rblack flex flex-1 new_md:flex-none mobile:justify-center items-center tablet:text-16px tablet:leading-44px mobile:text-14px mobile:leading-36px border-carbon border-2 rounded-full pl-32px pr-24px desktop:hidden"
              onClick={() => setShowSideMenu(true)}
            >
              <span className="mr-12px">Filters and Sorting</span>
              <img src="/img/filter_icon.svg" alt="filter" />
            </button>
          </div>
        </div>

        <div className="desktop:container mt-16px desktop:mt-32px mx-auto px-24px tablet:px-72px desktop:px-132px grid grid-flow-row gap-48px tablet:gap-72px">
          {eventsGroupsSorted.map(
            (eventsGroup, index) =>
              index < daysShown && (
                <div id={`events-group-${index}`} key={index}>
                  <EventsGroupSection
                    eventsGroup={eventsGroup}
                    viewFilter={viewFilter}
                    sorting={sorting}
                    prevSectionLabel={
                      index > 0
                        ? eventsGroupsSorted[index - 1]?.name
                        : undefined
                    }
                    nextSectionLabel={
                      index < eventsGroupsSorted.length - 1
                        ? eventsGroupsSorted[index + 1]?.name
                        : undefined
                    }
                    onScrollToPrevSection={scrollToSection(index - 1)}
                    onScrollToNextSection={scrollToSection(index + 1)}
                    onBuy={onBuy}
                    onJoinList={onJoinList}
                    onInViewChanged={onInViewChanged(index)}
                  />
                </div>
              ),
          )}
          {eventsGroupsSorted.length > daysShown && (
            <p className="text-center text-24px font-bold">Loading...</p>
          )}
          <div className="mb-20% desktop:mb-0 desktop:ml-33%">
            <SupportBanner setShowDonatePopup={setShowDonatePopup} />
          </div>
        </div>
      </div>

      {showDonatePopup && (
        <DonatePopup setShowDonatePopup={setShowDonatePopup} />
      )}

      {dropToMint && (
        <MintingModal
          setOpenMintingModal={() => setDropToMint(null)}
          drop={dropToMint.drop}
          tokenId={dropToMint.tokenId}
        />
      )}

      <SideMenu
        showSideMenu={showSideMenu}
        setShowSideMenu={setShowSideMenu}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        sorting={sorting}
        setSorting={setSorting}
        viewFilter={viewFilter}
        setViewFilter={onSetViewFilter}
      />
    </PopupProvider>
  );
};

export default Warline;
