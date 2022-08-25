import { DependencyList, useEffect, useState } from 'react';

export const useEffectPeriodic = (
  callback: () => void,
  ms?: number,
  deps?: DependencyList,
  skipFirstFiring: boolean = false,
) => {
  const [fired, setFired] = useState(skipFirstFiring);

  if (!fired) {
    setFired(true);
    callback();
  }

  useEffect(() => {
    const interval = setInterval(callback, ms);
    return () => clearInterval(interval);
  }, deps);
};
