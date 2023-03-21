import "@/styles/globals.css";
import Script from 'next/script';
import { Roboto } from "@next/font/google";
import { QueryClientProvider, QueryClient } from "react-query";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { common, red } from "@mui/material/colors";
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'
import { appWithTranslation } from 'next-i18next'

import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import TopBar from "@/components/UI-shared/TopBar";

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
    MuiPaper: {
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = ({ Component, pageProps }: AppProps) => {
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
              <TopBar />
              <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
              </QueryClientProvider>

              <Footer />
            </ThemeProvider>
          </div>
        </PrismicPreview>
      </PrismicProvider >
    </>

  );
}

export default appWithTranslation(App);
