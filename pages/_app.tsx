import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AppWrapper } from "@components/wrapper";

function SafeHydrate({ children }: any) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SafeHydrate>
      <AppWrapper Child={(props) => <Component {...pageProps} {...props} />} />
    </SafeHydrate>
  );
}

export default MyApp;
