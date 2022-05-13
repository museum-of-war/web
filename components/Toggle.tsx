import React from 'react';

// export type ToggleOptionsType = "days" | "hours";

type ToggleProps = {
  active: string;
  onClick: (value: string) => void;
  option1: string;
  option2: string;
}

function Toggle({ active, onClick, option1, option2 }: ToggleProps) {
  const activeCN = 'text-white bg-carbon hover:bg-carbon'
  return (
    <div
      className="w-248px p-4 bg-white font-rblack leading-none border-2 border-carbon rounded-full inline-flex"
    >
      <button
        className={`w-50%
        transition-colors duration-300 ease-in
        focus:outline-none
        rounded-full
        px-25px
        ${active === option1 ? activeCN : "hover:bg-beige"}`}
        id={option1}
        onClick={() => onClick(option1)}
      >
        <span className="text-14px leading-36px">{option1}</span>
      </button>
      <button
        className={`w-50% 
        transition-colors duration-300 ease-in
        focus:outline-none
        rounded-full
        px-25px
        ${active === option2 ? activeCN : "hover:bg-beige"}`}
        id={option2}
        onClick={() => onClick(option2)}
      >
        <span className="text-14px leading-36px">{option2}</span>
      </button>
    </div>
  );
}

export default Toggle;
