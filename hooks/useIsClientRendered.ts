import { useLayoutEffect, useState } from 'react';

// https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85?permalink_comment_id=4150784#gistcomment-4150784
const useBrowserLayoutEffect =
  typeof window === 'undefined' ? () => {} : useLayoutEffect;

export const useIsClientRendered = () => {
  const [isClientRendered, setIsClientRendered] = useState(false);
  useBrowserLayoutEffect(() => {
    setIsClientRendered(true);
  }, []);
  return isClientRendered;
};
