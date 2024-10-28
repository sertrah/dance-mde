import "@/styles/globals.scss";
import Script from "next/script";
import { Roboto, Noto_Sans, Libre_Caslon_Text } from "@next/font/google";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { QueryClientProvider, QueryClient } from "react-query";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { common, red } from "@mui/material/colors";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { appWithTranslation } from "next-i18next";

import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import TopBar from "@/components/UI-shared/TopBar";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--roboto-font",
  preload: true,
  display: "swap",
});

const libre_caslon = Libre_Caslon_Text({
  weight: "400",
  subsets: ["latin"],
  variable: "--libre-caslon-text-font",
  preload: true,
  display: "swap",
});

const noto_sans = Noto_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "optional",
  variable: "--noto_sans-font",
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
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "var(--radial-black-1)",
          marginBottom: "0.5rem",
          "& .MuiCardContent-root": {
            padding: "0.8rem !important",
          },
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "h1" } /* component props */,
          style: {
            fontSize: "2.2rem",
          },
        },
        {
          props: { variant: "h2" } /* component props */,
          style: {
            fontSize: "1.6rem",
          },
        },
        {
          props: { variant: "body1" },
          style: {
            color: "#fff",
            fontSize: "1.04rem",
          },
        },
      ],
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.MuiTabPanel-root": {
            color: "#000",
          },
        },
      },
    },
  },
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
      <Script
        id="gtag"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id="adSense"
        strategy="afterInteractive"
        crossOrigin="anonymous"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1751201806991863`}
      />

      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
      `,
        }}
        id="ga"
      />
      <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
        <div
          className={`${roboto.variable} ${libre_caslon.variable} ${noto_sans.variable}`}
        >
          <style jsx global>{`
            @font-face {
              font-family: ${libre_caslon.style.fontFamily};
              font-display: swap;
            }
            @font-face {
              font-family: ${noto_sans.style.fontFamily};
            }
            html {
              font-family: ${roboto.style.fontFamily};
              font-display: swap;
            }
          `}</style>
          <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              <Component {...pageProps} />
            </QueryClientProvider>

            <Footer />
          </ThemeProvider>
        </div>
      </PrismicProvider>
    </>
  );
};

export default appWithTranslation(App);
