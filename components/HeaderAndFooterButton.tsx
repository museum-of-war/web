import React from "react";

type HeaderButtonProps = {
  label: string;
  onClick: () => void;
};

const HeaderAndFooterButton = ({ label, onClick }: HeaderButtonProps) => {
  return (
    <div className="mr-4%">
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
