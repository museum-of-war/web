import React from "react";

type Props = {
  onClick?: () => void,
  className?: string,
};
export const LinkButton: React.FC<Props> = ({
  onClick=()=>{},
  className = "",
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`font-rblack border-b-4 border-transparent hover:border-solid hover:border-carbon ${
        className || ""
      }`}
    >
      {children}
    </button>
  );
};
