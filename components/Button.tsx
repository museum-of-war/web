import React, { useMemo } from "react";

type ButtonProps = {
    mode: "secondary" | "primary";
    onClick: () => void;
    label?: string | React.ReactElement;
    className?: string;
    round?: boolean;
}

function Button({ mode, label, className = '', onClick, round = false }: ButtonProps) {
    const cn = useMemo(() => {
        if (mode === "primary") {
            return `bg-carbon font-rblack text-white
                ${round ? "px-20px tablet:py-10px mobile:py-10px" : "px-32px tablet:py-10px mobile:py-8%"}
                whitespace-nowrap mobile:text-12px laptop:text-14px desktop:text-16px
                hover:bg-carbon-800 focus:border-double
                border-4 border-white
                rounded-full ${className}`
        } else if (mode === "secondary") {
            return `bg-white
                    border-2 border-carbon
                    ${round ? "px-10px tablet:py-10px mobile:py-10px" : "px-32px tablet:py-10px mobile:py-20px"}
                    whitespace-nowrap
                    font-rblack mobile:text-14px laptop:text-14px desktop:text-16px
                    rounded-full ${className}`
        }
    }, [className, mode, round]);

    return (
        <button
            type="button"
            className={cn}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default Button;