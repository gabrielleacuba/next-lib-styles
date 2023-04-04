import { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../../stitches.config";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body data-theme="on-dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
