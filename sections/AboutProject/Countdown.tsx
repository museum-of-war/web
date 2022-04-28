import React from 'react';
import { useCountdown } from '@hooks/useCountdown';


type CountdownProp = {
  countDownDate: string,
}

const Countdown = ({countDownDate}: CountdownProp) => {  
  let { days, hours, minutes, seconds, timerEnd } = useCountdown(countDownDate);

  return !timerEnd ?
    (<div className="font-rnarrow laptop:mb-95px tablet:mb-72px mobile:mb-60px">
      <div className="h-5px w-100% bg-carbon dark:bg-white" />
      <div className="flex mobile:my-16px tablet:my-0 tablet:flex-row mobile:flex-col justify-between tablet:items-center mobile:items-start">
        <div className="tablet:text-20px tablet:leading-48px tablet:mb-0 mobile:mb-10px mobile:text-18px mobile:leading-20px font-rlight">
          The next drop will be in:
        </div>
        <div className="flex flex-row items-center tablet:my-7 mobile:my-0">

          <div className="flex laptop:flex-row mobile:flex-col laptop:items-center mobile:items-start">
            <span className="font-rblack tablet:text-32px mobile:text-27px laptop:leading-48px tablet:leading-36px mobile:leading-30px mr-7px">
              {days.length < 2 ? '0' + days : days}
            </span>
            <p className="text-16px leading-24px laptop:mb-6 tablet:mb-0">
              Days
            </p>
          </div>

          <div className="flex laptop:flex-row mobile:flex-col laptop:items-center mobile:items-start ml-24px">
            <span className="font-rblack tablet:text-32px mobile:text-27px laptop:leading-48px tablet:leading-36px mobile:leading-30px mr-7px">
              {hours.length < 2 ? '0' + hours : hours}
            </span>
            <p className="text-16px leading-24px laptop:mb-6 tablet:mb-0">
              Hours
            </p>
          </div>

          <div className="flex laptop:flex-row mobile:flex-col laptop:items-center mobile:items-start ml-24px">
            <span className="font-rblack tablet:text-32px mobile:text-27px laptop:leading-48px tablet:leading-36px mobile:leading-30px mr-7px">
              {minutes.length < 2 ? '0' + minutes : minutes}
            </span>
            <p className="text-16px leading-24px laptop:mb-6 tablet:mb-0">
              Minutes
            </p>
          </div>

          <div className="flex laptop:flex-row mobile:flex-col laptop:items-center mobile:items-start ml-24px">
            <span className="font-rblack tablet:text-32px mobile:text-27px laptop:leading-48px laptop:w-50px tablet:w-auto tablet:leading-36px mobile:leading-30px mr-7px">
              {seconds.length < 2 ? '0' + seconds : seconds}
            </span>
            <p className="text-16px leading-24px laptop:mb-6 tablet:mb-0">
              Seconds
            </p>
          </div>
          
        </div>
      </div>
      <div className="h-5px w-100% bg-carbon dark:bg-white" />
    </div>) :
    null;
}

export default Countdown;
