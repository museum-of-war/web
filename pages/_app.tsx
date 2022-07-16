import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { AppWrapper } from '@components/wrapper';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { useAppRouter } from '@hooks/useAppRouter';
import { PopupProvider } from '@providers/PopupProvider';
import { PreloaderProvider } from '@providers/PreloaderProvider';
import { VideoProvider } from '@providers/VideoProvider';
import '../styles/globals.css';

ReactGA.initialize('G-D2QVC3VF6W');

function getTheme(route: string): 'light' | 'dark' {
  return route.split('/').includes('auction') ? 'dark' : 'light';
}

function MyApp({ Component, pageProps }: AppProps) {
  const { route } = useAppRouter();

  const [theme, setTheme] = useState(() => getTheme(route));

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: window.location.pathname + window.location.search,
    });
  }, []);

  useEffect(() => {
    setTheme(getTheme(route));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route]);

  return (
    <VideoProvider>
      <PreloaderProvider>
        <PopupProvider>
          <ThemeProvider
            enableSystem={true}
            attribute="class"
            forcedTheme={theme}
          >
            <AppWrapper
              Child={(props) => <Component {...pageProps} {...props} />}
            />
          </ThemeProvider>
        </PopupProvider>
      </PreloaderProvider>
    </VideoProvider>
  );
}

export default MyApp;
