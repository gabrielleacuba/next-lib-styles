import { globalStyle } from "@/styles/global";
import { Global } from "@emotion/react";

import "@wonderland/alice-tokens/dist/css/index.css";

import type { AppProps } from "next/app";
import { useState } from "react";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </Layout>
  );
}
