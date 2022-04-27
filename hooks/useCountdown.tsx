import { useEffect, useState } from 'react';

const useCountdown = (targetDate: string) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  let days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  let hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  if (days < 0 && hours < 0 && minutes < 0 && seconds < 0) {
    return {days: "0", hours: "0", minutes: "0", seconds: "0"};
  } else {
    return {days: days.toString(), hours: hours.toString(), minutes: minutes.toString(), seconds: seconds.toString()};
  }
};

export { useCountdown };
