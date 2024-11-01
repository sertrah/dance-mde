import { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        /> */}
        {/* <link
          rel="preload"
          href="styles.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link rel="stylesheet" href="styles.css" />
        </noscript> */}
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
