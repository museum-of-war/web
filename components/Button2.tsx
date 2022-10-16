import React from 'react';

type SupportButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};

const Button2 = ({ label, onClick, className = '' }: SupportButtonProps) => {
  return (
    <div className={`mr-4% pb-5px  `}>
      <button
        className={`font-rblack text-white rounded-full border-2 px-[72px] whitespace-nowrap border-white
          mobile:text-12px desktop:text-16px tablet:leading-[48px] mobile:leading-[60px]
          hover:border-2 hover:shadow-[0_0_0_1px_rgba(255,255,255,1)] ${className}`}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
};

export default Button2;
