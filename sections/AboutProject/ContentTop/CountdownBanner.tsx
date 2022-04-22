import SupportButton from '@components/SupportButton';
import DonatePopup from '@sections/Warline/DonatePopup';
import React, { useEffect, useState } from 'react';
import { useAppRouter } from '@hooks/useAppRouter';

type PropsCountdownBanner = {
  endDate: string;
};

export const calculateTimeLeft = (endDate: string) => {
  let difference = +new Date(endDate) - +new Date() + 600 * 1000;

  return difference > 0
    ? {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isLeft: true,
      }
    : {
      isLeft: false,
    };
};

const CountdownBanner = ({ endDate }: PropsCountdownBanner) => {
  const { push } = useAppRouter();
  const [showDonatePopup, setShowDonatePopup] = useState<boolean>(false);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(endDate));
    }, 1000);
    return () => clearTimeout(timer);
  });

  if (!timeLeft.isLeft) return null;

  const timerComponents: JSX.Element[] = [];

  (Object.keys(timeLeft) as (keyof typeof timeLeft)[]).forEach((interval) => {
    if (interval === 'isLeft') return;

    timerComponents.push(
      <div className="text-white">
        <p className="font-rblack mobile:text-30px mobile:leading-30px laptop:text-50px laptop:leading-50px pt-20px tracking-wide">
          {timeLeft[interval]}
        </p>
        <p className="font-rlight mobile:text-12px laptop:text-20px capitalize tracking-wide ">
          {interval}{' '}
        </p>
      </div>,
    );
  });
  return (
    <>
      <div
        className="bg-carbon w-100% px-10% py-5% mt-4%"
        id="countdown-banner"
      >
        <p className="font-rblack text-28px text-white">Auction Closing Ceremony starts in: </p>
        <div className="flex flex-row items-center flex-wrap laptop:w-100% tablet:w-50% mobile:w-100%">
          {timerComponents.map((timer, idx) => (
            <div key={idx} className="mobile:mr-20px laptop:mr-50px">
              {timer}
            </div>
          ))}
        </div>

        <div className="pt-40px">
          <SupportButton
            label={'Go to Auction'}
            onClick={() => {
              push('/auction');
            }}
          />
        </div>
      </div>
      {showDonatePopup ? (
        <DonatePopup setShowDonatePopup={setShowDonatePopup} />
      ) : (
        <></>
      )}
    </>
  );
};

export default CountdownBanner;
