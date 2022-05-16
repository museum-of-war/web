import React from 'react';
import { VscChromeClose } from 'react-icons/vsc';

type HeaderAndFooterButtonProps = {
  label: string;
  onClick: () => void;
  underlined?: boolean;
  menu?: boolean;
  wrapperClassName?: string;
  isDarkTheme?: boolean;
};

const HeaderAndFooterButton = ({
  label,
  onClick,
  underlined,
  menu,
  wrapperClassName = '',
  isDarkTheme = false,
}: HeaderAndFooterButtonProps) => {
  return (
    <div className={`${wrapperClassName}`}>
      <button
        className={`mt-[4px] font-rblack mobile:text-16px tablet:text-16px desktop:text-16px ${
          underlined
            ? 'border-b-4 border-carbon dark:border-white'
            : 'border-b-4 border-transparent'
        } hover:border-solid ${
          isDarkTheme ? 'hover:border-white' : 'hover:border-carbon'
        }`}
        onClick={onClick}
      >
        {label}
        {menu && !label && <VscChromeClose size={40} />}
      </button>
    </div>
  );
};

export default HeaderAndFooterButton;
