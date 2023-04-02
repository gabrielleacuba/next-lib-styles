import { globalStyle } from "@/styles/global";
import { Global } from "@emotion/react";
import "@wonderland/alice-tokens/dist/css/index.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  );
}
