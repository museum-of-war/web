import Button2 from '@components/Button2';
import DonatePopup from '@sections/Collections/Warline/DonatePopup';
import React, { useEffect, useState } from 'react';
import { openInNewTab } from '@sections/utils';
import Link from 'next/link';

type PropsCountdownBanner = {
  endDate: string;
  hideDate: string;
  className?: string;
};

export const calculateTimeLeft = (endDate: string) => {
  let difference = +new Date(endDate) - +new Date();

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

const CountdownBanner = ({
  endDate,
  hideDate,
  className,
}: PropsCountdownBanner) => {
  const [showDonatePopup, setShowDonatePopup] = useState<boolean>(false);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endDate));
  const [hideTimeLeft, setHideTimeLeft] = useState(calculateTimeLeft(hideDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(endDate));
      setHideTimeLeft(calculateTimeLeft(hideDate));
    }, 1000);
    return () => clearTimeout(timer);
  });

  if (!hideTimeLeft.isLeft) return null;

  const timerComponents: JSX.Element[] = [];

  if (timeLeft.isLeft)
    (Object.keys(timeLeft) as (keyof typeof timeLeft)[]).forEach((interval) => {
      if (interval === 'isLeft') return;

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

  return (
    <>
      <div
        className={`bg-carbon w-100% px-10% py-5% mt-4% ${className}`}
        id="countdown-banner"
      >
        <p className="font-rblack text-28px text-white">
          {timeLeft.isLeft
            ? 'Auction Closing Ceremony starts in:'
            : 'Join the Auction Closing Ceremony:'}{' '}
        </p>
        {timeLeft.isLeft && (
          <div className="flex flex-row items-center flex-wrap desktop:w-100% tablet:w-50% mobile:w-100%">
            {timerComponents.map((timer, idx) => (
              <div key={idx} className="mobile:mr-20px desktop:mr-50px">
                {timer}
              </div>
            ))}
          </div>
        )}

        <div className="pt-40px">
          {timeLeft.isLeft ? (
            <Link href="/auction" passHref>
              <a>
                <Button2 label="Go to Auction" />
              </a>
            </Link>
          ) : (
            <Button2
              label="Go to Ceremony"
              onClick={() => {
                openInNewTab('https://enter.party.space/metahistory');
              }}
            />
          )}
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
