import "../styles/globals.css"
import "@wonderland/alice-tokens/dist/css/index.css";

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
