import React from "react";

type HeaderAndFooterButtonProps = {
  label: string;
  onClick: () => void;
  underlined?: boolean;
};

const HeaderAndFooterButton = ({
  label,
  onClick,
  underlined,
}: HeaderAndFooterButtonProps) => {
  return (
    <div className={`mr-4% ${underlined && "border-b-4"} pb-5px `}>
      <button
        className="font-rblack mobile:text-12px laptop:text-14px desktop:text-16px"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default HeaderAndFooterButton;
