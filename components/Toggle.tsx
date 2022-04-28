import React from 'react';

export type ToggleOptionsType = 'days' | 'hours';

type ToggleProps = {
  active: ToggleOptionsType;
  onClick: (value: ToggleOptionsType) => void;
};

function Toggle({ active, onClick }: ToggleProps) {
  const activeCN = 'text-white bg-carbon hover:bg-carbon';
  return (
    <div className="w-full p-4 bg-white font-rblack leading-none border-2 border-carbon rounded-full inline-flex">
      <button
        className={`w-50%
        transition-colors duration-300 ease-in
        focus:outline-none
        rounded-full
        px-32px py-7
        mr-4
        ${active === 'days' ? activeCN : 'hover:bg-beige'}`}
        id="days"
        onClick={() => onClick('days')}
      >
        <span>Days</span>
      </button>
      <button
        className={`w-50% 
        transition-colors duration-300 ease-in
        focus:outline-none
        rounded-full
        px-32px py-7
        ${active === 'hours' ? activeCN : 'hover:bg-beige'}`}
        id="hours"
        onClick={() => onClick('hours')}
      >
        <span>Hours</span>
      </button>
    </div>
  );
}

export default Toggle;
