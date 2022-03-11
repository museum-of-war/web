import React from "react";
import { VscChromeClose } from "react-icons/vsc";

type HeaderAndFooterButtonProps = {
  label: string;
  onClick: () => void;
  underlined?: boolean;
  menu?: boolean;
};

const HeaderAndFooterButton = ({
  label,
  onClick,
  underlined,
  menu,
}: HeaderAndFooterButtonProps) => {
  return (
    <div className="mr-4% pb-5px">
      <button
        className={`font-rblack mobile:text-16px tablet:text-12px laptop:text-14px desktop:text-16px ${
          underlined && "border-b-4"
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
