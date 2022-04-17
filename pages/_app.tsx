import React, { useEffect, useState } from 'react';
import { AppWrapper } from '@components/wrapper';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { useAppRouter } from '@hooks/useAppRouter';

function SafeHydrate({ children }: { children: React.ReactNode }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  );
}

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
    <SafeHydrate>
      <ThemeProvider enableSystem={true} attribute="class" forcedTheme={theme}>
        <AppWrapper
          Child={(props) => <Component {...pageProps} {...props} />}
        />
      </ThemeProvider>
    </SafeHydrate>
  );
}

export default MyApp;
