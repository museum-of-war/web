import Button from '@components/Button';
import { useViewPort } from '@hooks/useViewport';
import React, { SetStateAction, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { ALL_ARTS, BY_DAY, BY_HOUR, BY_NEWEST_BY_OLDEST_OPTIONS, ON_SALE } from './constants';

type SideMenuProps = {
  showSideMenu: boolean;
  setShowSideMenu: React.Dispatch<SetStateAction<boolean>>;
  byType: string;
  setByType: React.Dispatch<React.SetStateAction<string>>;
  selectedByNewest: string | undefined;
  setSelectedByNewest: React.Dispatch<React.SetStateAction<string | undefined>>;
  view: string;
  setView: React.Dispatch<React.SetStateAction<string>>;
}

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
)

const SideMenu = ({ showSideMenu, setShowSideMenu, byType, setByType, selectedByNewest, setSelectedByNewest, view, setView }: SideMenuProps) => {
  const [selectSortBy, setSelectSortBy] = useState(selectedByNewest);
  const [selectType, setSelectType] = useState(byType);
  const [viewInMenu, setViewInMenu] = useState(view);

  const { isMobile } = useViewPort()

  const applyFilersHandler = () => {
    if (selectSortBy !== selectedByNewest) {
      setSelectedByNewest(selectSortBy);
    }
    if (selectType !== byType) {
      setByType(selectType);
    }
    if (viewInMenu !== view) {
      setView(viewInMenu);
    }
    setShowSideMenu(false);
  }

  return (
    <OutsideClickHandler onOutsideClick={() => setShowSideMenu(false)}>
      <div className={`fixed top-0 left-0 ease-in-out duration-300 ${showSideMenu ? 'translate-x-0' : '-translate-x-100%'} flex flex-col tablet:w-3/4 mobile:w-100% h-screen tablet:border-r-4 border-carbon bg-white tablet:p-48px mobile:p-24px`}>

        <div className="flex justify-between items-center">
          <p className="font-rblack text-32px leading-36px">Filters</p>
          <button className="cursor-pointer" onClick={() => setShowSideMenu(false)}>
            <img src="img/close_icon.svg" alt="cliose" />
          </button>
        </div>

        <div className="tablet:mt-55px mobile:mt-35px">
          <p className="tablet:text-16px tablet:leading-48px mobile:text-14px mobile:leading-40px font-rlight">Sort by</p>
          {BY_NEWEST_BY_OLDEST_OPTIONS.map((option) => (
            <div key={option.value} className="font-rblack tablet:text-16px tablet:leading-48px mobile:text-14px mobile:leading-40px flex items-center justify-between">
              <p
                onClick={() => setSelectSortBy(option.value)}
                className="cursor-pointer"
              >
                {option.text}
              </p>
              {selectSortBy === option.value && <SelectedMark />}
            </div>
          ))}
        </div>

        <div className="tablet:mt-48px mobile:mt-30px">
          <p className="tablet:text-16px tablet:leading-48px mobile:text-14px mobile:leading-40px font-rlight">Type</p>
          {[ALL_ARTS, ON_SALE].map((option) => (
            <div key={option} className="font-rblack tablet:text-16px tablet:leading-48px mobile:text-14px mobile:leading-40px flex items-center justify-between">
              <p
                onClick={() => setSelectType(option)}
                className="cursor-pointer"
              >
                {option}
              </p>
              {selectType === option && <SelectedMark />}
            </div>
          ))}
        </div>

        {isMobile && (
          <div className="tablet:mt-48px mobile:mt-30px">
            <p className="tablet:text-16px tablet:leading-48px mobile:text-14px mobile:leading-40px font-rlight">View</p>
            {[BY_DAY, BY_HOUR].map((option) => (
              <div key={option} className="font-rblack tablet:text-16px tablet:leading-48px mobile:text-14px mobile:leading-40px flex items-center justify-between">
                <p
                  onClick={() => setViewInMenu(option)}
                  className="cursor-pointer"
                >
                  {option}
                </p>
                {viewInMenu === option && <SelectedMark />}
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center tablet:justify-evenly mobile:justify-between mt-auto">
          <Button
            mode="secondary"
            label="Cancel"
            onClick={() => setShowSideMenu(false)}
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
  )
}

export default SideMenu;
