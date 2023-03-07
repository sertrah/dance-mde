import "@/styles/globals.css";
import Script from 'next/script';
import { Roboto } from "@next/font/google";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { common, red } from "@mui/material/colors";
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'

import type { AppProps } from "next/app";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--roboto-font",
});

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: red[900],
      light: common.white,
      dark: common.white,
      contrastText: common.white,
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
      light: common.white,
      dark: common.white,
      contrastText: common.white,
    },
    text: {
      primary: "#e8e5de",
      secondary: "#e8e5de",
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&::before": {
            borderBottomColor: "#fff !important",
          }
        }
      }
    },
    MuiPaper:{
      styleOverrides: {
        root: {
          background: "var(--radial-black-1)",
          marginBottom: "0.5rem",
          "& .MuiCardContent-root": {
            padding: "0.8rem !important",
          }
        }
      }
    }
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script id="gtag" strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

      <Script strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
      `}}
        id="ga" />
      <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
        <PrismicPreview repositoryName={repositoryName}>
          <div className={roboto.variable}>
            <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
            <ThemeProvider theme={theme}>
              <p> ⚠️⚠️ Pagina aun en construcción! ⚠️⚠️  </p>
              <Component {...pageProps} />
              <Footer />
            </ThemeProvider>
          </div>
        </PrismicPreview>
      </PrismicProvider >
    </>

  );
}
