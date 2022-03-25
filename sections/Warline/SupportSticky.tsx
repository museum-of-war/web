import React from "react";
import SupportButton from "../../components/SupportButton";
import { useViewPort } from "@hooks/useViewport";
type PropsSupportSticky = {
  setShowDonatePopup: (arg: boolean) => void;
};

const SupportSticky = ({ setShowDonatePopup }: PropsSupportSticky) => {
  const { isMobile, isTablet } = useViewPort();

  return isMobile ? (
    <div className="fixed left-0 bottom-0 bg-carbon w-100% px-10% py-30px">
      <p className="font-rblack mobile:text-16px tablet:text-28px text-white">
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
  ) : isTablet ? (
    <div className="fixed left-0 bottom-0 bg-carbon w-100% px-10% py-30px">
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
    <div className="fixed z-0 left-0 bottom-0 bg-carbon w-100% px-10% py-30px flex flex-row items-center">
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
