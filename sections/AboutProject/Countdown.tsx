import React from 'react';
import { useCountdown } from '@hooks/useCountdown';
import {
  atcb_action,
  atcb_init,
  ISO8601Date,
  ISO8601Time,
} from 'add-to-calendar-button';

type CountdownProp = {
  countDownDate: string;
};

type AddToCallendarEvent = {
  name: string;
  description: string;
  startDate: ISO8601Date | 'today';
  startTime: ISO8601Time;
  endDate: string;
  endTime: ISO8601Time;
  timeZone: string;
  options: (
    | 'Apple'
    | 'iCal'
    | 'Microsoft365'
    | 'Outlook.com'
    | 'MicrosoftTeams'
    | 'Yahoo'
    | 'Google'
  )[];
  trigger: 'click';
  iCalFileName: string;
};

const Countdown = ({ countDownDate }: CountdownProp) => {
  let { days, hours, minutes, seconds, timerEnd } = useCountdown(countDownDate);
  React.useEffect(atcb_init, []);

  // set date and time according to ISO8601 !!!
  const event: AddToCallendarEvent = {
    name: 'META HISTORY NFTs second drop',
    description:
      'META HISTORY NFTs second drop on [url]https://metahistory.gallery/[/url]',
    startDate: '2022-05-01',
    startTime: '23:59:59',
    endDate: '2022-05-02',
    endTime: '00:15:00',
    timeZone: 'Europe/Kiev',
    options: [
      'Apple',
      'Google',
      'iCal',
      'Microsoft365',
      'Outlook.com',
      'MicrosoftTeams',
      'Yahoo',
    ],
    trigger: 'click',
    iCalFileName: 'MetaHistory second drop',
  };

  return !timerEnd ? (
    <div className="font-rnarrow laptop:mb-95px tablet:mb-72px mobile:mb-60px">
      <div className="h-5px w-100% bg-carbon dark:bg-white" />
      <div className="flex mobile:my-16px tablet:my-0 tablet:flex-row laptop:items-center tablet:items-center mobile:flex-col mobile:items-start">
        <div className="flex laptop:items-center tablet:items-start laptop:flex-row mobile:flex-col">
          <div className="tablet:text-20px laptop:mr-24px tablet:leading-48px tablet:mb-0 mobile:mb-10px mobile:text-18px mobile:leading-20px font-rlight">
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
        <button
          onClick={() => {
            atcb_action(event);
          }}
          className="font-rblack relative px-30px border-2 border-carbon rounded-full tablet:text-14px tablet:leading-44px tablet:mt-0 tablet:ml-auto mobile:text-14px mobile:leading-36px mobile:mt-20px mobile:ml-0"
        >
          Add to Calendar
        </button>
      </div>
      <div className="h-5px w-100% bg-carbon dark:bg-white" />
    </div>
  ) : null;
};

export default Countdown;
