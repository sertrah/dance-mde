import "@/styles/globals.scss";
import Script from "next/script";
import { Libre_Caslon_Text, Inter, Dynalight } from "@next/font/google";

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
import { useRouter } from "next/router";

const libre_caslon = Dynalight({
  weight: "400",
  subsets: ["latin"],
  variable: "--libre-caslon-text-font",
  preload: true,
  display: "swap",
});

const noto_sans = Inter({
  weight: ["200", "400", "600"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
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
  const router = useRouter();

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
      <header className={`header small`}>
        <Link href="/">MB</Link>
        <Link
          className={`header--locale`}
          href="/"
          locale={router.locale === "en-US" ? "es-CO" : "en-US"}
        >
          {router.locale === "en-US" ? "ES" : "EN"}
        </Link>
      </header>
      <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
        <div className={` ${libre_caslon.className} ${noto_sans.className}`}>
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
