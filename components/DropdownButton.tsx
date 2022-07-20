import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import Link from 'next/link';
import { useAppRouter } from '@hooks/useAppRouter';
import { useViewPort } from '@hooks/useViewport';

type SelectOption = {
  title: string;
  url: string;
  id: string;
  description: string;
};
type DropdownButtonProps = {
  options: SelectOption[];
  isDark?: boolean;
  label: string;
  wrapperClassName?: string;
  onClick?: () => void;
};

function DropdownButton({
  options,
  isDark = true,
  label,
  wrapperClassName = '',
  onClick,
}: DropdownButtonProps) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const { route } = useAppRouter();
  const { isMobile, isDesktop } = useViewPort();

  const underlined = route
    ? options.some(({ url }) => route.match(url))
    : false;
  const handleClick = () => setOpen((state) => !state);
  const handleSelect = () => {
    if (onClick) onClick();

    setOpen(false);
  };
  const handleClose = () => setOpen(false);

  return (
    <OutsideClickHandler onOutsideClick={handleClose}>
      <div className={`relative text-left ${wrapperClassName}`}>
        <button
          className={`mt-[4px] font-rblack mobile:text-16px tablet:text-16px desktop:text-16px ${
            underlined
              ? 'border-b-4 border-carbon dark:border-white'
              : 'border-b-4 border-transparent'
          } hover:border-solid ${
            isDark ? 'hover:border-white' : 'hover:border-carbon'
          } whitespace-nowrap flex flex-row h-[36px] flex items-center desktop:mb-0 tablet:mb-0 mobile:mb-32px`}
          onClick={handleClick}
        >
          {label}
          <span className={`${!isOpen ? '' : 'rotate-180'} ml-[13px]`}>
            {isDark ? (
              <img alt="down-white" src={'/img/down-white.svg'} />
            ) : (
              <img alt="down" src={'/img/down.svg'} />
            )}
          </span>
        </button>
        {isOpen && (
          <div
            className={`${
              isMobile
                ? ''
                : 'origin-top-right z-10 top-40px absolute shadow-3xl w-400px py-12px'
            } ${isMobile ? 'py-16px' : ''} ${
              isDark ? 'bg-dropdown' : 'bg-white'
            } w-full`}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            {options.map((i) => (
              <div
                className={`flex items-center justify-between hover:cursor-pointer ${
                  isDark ? 'hover:bg-dark_gray' : 'hover:bg-beige'
                } ${route.match(i.url) ? 'bg-beige' : ''}`}
                role="none"
                key={i.id}
                onClick={handleSelect}
              >
                <Link href={i.url}>
                  <div
                    className={`font-rblack text-14px py-12px ${
                      isDesktop ? 'px-24px' : ''
                    } ${isMobile ? 'px-32px' : ''}`}
                  >
                    <div className="text-16px desktop:leading-36px tablet:leading-36px mobile:leading-32px">
                      {i.title}
                    </div>
                    <div className="text-14px desktop:leading-24px tablet:leading-24px mobile:leading-20px font-rlight">
                      {i.description}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
}

export default DropdownButton;
