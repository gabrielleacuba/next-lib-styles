import "@/styles/globals.ts";
import type { AppProps } from "next/app";
import { globalStyles } from "../styles/globals";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {globalStyles()}
    </>
  );
}
