import { useEffect, useState } from 'react';

export const useEffectOnce = (callback: () => void) => {
  const [fired, setFired] = useState(false);
  useEffect(() => {
    if (!fired) {
      setFired(true);
      callback();
    }
  }, [callback, fired]);
};
