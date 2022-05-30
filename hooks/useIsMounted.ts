import { useEffect, useRef } from 'react';

export const useIsMounted = () => {
  const mounted = useRef(true);
  useEffect(
    () => () => {
      mounted.current = false;
    },
    [],
  );
  return mounted;
};
