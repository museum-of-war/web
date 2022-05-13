import { useMediaQuery } from '@mui/material';

export const useViewPort = () => {
  const isMobile = useMediaQuery('(max-width:680px)', { noSsr: true });
  const isTablet = useMediaQuery('(min-width:680px) and (max-width:1366px)', {
    noSsr: true,
  });
  const isDesktop = useMediaQuery('(min-width:1366px)', { noSsr: true });

  return { isMobile, isTablet, isDesktop };
};
