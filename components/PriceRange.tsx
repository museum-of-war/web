import React, { Dispatch, SetStateAction, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import Button from './Button';

type PriceRangeProps = {
  value: { from: string; to: string };
  className?: string;
  setValue: Dispatch<SetStateAction<{ from: string; to: string }>>;
};

function PriceRange({ className, value, setValue }: PriceRangeProps) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [priceRange, setPriceRange] = useState<{ from: string; to: string }>(
    value,
  );

  const handleClick = () => setOpen((state) => !state);
  const handleClear = () => {
    setValue({ from: '', to: '' });
    setPriceRange({ from: '', to: '' });
  };
  const handleClose = () => setOpen(false);

  return (
    <OutsideClickHandler onOutsideClick={handleClose}>
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className={`inline-flex justify-between align-center w-full bg-white dark:bg-carbon
                    border-2 border-carbon dark:border-white
                    px-20px py-10px whitespace-nowrap
                    font-rblack text-14px
                    hover:bg-carbon-800
                    rounded-full ${className}`}
            aria-expanded="true"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <span className="mr-10px">Price Range</span>
            <span className={`${!isOpen ? 'rotate-180' : ''}`}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 7.41381L21.2929 16.7067C21.6834 17.0972 22.3166 17.0972 22.7071 16.7067C23.0976 16.3162 23.0976 15.683 22.7071 15.2925L12.7778 5.3632C12.3482 4.93362 11.6518 4.93362 11.2222 5.3632L1.29289 15.2925C0.902368 15.683 0.902368 16.3162 1.29289 16.7067C1.68342 17.0972 2.31658 17.0972 2.70711 16.7067L12 7.41381Z"
                  fill="white"
                />
              </svg>
            </span>
          </button>
        </div>

        {isOpen && (
          <div
            className="origin-top-right z-10 absolute bg-dropdown  w-[296px] top-60px rounded-[12px] shadow-3xl p-24px"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div className="flex justify-between mb-24px font-rlight-forced">
              <input
                type="text"
                placeholder="From"
                className="w-48% outline-none bg-transparent border-b-4 border-white"
                onChange={(event) =>
                  setPriceRange({ ...priceRange, from: event.target.value })
                }
                value={priceRange.from}
              />
              <input
                type="text"
                placeholder="To"
                className="w-48% outline-none bg-transparent border-b-4 border-white"
                onChange={(event) =>
                  setPriceRange({ ...priceRange, to: event.target.value })
                }
                value={priceRange.to}
              />
            </div>
            <div className="flex justify-between">
              <Button
                mode="custom"
                label="Clear"
                onClick={handleClear}
                className="bg-dropdown border-2 border-white "
              />
              <Button
                mode="custom"
                label="Apply"
                onClick={() => setValue(priceRange)}
                className="bg-white text-carbon "
              />
            </div>
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
}

export default PriceRange;
