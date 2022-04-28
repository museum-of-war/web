import React, { useMemo } from 'react';

type ButtonProps = {
  mode: 'secondary' | 'primary' | 'custom';
  onClick: () => void;
  label?: string | React.ReactElement;
  className?: string;
  round?: boolean;
  disabled?: boolean;
};

// TODO: Add disabled styles
function Button({
  mode,
  label,
  className = '',
  onClick,
  disabled = false,
  round = false,
}: ButtonProps) {
  const cn = useMemo(() => {
    if (mode === 'primary') {
      return `bg-carbon font-rblack text-white
                ${
                  round
                    ? 'px-20px tablet:py-10px mobile:py-10px'
                    : 'px-32px tablet:py-10px '
                }
                whitespace-nowrap text-14px
                hover:bg-carbon-800
                border-2 border-white
                rounded-full ${className}`;
    } else if (mode === 'secondary') {
      return `bg-white dark:bg-carbon
                    border-2 border-carbon dark:border-white
                    ${
                      round
                        ? 'px-10px tablet:py-10px mobile:py-10px'
                        : 'px-32px tablet:py-10px mobile:py-20px'
                    }
                    whitespace-nowrap
                    font-rblack text-14px
                    rounded-full ${className}`;
    } else if (mode === 'custom') {
      return `
                    ${
                      round
                        ? 'px-10px tablet:py-10px mobile:py-10px'
                        : 'px-32px tablet:py-10px mobile:py-20px'
                    }
                    whitespace-nowrap
                    font-rblack text-14px
                    rounded-full ${className}`;
    }
  }, [className, mode, round]);

  return (
    <button disabled={disabled} type="button" className={cn} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
