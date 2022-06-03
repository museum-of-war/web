import { useLayoutEffect, useState } from 'react';

export const useIsClientRendered = () => {
  const [isClientRendered, setIsClientRendered] = useState(false);
  useLayoutEffect(() => {
    setIsClientRendered(true);
  }, []);
  return isClientRendered;
};
