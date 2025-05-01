import Document, { Html, Head, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html>
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

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1751201806991863"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
