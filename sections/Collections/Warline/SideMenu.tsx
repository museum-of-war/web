import Button from '@components/Button';
import React, { SetStateAction, useCallback, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import {
  Sorting,
  SORTING_OPTIONS,
  TypeFilter,
  TYPE_FILTER_OPTIONS,
  ViewFilter,
  VIEW_OPTIONS,
} from './constants';

type SideMenuProps = {
  showSideMenu: boolean;
  setShowSideMenu: React.Dispatch<SetStateAction<boolean>>;
  typeFilter: TypeFilter;
  setTypeFilter: React.Dispatch<React.SetStateAction<TypeFilter>>;
  sorting: Sorting;
  setSorting: React.Dispatch<React.SetStateAction<Sorting>>;
  viewFilter: ViewFilter;
  setViewFilter: React.Dispatch<React.SetStateAction<ViewFilter>>;
};

const SelectedMark = () => (
  <span>
    <svg
      width="20"
      height="13"
      viewBox="0 0 20 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.7071 0.292893C20.0976 0.683417 20.0976 1.31658 19.7071 1.70711L8.77782 12.6364C8.34824 13.066 7.65176 13.066 7.22218 12.6364L0.292893 5.70711C-0.0976311 5.31658 -0.0976311 4.68342 0.292893 4.29289C0.683417 3.90237 1.31658 3.90237 1.70711 4.29289L8 10.5858L18.2929 0.292893C18.6834 -0.0976311 19.3166 -0.0976311 19.7071 0.292893Z"
        fill="black"
      />
    </svg>
  </span>
);

const SideMenu = ({
  showSideMenu,
  setShowSideMenu,
  typeFilter,
  setTypeFilter: setByType,
  sorting: selectedByNewest,
  setSorting: setSelectedByNewest,
  viewFilter,
  setViewFilter: setView,
}: SideMenuProps) => {
  const [selectSortBy, setSelectSortBy] = useState<Sorting>(selectedByNewest);
  const [selectType, setSelectType] = useState<TypeFilter>(typeFilter);
  const [viewInMenu, setViewInMenu] = useState<ViewFilter>(viewFilter);

  const applyFilersHandler = useCallback(() => {
    if (selectSortBy !== selectedByNewest) {
      setSelectedByNewest(selectSortBy);
    }
    if (selectType !== typeFilter) {
      setByType(selectType);
    }
    if (viewInMenu !== viewFilter) {
      setView(viewInMenu);
    }
    setShowSideMenu(false);
  }, [
    selectSortBy,
    selectType,
    selectedByNewest,
    setByType,
    setSelectedByNewest,
    setShowSideMenu,
    setView,
    typeFilter,
    viewFilter,
    viewInMenu,
  ]);

  const cancelAndCloseHandler = useCallback(() => {
    setSelectSortBy(selectedByNewest);
    setSelectType(typeFilter);
    setViewInMenu(viewFilter);
    setShowSideMenu(false);
  }, [selectedByNewest, setShowSideMenu, typeFilter, viewFilter]);

  return (
    <OutsideClickHandler onOutsideClick={cancelAndCloseHandler}>
      <div
        className={`fixed z-10 top-0 left-0 ease-in-out duration-300 ${
          showSideMenu ? 'translate-x-0' : '-translate-x-100%'
        } flex flex-col tablet:w-3/4 mobile:w-100% h-screen tablet:border-r-4 border-carbon bg-white tablet:p-48px mobile:p-24px`}
      >
        <div className="flex justify-between items-center">
          <p className="font-rblack text-32px leading-36px">Filters</p>
          <button className="cursor-pointer" onClick={cancelAndCloseHandler}>
            <img src="/img/close_icon.svg" alt="close" />
          </button>
        </div>

        <div className="tablet:mt-55px mobile:mt-35px">
          <p className="tablet:text-16px tablet:leading-48px mobile:text-14px mobile:leading-40px font-rlight">
            Sort by
          </p>
          {SORTING_OPTIONS.map(({ value, label }) => (
            <div
              key={value}
              className="font-rblack tablet:text-16px tablet:leading-48px mobile:text-14px mobile:leading-40px flex items-center justify-between"
            >
              <p
                onClick={() => setSelectSortBy(value)}
                className="cursor-pointer"
              >
                {label}
              </p>
              {selectSortBy === value && <SelectedMark />}
            </div>
          ))}
        </div>

        <div className="tablet:mt-48px mobile:mt-30px">
          <p className="tablet:text-16px tablet:leading-48px mobile:text-14px mobile:leading-40px font-rlight">
            Type
          </p>
          {TYPE_FILTER_OPTIONS.map(({ value, label }) => (
            <div
              key={value}
              className="font-rblack tablet:text-16px tablet:leading-48px mobile:text-14px mobile:leading-40px flex items-center justify-between"
            >
              <p
                onClick={() => setSelectType(value)}
                className="cursor-pointer"
              >
                {label}
              </p>
              {selectType === value && <SelectedMark />}
            </div>
          ))}
        </div>

        <div className="tablet:mt-48px mobile:mt-30px new_md:hidden">
          <p className="tablet:text-16px tablet:leading-48px mobile:text-14px mobile:leading-40px font-rlight">
            View
          </p>
          {VIEW_OPTIONS.map(({ value, label }) => (
            <div
              key={value}
              className="font-rblack tablet:text-16px tablet:leading-48px mobile:text-14px mobile:leading-40px flex items-center justify-between"
            >
              <p
                onClick={() => setViewInMenu(value)}
                className="cursor-pointer"
              >
                {label}
              </p>
              {viewInMenu === value && <SelectedMark />}
            </div>
          ))}
        </div>

        <div className="flex items-center tablet:justify-evenly mobile:justify-between mt-auto">
          <Button
            mode="secondary"
            label="Cancel"
            onClick={cancelAndCloseHandler}
            round={true}
            className="tablet:w-200px leading-24px tablet:text-16px mobile:text-14px mobile:w-124px"
          />
          <Button
            mode="primary"
            label="Apply"
            onClick={applyFilersHandler}
            round={true}
            className="tablet:w-200px leading-24px tablet:text-16px mobile:text-14px mobile:w-124px"
          />
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default SideMenu;
