import { useMediaQuery } from '@mui/material';

export const useViewPort = () => {
  const isMobile = useMediaQuery('(max-width:680px)', { noSsr: true });
  const isTablet = useMediaQuery('(min-width:680px) and (max-width:1024px)', {
    noSsr: true,
  });
  const isLaptop = useMediaQuery('(min-width:1024px) and (max-width:1500px)', {
    noSsr: true,
  });
  const isDesktop = useMediaQuery('(min-width:1500px)', { noSsr: true });

  return { isMobile, isTablet, isDesktop, isLaptop };
};
