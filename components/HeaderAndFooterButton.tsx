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
    <div className="mr-10px pb-5px">
      <button
        className={`font-rblack mobile:text-16px tablet:text-16px laptop:text-14px desktop:text-16px py-5px ${
          underlined ? "border-b-4 border-carbon ": "border-transparent "
        } border-b-4  hover:border-solid hover:border-carbon`}
        onClick={onClick}
      >
        {label}
        {menu && !label && <VscChromeClose size={40} />}
      </button>
    </div>
  );
};

export default HeaderAndFooterButton;
