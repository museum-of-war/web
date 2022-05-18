import React, { useEffect, useState } from 'react';
import { WAR_START_DATE } from '@sections/Constants';
import { useWeb3Modal } from '@hooks/useWeb3Modal';

const ContentCounterDaysAndRised = () => {
  const [daysFromWarStart, setDaysFromWarStart] = useState<number>();
  const [fundsRaised, setFundsRaised] = useState({ eth: '', usd: '' });
  const { getTotalFundsRaised } = useWeb3Modal();
  const daysCounter = () => {
    const startDate = new Date(WAR_START_DATE);
    const now = new Date();
    const days = (now.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
    return Math.ceil(days);
  };

  useEffect(() => {
    setDaysFromWarStart(daysCounter());
    getTotalFundsRaised().then(setFundsRaised);
  }, []);

  return (
    <>
      <div className="desktop:flex desktop:flex-row desktop:justify-between mt-20 tablet:mb-75px mobile:mb-8%">
        <div className="desktop:w-[544px] tablet:mt-0 mobile:mt-60px">
          <p className="font-rblack mobile:text-27px mobile:leading-30px mobile:mb-12px tablet:text-32px tablet:leading-36px tablet:mb-16px">
            The war’s been going on for
          </p>
          <div className="h-5px w-100% bg-carbon dark:bg-white" />
          <p className="font-rblack mt-4 mobile:text-38px mobile:leading-40px tablet:text-70px tablet:leading-72px uppercase">
            {daysFromWarStart} days
          </p>
          <p className="font-rlight tablet:text-20px mobile:text-12px mobile:leading-40px">
            24 February 2022 – Until now
          </p>
        </div>

        <div className="desktop:w-[544px] mobile:mt-40px tablet:mt-72px desktop:mt-0">
          <p className="font-rblack mobile:text-27px mobile:leading-30px mobile:mb-12px tablet:text-32px tablet:leading-36px tablet:mb-16px">
            Total funds raised
          </p>
          <div className="h-5px w-100% bg-carbon dark:bg-white" />
          <p className="font-rblack mt-4 mobile:text-38px mobile:leading-40px tablet:text-70px tablet:leading-72px uppercase">
            ${fundsRaised.usd}
          </p>
          <p className="font-rlight tablet:text-20px mobile:text-12px mobile:leading-40px">
            {fundsRaised.eth} ETH
          </p>
        </div>
      </div>
    </>
  );
};

export default ContentCounterDaysAndRised;
