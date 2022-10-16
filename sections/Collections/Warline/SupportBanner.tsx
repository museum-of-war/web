import React, { useEffect, useState } from 'react';
import Button2 from '@components/Button2';
import { RELEASE_DATE } from '@sections/constants';

type PropsSupportBanner = {
  setShowDonatePopup: (arg: boolean) => void;
};

const calculateTimeLeft = (difference: number) => {
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
  let difference = +new Date(RELEASE_DATE) - +new Date() + 600 * 1000;
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(difference));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(difference));
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  (Object.keys(timeLeft) as (keyof typeof timeLeft)[]).forEach((interval) => {
    if (difference > 0)
      timerComponents.push(
        <div className="text-white">
          <p className="font-rblack mobile:text-30px mobile:leading-30px desktop:text-50px desktop:leading-50px pt-20px tracking-wide">
            {timeLeft[interval]}
          </p>
          <p className="font-rlight mobile:text-12px desktop:text-20px capitalize tracking-wide ">
            {interval}{' '}
          </p>
        </div>,
      );
  });

  return difference > 0 ? (
    <div className="bg-carbon w-100% px-10% py-5%">
      <p className="font-rblack text-28px text-white">Sale starts in: </p>
      <div className="flex flex-row items-center flex-wrap w-100%">
        {timerComponents.map((timer, idx) => (
          <div key={idx} className="mobile:mr-20px desktop:mr-50px">
            {timer}
          </div>
        ))}
      </div>
      <p className="font-rlight pt-15px text-14px text-white"></p>
      <div className="pt-40px">
        <Button2
          label={'Support Ukraine'}
          onClick={() => {
            setShowDonatePopup(true);
          }}
        />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default SupportBanner;
