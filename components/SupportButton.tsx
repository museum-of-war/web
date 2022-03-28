import React from "react";

type SupportButtonProps = {
  label: string;
  onClick: () => void;
  className?: string
};

const SupportButton = ({ label, onClick, className ="" }: SupportButtonProps) => {
  return (
    <div className={`mr-4%`}>
      <button
        className={`font-rblack text-white  rounded-full   border-2 px-25px py-12px whitespace-nowrap border-white mobile:text-12px laptop:text-14px desktop:text-16px
        hover:border-2 hover:shadow-[0_0_0_1px_rgba(255,255,255,1)] ${className} `}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default SupportButton;
