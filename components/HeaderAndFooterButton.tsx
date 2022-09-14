import React from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import Link from 'next/link';

type HeaderAndFooterButtonProps = {
  label: string;
  location?: string;
  onClick?: () => void;
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
  location,
}: HeaderAndFooterButtonProps) => {
  const content = (
    <div className={`${wrapperClassName}`}>
      <button
        className={`mt-[4px] font-rblack mobile:text-16px tablet:text-16px desktop:text-16px h-[36px] ${
          underlined
            ? 'border-b-4 border-carbon dark:border-white'
            : `${menu ? '' : 'border-b-4'} border-transparent`
        } hover:border-solid ${
          isDarkTheme ? 'hover:border-white' : 'hover:border-carbon'
        } whitespace-nowrap`}
        onClick={onClick}
      >
        {label}
        {menu && !label && <VscChromeClose size={40} />}
      </button>
    </div>
  );

  return location ? (
    <Link href={location} passHref>
      <a>{content}</a>
    </Link>
  ) : (
    content
  );
};

export default HeaderAndFooterButton;
