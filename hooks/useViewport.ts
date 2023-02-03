import { useMediaQuery } from '@mui/material';
import { useIsClientRendered } from '@hooks/useIsClientRendered';

function isTouch() {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    // @ts-ignore
    navigator.msMaxTouchPoints > 0
  );
}

export const useViewPort = () => {
  const isClientRendered = useIsClientRendered();
  const isMobile = useMediaQuery('(max-width:680px)', { noSsr: true });
  const isTablet = useMediaQuery('(min-width:680px) and (max-width:1439px)', {
    noSsr: true,
  });
  const isNewMd = useMediaQuery('(min-width:900px) and (max-width:1439px)', {
    noSsr: true,
  });
  const isDesktop = useMediaQuery('(min-width:1440px)', { noSsr: true });
  return isClientRendered
    ? { isMobile, isTablet, isDesktop, isTouch: isTouch(), isNewMd }
    : {
        isMobile: true,
        isTablet: false,
        isDesktop: false,
        isTouch: true,
        isNewMd: true,
      };
};
