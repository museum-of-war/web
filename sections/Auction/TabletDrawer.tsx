import { Dispatch, SetStateAction, useState } from 'react';
import Button from '@components/Button';
import { Drawer, TextField } from '@mui/material';
import { FILTER_OPTIONS_CATEGORIES, FILTER_OPTIONS_TYPES } from './cosntants';

const CloseSvg = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.70711 3.29289L12 10.5858L19.2929 3.2929C19.6834 2.90237 20.3166 2.90237 20.7071 3.2929C21.0976 3.68342 21.0976 4.31658 20.7071 4.70711L13.4141 12.0001L20.7071 19.2931C21.0976 19.6836 21.0976 20.3167 20.7071 20.7073C20.3166 21.0978 19.6834 21.0978 19.2929 20.7073L12 13.4144L4.70711 20.7073C4.31658 21.0978 3.68342 21.0978 3.29289 20.7073C2.90237 20.3167 2.90237 19.6836 3.29289 19.2931L10.5859 12.0001L3.29289 4.70711C2.90237 4.31658 2.90237 3.68342 3.29289 3.29289C3.68342 2.90237 4.31658 2.90237 4.70711 3.29289Z"
      fill="white"
    />
  </svg>
);

type SelectItemProps = {
  text: string;
  value: string;
  selected?: string;
  onChange: (v?: string) => void;
};
const SelectItem = ({ text, value, selected, onChange }: SelectItemProps) => {
  const handleChange = () => onChange(value);
  return (
    <div
      className="flex items-center justify-between hover:cursor-pointer py-10px"
      role="none"
      onClick={handleChange}
    >
      <p className="font-rblack text-14px ">{text}</p>
      {selected === value && (
        <span className="">
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
              fill="white"
            />
          </svg>
        </span>
      )}
    </div>
  );
};

type TabletDrawerProps = {
  priceRange: { from: string; to: string };
  selectedCategory?: string;
  isOpen: boolean;
  selectedType?: string;
  toggleDrawer: () => void;
  closeDrawer: () => void;
  handleChangeType: (v?: string) => void;
  handleChangeCategory: (v?: string) => void;
  setPriceRange: Dispatch<SetStateAction<{ from: string; to: string }>>;
};

const TabletDrawer = ({
  priceRange,
  isOpen,
  selectedType,
  selectedCategory,
  toggleDrawer,
  closeDrawer,
  setPriceRange,
  handleChangeType,
  handleChangeCategory,
}: TabletDrawerProps) => {
  const [selectedTypeState, setSelectedTypeState] = useState<
    string | undefined
  >(selectedType);
  const [selectedCategoryState, setSelectedCategoryState] = useState<
    string | undefined
  >(selectedCategory);
  const [priceRangeState, setPriceRangeState] = useState<{
    from: string;
    to: string;
  }>(priceRange);

  const handleClear = () => {
    setPriceRange({ from: '', to: '' });
    handleChangeCategory(FILTER_OPTIONS_CATEGORIES[0]?.value);
    handleChangeType(FILTER_OPTIONS_TYPES[0]?.value);
  };
  const handleApply = () => {
    setPriceRange(priceRangeState);
    handleChangeCategory(selectedCategoryState);
    handleChangeType(selectedTypeState);
  };

  return (
    <>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
        <div className="text-white tablet:pt-[54px] tablet:px-48px tablet:pb-48px mobile:pt-[35px] mobile:px-24px mobile:pb-20px">
          <div className="flex flex-col justify-between">
            <div className="flex justify-between items-center ">
              <h2 className="tablet:text-32px mobile:text-27px font-rblack">
                Filters
              </h2>
              <div onClick={closeDrawer}>
                <CloseSvg />
              </div>
            </div>
            <div>
              <p className="font-rlight tablet:text-16px mobile:text-14px opacity-70 tablet:mt-[54px] mobile:mt-[35px]">
                Price range
              </p>
              <div className="flex justify-between">
                <TextField
                  label="From"
                  multiline
                  variant="standard"
                  className="w-48% font-rlight-forced"
                  onChange={(event) =>
                    setPriceRangeState({
                      ...priceRangeState,
                      from: event.target.value,
                    })
                  }
                  value={priceRangeState.from}
                />
                <TextField
                  label="To"
                  multiline
                  variant="standard"
                  className="w-48% font-rlight-forced"
                  onChange={(event) =>
                    setPriceRangeState({
                      ...priceRangeState,
                      to: event.target.value,
                    })
                  }
                  value={priceRangeState.to}
                />
              </div>
            </div>
            <div>
              <p className="font-rlight tablet:text-16px mobile:text-14px opacity-70 tablet:mt-[48px] mobile:mt-[30px] pb-10px">
                Type
              </p>
              {FILTER_OPTIONS_TYPES.map((i) => (
                <SelectItem
                  text={i.text}
                  value={i.value}
                  key={i.value}
                  selected={selectedType}
                  onChange={(value) => setSelectedTypeState(value)}
                />
              ))}
            </div>
            <div>
              <p className="font-rlight text-16px opacity-70 tablet:mt-[48px] mobile:mt-[30px] pb-10px">
                Category
              </p>
              {FILTER_OPTIONS_CATEGORIES.map((i) => (
                <SelectItem
                  text={i.text}
                  value={i.value}
                  key={i.value}
                  selected={selectedCategoryState}
                  onChange={(value) => setSelectedCategoryState(value)}
                />
              ))}
            </div>
            <div className="flex justify-between tablet:mt-100px mobile:mt-20px">
              <Button
                mode="custom"
                label="Clear"
                onClick={handleClear}
                className="bg-carbon border-2 border-white w-48%"
              />
              <Button
                mode="custom"
                label="Apply"
                onClick={handleApply}
                className="bg-white text-carbon w-48%"
              />
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default TabletDrawer;
