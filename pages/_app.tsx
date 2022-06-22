import React, { useEffect, useState } from 'react';
import { AppWrapper } from '@components/wrapper';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { useAppRouter } from '@hooks/useAppRouter';
import { PopupProvider } from '@providers/PopupProvider';
import { PreloaderProvider } from '@providers/PreloaderProvider';
import { VideoProvider } from '@providers/VideoProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light');
  const { route } = useAppRouter();

  useEffect(() => {
    if (!route.split('/').includes('auction')) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
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
