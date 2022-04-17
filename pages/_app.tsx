import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AppWrapper } from '@components/wrapper';
import { ThemeProvider } from 'next-themes';

function SafeHydrate({ children }: any) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SafeHydrate>
      <ThemeProvider enableSystem={true} attribute="class">
        <AppWrapper
          Child={(props) => <Component {...pageProps} {...props} />}
        />
      </ThemeProvider>
    </SafeHydrate>
  );
}

export default MyApp;
