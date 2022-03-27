import React, { useEffect, useState } from "react";
// import SupportButton from "../../components/SupportButton";
type PropsCountdownbanner = {};

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
const Countdownbanner = ({}: PropsCountdownbanner) => {
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
        <p className="font-rblack mobile:text-40px mobile:leading-40px laptop:text-60px laptop:leading-60px  tracking-wide">
          {timeLeft[interval]}
        </p>
        <p className="font-rlight mobile:text-12px laptop:text-14px capitalize tracking-wide ">
          {interval}{" "}
        </p>
      </div>
    );
  });
  return (
    <div className="bg-carbon px-5% flex mobile:flex-col laptop:flex-row justify-between laptop:items-center py-5% mobile:mt-10% tablet:mt-5%">
      <div className="">
        {" "}
        <p className="font-rblack text-28px text-white">Sale starts in: </p>
        <p className="font-rlight mobile:text-0px laptop:text-14px text-white">
          Stay Tuned.{" "}
        </p>
      </div>

      <div className="flex flex-row xitems-center flex-wrap mobile:py-20px laptop:py-0 ">
        {timerComponents.map((timer, idx) => (
          <div key={idx} className="mobile:mr-30px laptop:mr-50px">
            {timer}
          </div>
        ))}
      </div>
      <p className="font-rlight mobile:text-14px  laptop:text-0px text-white">
        Stay Tuned.{" "}
      </p>
    </div>
  );
};

export default Countdownbanner;
