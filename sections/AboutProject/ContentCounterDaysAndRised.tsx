import React, { useEffect, useState } from 'react';

const ContentCounterDaysAndRised = () => {
  const [daysFromWarStart, setDaysFromWarStart] = useState<number>();
  const daysCounter = () => {
    const startDate = new Date('02/24/2022');
    const now = new Date();
    const days = (now.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
    return Math.round(days);
  }

  useEffect(() => {
    setDaysFromWarStart(daysCounter());
  }, [])

  return (
    <>
      <div className="laptop:flex laptop:flex-row laptop:justify-between mt-20 tablet:mb-75px mobile:mb-8%">
        <div className="laptop:w-45% tablet:mt-0 mobile:mt-60px">
          <p className="font-rblack mobile:text-27px mobile:leading-30px mobile:mb-12px tablet:text-32px tablet:leading-36px tablet:mb-16px">
            The war’s been going on for
          </p>
          <div className="h-5px w-100% bg-carbon dark:bg-white" />
          <p className="font-rblack mt-4 mobile:text-38px mobile:leading-12vw tablet:text-9vw tablet:leading-9vw laptop:text-5vw laptop:leading-5.5vw uppercase">
            {daysFromWarStart} days
          </p>
          <p className='font-rnarrow tablet:text-20px mobile:text-12px mobile:leading-40px'>
            22 February 2022 – Until now
          </p>
        </div>

        <div className="laptop:w-45% mobile:mt-40px tablet:mt-72px laptop:mt-0">
          <p className="font-rblack mobile:text-27px mobile:leading-30px mobile:mb-12px tablet:text-32px tablet:leading-36px tablet:mb-16px">
            Total funds raised
          </p>
          <div className="h-5px w-100% bg-carbon dark:bg-white" />
          <p className="font-rblack mt-4 mobile:text-38px mobile:leading-12vw tablet:text-9vw tablet:leading-9vw laptop:text-5vw laptop:leading-5.5vw uppercase">
            $800,000
          </p>
          <p className='font-rnarrow tablet:text-20px mobile:text-12px mobile:leading-40px'>
            1000.9 ETH
          </p>
        </div>
      </div>
      {/* {isMobile && (
        <img
          className="w-screen max-w-none"
          alt="dots"
          src="/img/pd-dotsHorizontalMobile.png"
        />
      )} */}
    </>
  );
}

export default ContentCounterDaysAndRised;
