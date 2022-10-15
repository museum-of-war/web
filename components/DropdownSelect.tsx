import React, { useMemo, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { ValueLabel } from 'types';

export const ArrowSvg = ({ isDark = true }) => (
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
      fill={isDark ? 'white' : 'black'}
    />
  </svg>
);

type DropdownSelectProps<T> = {
  selected: T;
  options: ValueLabel<T>[];
  onChange: (value: T) => void;
  className?: string;
  isDark?: boolean;
};

function DropdownSelect<T>({
  className,
  options,
  selected,
  onChange,
  isDark = true,
}: DropdownSelectProps<T>) {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleClick = () => setOpen((state) => !state);

  const handleChangeValue = (value: T) => () => {
    onChange(value);
    setOpen(false);
  };

  const handleClose = () => setOpen(false);

  const selectedLabel = useMemo(
    () => options.find((i) => i.value === selected)?.label,
    [options, selected],
  );

  return (
    <OutsideClickHandler onOutsideClick={handleClose}>
      <div className="relative text-left min-w-250px">
        <div className="w-full">
          <button
            type="button"
            className={`flex justify-between items-center w-full bg-white dark:bg-carbon
                    border-2 border-carbon dark:border-white
                    px-20px leading-44px whitespace-nowrap
                    font-rblack text-14px ${
                      isDark ? 'hover:bg-carbon-800' : 'bg-white'
                    }
                    rounded-full ${className}`}
            aria-expanded="true"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <span className="mr-10px">{selectedLabel}</span>
            <span className={`h-100% flex ${!isOpen ? 'rotate-180' : ''}`}>
              <ArrowSvg isDark={isDark} />
            </span>
          </button>
        </div>

        {isOpen && (
          <div
            className={`origin-top-right z-10 absolute ${
              isDark ? 'bg-dropdown' : 'bg-white'
            } w-full top-60px rounded-[12px] shadow-3xl`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            {options.map(({ value, label }) => (
              <div
                key={label}
                className="flex items-center justify-between hover:cursor-pointer"
                role="none"
                onClick={handleChangeValue(value)}
              >
                <p className="font-rblack text-14px py-12px px-24px">{label}</p>
                {selected === value && (
                  <span className="mr-12px">
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
                        fill={isDark ? 'white' : 'black'}
                      />
                    </svg>
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
}

export default DropdownSelect;
