import React, { useState } from "react";
import SupportButton from "../../components/SupportButton";
import { useViewPort } from "@hooks/useViewport";
type PropsSupportSticky = {
  setShowDonatePopup: (arg: boolean) => void;
};

const SupportSticky = ({ setShowDonatePopup }: PropsSupportSticky) => {
  const { isMobile, isTablet } = useViewPort();
  const [showBtn, setShowBtn] = useState<boolean>(false);

  return isMobile ? (
    <div className="sticky left-0 bottom-0 bg-carbon w-100% px-10% py-20px">
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
    <div className="sticky left-0 bottom-0 bg-carbon w-100% px-10% py-30px justify-center">
      <p className="font-rblack text-32px text-white">
        Support Ukraine while waiting for the drop
      </p>
      {/* <p className="font-rlight pt-15px text-14px text-white">
        Не дозволь цій хронології продовжитись
      </p> */}
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
    <div className="sticky mt-48px z-0 left-0 bottom-0 bg-carbon w-100% px-10% py-30px flex flex-row items-center justify-center">
      <p className="font-rblack text-28px leading-28px text-white">
        Support Ukraine while waiting for the drop
      </p>
      {/* <p className="font-rlight pt-15px text-14px text-white">
        Не дозволь цій хронології продовжитись
      </p> */}
      <div className="ml-30px mt-7">
        <SupportButton
          label={"Support Ukraine"}
          onClick={() => {
            setShowDonatePopup(true);
          }}
        />
      </div>
    </div>
  );
};

export default SupportSticky;
