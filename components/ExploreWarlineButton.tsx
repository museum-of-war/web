import { useAppRouter } from "@hooks/useAppRouter";
import { useViewPort } from "@hooks/useViewport";
import React from "react";

const ExploreWarlineButton = () => {
  const { isMobile } = useViewPort();
  const { push } = useAppRouter();
  return (
    <div>
      <button
        className={`${
          isMobile ? "w-100%" : ""
        } "bg-white border-2 border-carbon rounded-full  font-rblack px-30px tablet:py-10px mobile:py-20px whitespace-nowrap
       mobile:text-14px laptop:text-14px desktop:text-16px`}
        onClick={() => push("/warline")}
      >
        Explore Warline
      </button>
    </div>
  );
};

export default ExploreWarlineButton;
