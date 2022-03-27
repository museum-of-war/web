import React, { useEffect, useState } from "react";
import SupportButton from "@components/SupportButton";
import DonatePopup from "@sections/Warline/DonatePopup";

import { useViewPort } from "@hooks/useViewport";

type PropsSupportSticky = {
  endDate: string;
  targetAnchorId: string;
};

const SupportSticky = ({ endDate, targetAnchorId }: PropsSupportSticky) => {
  const difference = +new Date(endDate) - +new Date();
  const [showDonatePopup, setShowDonatePopup] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const { isMobile, isTablet } = useViewPort();

  const onScroll = () => {
    const target = document.getElementById(targetAnchorId);
    if (target) {
      setShow(window.scrollY > target?.offsetTop + target?.clientHeight - 200);
    }

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight-300)
      setShow(false);
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  if (difference < 0) return null;
  if (!show) return null;

  return (
    <>
      {isMobile ? (
        <div className="fixed left-0 bottom-0 bg-carbon w-100% px-10% py-20px">
          <div
            className="flex align-center justify-between"
            onClick={() => setShowBtn(!showBtn)}
          >
            <p className="font-rblack mobile:text-16px tablet:text-28px text-white w-60%">
              Support Ukraine while waiting for the next drop
            </p>
            <img
              src={"img/down-white.svg"}
              style={showBtn ? {} : { transform: "rotate(-90deg)" }}
            />
          </div>

          {showBtn && (
            <div className="pt-20px">
              <SupportButton
                label={"Support Ukraine"}
                onClick={() => {
                  setShowBtn(false);
                  setShowDonatePopup(true);
                }}
              />
            </div>
          )}
        </div>
      ) : isTablet ? (
        <div className="fixed left-0 bottom-0 bg-carbon w-100% px-10% py-30px">
          <p className="font-rblack text-32px text-white">
            Support Ukraine while waiting for the next drop
          </p>
          <div className="pt-20px">
            <SupportButton
              label={"Support Ukraine"}
              onClick={() => {
                setShowDonatePopup(true);
              }}
            />
          </div>
        </div>
      ) : (
        <div className="fixed z-0 left-0 bottom-0 bg-carbon w-100% px-10% py-30px flex flex-row items-center justify-center">
          <p className="font-rblack text-28px leading-28px text-white">
            Support Ukraine while waiting for the next drop
          </p>
          <div className="ml-30px mt-7">
            <SupportButton
              label={"Support Ukraine"}
              onClick={() => {
                setShowDonatePopup(true);
              }}
            />
          </div>
        </div>
      )}
      {showDonatePopup && difference > 0 ? (
        <DonatePopup setShowDonatePopup={setShowDonatePopup} />
      ) : null}
    </>
  );
};

export default SupportSticky;
