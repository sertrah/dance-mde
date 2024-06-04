import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import style from "./../styles/temp.module.css";

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
        <section className={style.banner}>
          <div className="prueba" />
          <video controls autoPlay loop muted>
            <source src="/videos/banner.mp4" type="video/mp4" />
          </video>
          <h1>{t("title")}</h1>
          <p>{t("description_home")}</p>
        </section>
        <Events />
        <WeekSchedule />
        <section className={style.private}>
          <h2>{t("private_title")}</h2>
          <p>{t("private_short_description")}</p>
          <div className={style.private_images}>
            <Image
              className={style.private_image_1}
              src="/ana.webp"
              alt="Bailarina de bachata"
              style={{ objectFit: "cover" }}
              width={200}
              height={300}
            />
            <Image
              className={style.private_image_2}
              src="/yerin.png"
              alt="Socialas de baile en medellin"
              style={{ objectFit: "cover" }}
              width={200}
              height={300}
            />
            <Image
              className={style.private_image_3}
              src="/sebas.webp"
              alt="Social Event Medellin"
              style={{ objectFit: "cover" }}
              width={200}
              height={300}
            />
            <div className={style.private_draw}></div>
          </div>

          <p>{t("private_description")} </p>
          <Link href={"/teachers"} locale={locale}>
            {t("contact_private")}
          </Link>
        </section>
        <section className={style.academies}>
          <h2>{t("academy_title")}</h2>
          <p className={style.academies_description}>
            {t("academy_description")}
          </p>
          <div className={style.academy_container}>
            <Link
              href={`/academy/bachata`}
              locale={locale}
              className={`${style.academy} ${style.academy_bachata}`}
            >
              <Image
                className={style.academy_teachers}
                src="/dancers/bachata.webp"
                alt="Social Event Medellin"
                style={{ objectFit: "contain" }}
                width={130}
                height={200}
              />
              <p>Bachata</p>
            </Link>
            <Link
              href={`/academy/zouk`}
              locale={locale}
              className={`${style.academy} ${style.academy_zouk}`}
            >
              <Image
                className={style.academy_teachers}
                src="/dancers/zouk.webp"
                alt="Social Event Medellin"
                style={{ objectFit: "contain" }}
                width={130}
                height={200}
              />
              <p>Zouk</p>
            </Link>
            <Link
              href={`/academy/salsa`}
              locale={locale}
              className={`${style.academy} ${style.academy_salsa}`}
            >
              <Image
                className={style.academy_teachers}
                src="/dancers/salsa.webp"
                alt="Social Event Medellin"
                style={{ objectFit: "contain" }}
                width={130}
                height={200}
              />
              <p>Salsa</p>
            </Link>
            <Link
              href={`/academy/tango`}
              locale={locale}
              className={`${style.academy} ${style.academy_tango}`}
            >
              <Image
                className={style.academy_teachers}
                src="/dancers/tango.webp"
                alt="Social Event Medellin"
                style={{ objectFit: "contain" }}
                width={130}
                height={200}
              />
              <p>Tango</p>
            </Link>
            <Link
              href={`/academy/kizomba`}
              locale={locale}
              className={`${style.academy} ${style.academy_kiz}`}
            >
              <Image
                className={style.academy_teachers}
                src="/dancers/kiz.webp"
                alt="Social Event Medellin"
                style={{ objectFit: "contain" }}
                width={130}
                height={168}
              />
              <p>Kizomba</p>
            </Link>
            <Link
              href={`/academy/urbano`}
              locale={locale}
              className={`${style.academy} ${style.academy_urbano}`}
            >
              <Image
                className={style.academy_teachers}
                src="/ana.webp"
                alt="Social Event Medellin"
                style={{ objectFit: "contain" }}
                width={100}
                height={200}
              />
              <p>Urbano</p>
            </Link>
          </div>
          <div className={style.cuadro}></div>
        </section>
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
