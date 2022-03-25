import React, { useEffect, useState } from "react";
// import SupportButton from "../../components/SupportButton";
type PropsCountdownbanner = {
  setShowDonatePopup: (arg: boolean) => void;
};

const calculateTimeLeft = () => {
  let difference = +new Date(`03/30/2022`) - +new Date();

  return difference > 0
    ? {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    : {};
};
const Countdownbanner = ({ setShowDonatePopup }: PropsCountdownbanner) => {
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
        <p className="font-rblack mobile:text-40px mobile:leading-40px laptop:text-70px laptop:leading-70px  tracking-wide">
          {timeLeft[interval]}
        </p>
        <p className="font-rlight mobile:text-12px laptop:text-14px capitalize tracking-wide ">
          {interval}{" "}
        </p>
      </div>
    );
  });
  return (
    <div className="bg-carbon px-5% flex flex-row justify-between items-center py-5% mt-5%">
      <div className="">
        {" "}
        <p className="font-rblack text-28px text-white">Sale starts in: </p>
        <p className="font-rlight text-14px text-white">Stay Tuned. </p>
      </div>

      <div className="flex flex-row xitems-center flex-wrap ">
        {timerComponents.map((timer, idx) => (
          <div key={idx} className="mobile:mr-30px laptop:mr-50px">
            {timer}
          </div>
        ))}
      </div>
      {/* <p className="font-rlight pt-15px text-14px text-white"></p> */}
      {/* <div className="pt-40px"> */}
      {/* <SupportButton
          label={"Support Ukraine"}
          onClick={() => {
            setShowDonatePopup(true);
          }}
        /> */}
      {/* </div> */}
    </div>
  );
};

export default Countdownbanner;
