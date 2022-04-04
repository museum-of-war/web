import React from "react";
import { VscChromeClose } from "react-icons/vsc";

type HeaderAndFooterButtonProps = {
  label: string;
  onClick: () => void;
  underlined?: boolean;
  menu?: boolean;
  wrapperClassName?: string;
};

const HeaderAndFooterButton = ({
  label,
  onClick,
  underlined,
  menu,
  wrapperClassName = '',
}: HeaderAndFooterButtonProps) => {
  return (
    <div className={`${wrapperClassName}`}>
      <button
        className={`font-rblack mobile:text-16px tablet:text-16px laptop:text-14px desktop:text-16px ${
          underlined ? "pb-5px border-b-4 border-carbon": "border-transparent"
        } hover:border-solid hover:border-carbon`}
        onClick={onClick}
      >
        {label}
        {menu && !label && <VscChromeClose size={40} />}
      </button>
    </div>
  );
};

export default HeaderAndFooterButton;
