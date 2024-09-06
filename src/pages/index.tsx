import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import style from "./../styles/temp.module.css";
import AdBanner from "@/components/UI-shared/AdBanner";
import PrivateClasses from "@/components/HomeV2/PrivateClasses";
import Academies from "@/components/HomeV2/Academies";

const Cover = dynamic(() => import("@/components/HomeV2/Cover"));
const Events = dynamic(() => import("@/components/HomeV2/Events"));
const WeekSchedule = dynamic(() => import("@/components/HomeV2/WeekSchedule"));

const whsap = "https://wa.me/573052597643?text=Hey";

export default function HomePage(props: any) {
  const { t } = useTranslation("home");
  const { locale } = useRouter();

  function addProductJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Medallo Baila",
        "alternateName": "TEMP",
        "url": "https://medallobaila.com/",
        "logo": "https://medallobaila.com/_next/image?url=%2Flogo.png&w=1920&q=75",
        "sameAs": [
          "https://www.instagram.com/harlen.giraldo/",
          "https://www.linkedin.com/in/harlen-giraldo-ortega-852179116/"
        ]
      }
  `,
    };
  }

  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 400)
      );
    }
  }, []);

  return (
    <>
      <Head>
        <title>Clases de baile en medellin</title>
        <meta
          name="description"
          content="Explora la mejor selección de academias de baile, eventos, clases y sociales en Medellín. Descubre clases de salsa, bachata, zouk y más."
        />
        <link
          rel="alternate"
          href={`https://medallobaila.com${
            props.currentLocale === "en-US" ? "/" + props.currentLocale : ""
          }`}
          hrefLang={props.currentLocale.toLowerCase()}
        />
        <link
          rel="canonical"
          href={`https://medallobaila.com${
            props.currentLocale === "en-US" ? "/" + props.currentLocale : ""
          }`}
        />
        .
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={props.keyWord} />
        <meta
          property="og:locale"
          content={props.currentLocale.toLowerCase()}
        />
        <meta
          property="og:title"
          content="Clases de Baile en Medellín - Sociales en Medellín"
        />
        <meta
          property="og:description"
          content="Explora la mejor selección de academias de baile, eventos, clases y sociales en Medellín. Descubre clases de salsa, bachata, zouk y más."
        />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addProductJsonLd()}
          key="product-jsonld"
        />
      </Head>
      <main>
        <header className={`header ${small ? "small" : ""}`}>MB</header>
        <Cover t={t} />
        <AdBanner />

        <Events />
        <WeekSchedule />
        <PrivateClasses t={t} locale={locale} />
        <Academies t={t} locale={locale} />
        <section className={style.more_services}>
          <h2>{t("info_title")}</h2>
          <p>{t("info_description")}</p>
          <Link href={whsap} target="_blank">
            {t("contact")}
          </Link>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps({ previewData, locale }: any) {
  const currentLocale = locale ?? "es-CO";
  const keyWordEN =
    "Explore the best selection of dance academies, events, classes and socials in Medellín. Discover salsa, bachata, zouk and more.";
  const keyWordES =
    "Explora la mejor selección de academias de baile, eventos, clases y sociales en Medellín. Descubre clases de salsa, bachata, zouk y más.";
  return {
    props: {
      keyWord: currentLocale === "en-US" ? keyWordEN : keyWordES,
      currentLocale,
      ...(await serverSideTranslations(currentLocale, [
        "common",
        "footer",
        "teachers",
        "home",
      ])),
      // Will be passed to the page component as props
    },
  };
}
