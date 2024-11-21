import Head from "next/head";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HeroSection from "@/components/HomeFInal/HeroSection/HeroSection";

const UpcomingEvents = dynamic(
  () => import("@/components/HomeFInal/UpcomingEvents/UpcomingEvents")
);
const DanceEventsCalendar = dynamic(
  () => import("@/components/HomeFInal/DanceEventsCalendar/DanceEventsCalendar")
);
const PrivateDanceLessons = dynamic(
  () => import("@/components/HomeFInal/PrivateDanceLessons/PrivateDanceLessons")
);
const DanceAcademies = dynamic(
  () => import("@/components/HomeFInal/DanceAcademies/DanceAcademies")
);

function addProductJsonLd() {
  return {
    __html: `{
"@context": "https://schema.org",
"@type": "Organization",
"name": "MedalloBaila",
"url": "http://medallobaila.com/",
"logo": "https://medallobaila.com/logo.png",
"description": "Descubre los mejores eventos y clases de baile en Medellín. Salsa, bachata, zouk y más.",
"hasOfferCatalog": {
  "@type": "OfferCatalog",
  "name": "Servicios especiales",
  "itemListElement": [
    {
      "@type": "OfferCatalog",
      "name": "Clases de baile",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Clase de Salsa"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Clase de Bachata"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Clase de Zouk"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Clase de personalizadas"
          }
        }
      ]
    },
    {
      "@type": "OfferCatalog",
      "name": "Eventos de baile",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Event",
            "name": "Noche de Salsa en Medellín",
            "location": "Medellín",
            "startDate": "2024-01-20T20:00",
            "endDate": "2024-12-21T02:00"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Event",
            "name": "Maratón de Bachata en Medellín",
            "location": "Medellín",
            "startDate": "2024-01-20T20:00",
            "endDate": "2024-12-21T02:00"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Event",
            "name": "Baila Zouk en Medellín",
            "location": "Medellín",
            "startDate": "2024-01-20T20:00",
            "endDate": "2024-12-21T02:00"
          }
        }
      ]
    }
  ]
},
"event": [
  {
    "@type": "Event",
    "name": "Noche de bailar Salsa, Bachata y Zouk en Medellín",
    "location": "Medellín",
    "startDate": "2024-01-20T20:00",
    "endDate": "2024-12-21T02:00",
    "offers": {
      "@type": "Offer",
      "price": "10000",
      "priceCurrency": "COP"
    }
  }
]
}
`,
  };
}

export default function Home2({
  title,
  keyWord,
  currentLocale,
  keywords,
}: any) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={keyWord} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href={`https://medallobaila.com${
            currentLocale === "en-US" ? "/" + currentLocale : ""
          }`}
        />
        <meta property="og:locale" content={currentLocale.toLowerCase()} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={keyWord} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addProductJsonLd()}
          key="product-jsonld"
        />
      </Head>
      <main style={{ minHeight: "6363px" }}>
        <HeroSection />
        <UpcomingEvents />
        <DanceEventsCalendar />
        <PrivateDanceLessons />
        <DanceAcademies />
      </main>
    </>
  );
}

export async function getStaticProps({ previewData, locale }: any) {
  const currentLocale = locale ?? "es-CO";
  const title =
    currentLocale === "en-US"
      ? "Dance classes in Medellín - Social Dancing in Medellín"
      : "Clases de baile en Medellín - Sociales en Medellín";
  const keyWordEN =
    "Explore the best selection of dance academies, events, classes and socials in Medellín. Discover salsa, bachata, zouk and more.";
  const keyWordES =
    "Explora la mejor selección de academias de baile, eventos, clases y sociales en Medellín. Descubre clases de salsa, bachata, zouk y más.";

  const keywordsEN =
    "dancing classes near me, dance classes for adults near me, salsa dance, bachata dance, dance studio dance, private dancing class	";
  const keywordsES =
    "clases privadas, clases de baile cerca de mi, clases de baile para adultos cerca de mi, baile salsa, baile bachata, estudio de baile danza  ";
  return {
    props: {
      title,
      keyWord: currentLocale === "en-US" ? keyWordEN : keyWordES,
      keywords: currentLocale === "en-US" ? keywordsEN : keywordsES,
      currentLocale,
      ...(await serverSideTranslations(currentLocale, [
        "common",
        "footer",
        "home",
      ])),
      // Will be passed to the page component as props
    },
  };
}
