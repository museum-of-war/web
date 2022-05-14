import { useMediaQuery } from '@mui/material';

export const useViewPort = () => {
  const isMobile = useMediaQuery('(max-width:680px)', { noSsr: true });
  const isTablet = useMediaQuery('(min-width:680px) and (max-width:1366px)', {
    noSsr: true,
  });
  const isDesktop = useMediaQuery('(min-width:1366px)', { noSsr: true });
  const isTouch =
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    // @ts-ignore
    navigator.msMaxTouchPoints > 0;

  return { isMobile, isTablet, isDesktop, isTouch };
};
