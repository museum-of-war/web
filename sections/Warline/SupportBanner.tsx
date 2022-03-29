import React, { useEffect, useState } from "react";
import SupportButton from "../../components/SupportButton";
import { RELEASE_DATE } from "@sections/Constants";

type PropsSupportBanner = {
  setShowDonatePopup: (arg: boolean) => void;
};

const calculateTimeLeft = () => {
  let difference = +new Date(RELEASE_DATE) - +new Date();

  return difference > 0
    ? {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    : {};
};
const SupportBanner = ({ setShowDonatePopup }: PropsSupportBanner) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  (Object.keys(timeLeft) as (keyof typeof timeLeft)[]).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div className="text-white">
        <p className="font-rblack mobile:text-30px mobile:leading-30px laptop:text-50px laptop:leading-50px pt-20px tracking-wide">
          {timeLeft[interval]}
        </p>
        <p className="font-rlight mobile:text-12px laptop:text-20px capitalize tracking-wide ">
          {interval}{" "}
        </p>
      </div>
    );
  });
  return (
    <div className="bg-carbon w-100% px-10% py-5%">
      <p className="font-rblack text-28px text-white">Sale starts in: </p>
      <div className="flex flex-row items-center flex-wrap w-100%">
        {timerComponents.map((timer, idx) => (
          <div key={idx} className="mobile:mr-20px laptop:mr-50px">
            {timer}
          </div>
        ))}
      </div>
      <p className="font-rlight pt-15px text-14px text-white"></p>
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
