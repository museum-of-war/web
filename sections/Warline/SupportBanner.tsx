import React from "react";
import SupportButton from "../../components/SupportButton";
type PropsSupportBanner = {
  setShowDonatePopup: (arg: boolean) => void;
};
const SupportBanner = ({ setShowDonatePopup }: PropsSupportBanner) => {
  return (
    <div className="bg-carbon w-100% px-10% py-5%">
      <p className="font-rblack text-28px text-white">
        Don’t let this chronology continue
      </p>
      <p className="font-rlight pt-15px text-14px text-white">
        Не дозволь цій хронології продовжитись
      </p>
      <div className="pt-40px">
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

export default SupportBanner;
