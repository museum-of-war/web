import React from 'react';
import { useCountdown } from '@hooks/useCountdown';
import { atcb_action, atcb_init } from 'add-to-calendar-button';

type CountdownProp = {
  countDownDate: string;
};

type AddToCallendarEvent = Parameters<typeof atcb_action>[0];

const Countdown = ({ countDownDate }: CountdownProp) => {
  let { days, hours, minutes, seconds, timerEnd } = useCountdown(countDownDate);
  React.useEffect(atcb_init, []);

  const eventName = 'Warline Drop 8';

  // set date and time according to ISO8601 !!!
  const event: AddToCallendarEvent = {
    name: eventName,
    description: `${eventName} on [url]https://metahistory.gallery/collection/warline[/url]`,
    startDate: '2023-01-19',
    startTime: '23:00:00',
    endDate: '2023-01-19',
    endTime: '23:59:59',
    timeZone: 'Europe/Kyiv',
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
    iCalFileName: `Meta History: Museum of War - ${eventName}`,
  };

  return !timerEnd ? (
    <div className="font-rnarrow desktop:mb-95px tablet:mb-72px mobile:mb-60px">
      <div className="h-5px w-100% bg-carbon dark:bg-white" />
      <div className="flex mobile:my-16px tablet:my-0 tablet:flex-row desktop:items-center tablet:items-center mobile:flex-col mobile:items-start">
        <div className="flex desktop:items-center tablet:items-start desktop:flex-row mobile:flex-col">
          <div className="tablet:text-20px desktop:mr-24px tablet:leading-48px tablet:mb-0 mobile:mb-10px mobile:text-18px mobile:leading-20px font-rlight">
            Warline Drop 8 will be in:
          </div>
          <div className="flex flex-row items-center tablet:my-7 mobile:my-0">
            <div className="flex desktop:flex-row mobile:flex-col desktop:items-center mobile:items-start">
              <span className="font-rblack tablet:text-32px mobile:text-27px desktop:leading-48px tablet:leading-36px mobile:leading-30px mr-7px">
                {days.length < 2 ? '0' + days : days}
              </span>
              <p className="text-16px leading-24px">Days</p>
            </div>

            <div className="flex desktop:flex-row mobile:flex-col desktop:items-center mobile:items-start ml-24px">
              <span className="font-rblack tablet:text-32px mobile:text-27px desktop:leading-48px tablet:leading-36px mobile:leading-30px mr-7px">
                {hours.length < 2 ? '0' + hours : hours}
              </span>
              <p className="text-16px leading-24px">Hours</p>
            </div>

            <div className="flex desktop:flex-row mobile:flex-col desktop:items-center mobile:items-start ml-24px">
              <span className="font-rblack tablet:text-32px mobile:text-27px desktop:leading-48px tablet:leading-36px mobile:leading-30px mr-7px">
                {minutes.length < 2 ? '0' + minutes : minutes}
              </span>
              <p className="text-16px leading-24px">Minutes</p>
            </div>

            <div className="flex desktop:flex-row mobile:flex-col desktop:items-center mobile:items-start ml-24px">
              <span className="font-rblack tablet:text-32px mobile:text-27px desktop:leading-48px desktop:w-50px tablet:w-auto tablet:leading-36px mobile:leading-30px mr-7px">
                {seconds.length < 2 ? '0' + seconds : seconds}
              </span>
              <p className="text-16px leading-24px">Seconds</p>
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
