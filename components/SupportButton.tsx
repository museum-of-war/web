import React from "react";

type SupportButtonProps = {
  label: string;
  onClick: () => void;
};

const SupportButton = ({ label, onClick }: SupportButtonProps) => {
  return (
    <div className={`mr-4% pb-5px  `}>
      <button
        className="font-rblack text-white  rounded-full   border-2 px-25px py-12px whitespace-nowrap order-white mobile:text-12px laptop:text-14px desktop:text-16px"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default SupportButton;
