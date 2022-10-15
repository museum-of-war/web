import React from 'react';
import { ValueLabel } from 'types';

type ToggleProps<T> = {
  selected: T;
  onChange: (value: T) => void;
  options: ValueLabel<T>[];
};

const activeCN = 'text-white bg-carbon hover:bg-carbon';

function Toggle<T>({ selected, onChange, options }: ToggleProps<T>) {
  return (
    <div className="p-4 bg-white font-rblack leading-none border-2 border-carbon rounded-full inline-flex">
      {options.map(({ value, label }) => (
        <button
          key={label}
          id={label}
          className={`whitespace-nowrap
          transition-colors duration-300 ease-in
        focus:outline-none
        rounded-full
        px-25px
        ${selected === value ? activeCN : 'hover:bg-beige'}`}
          onClick={() => onChange(value)}
        >
          <span className="text-14px leading-36px">{label}</span>
        </button>
      ))}
    </div>
  );
}

export default Toggle;
