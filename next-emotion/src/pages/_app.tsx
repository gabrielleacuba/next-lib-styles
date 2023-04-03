import "@wonderland/alice-tokens/dist/css/index.css";
import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { ThemeProvider } from "@emotion/react";

import { defaultTheme } from "../styles/themes/theme";
import { globalStyle } from "@/styles/global";
import { ThemeContextProvider } from "../styles/themes/ThemeContext";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ThemeContextProvider>
        <Layout>
          <Global styles={globalStyle} />
          <Component {...pageProps} />
        </Layout>
      </ThemeContextProvider>
    </ThemeProvider>
  );
}
