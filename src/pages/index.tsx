import Head from "next/head";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HeroSection from "@/components/HomeFInal/HeroSection/HeroSection";
import BlogSection from "@/components/HomeFInal/BlogSection/BlogSection";

/* const AdPopOut = dynamic(() => import("@/components/UI-shared/AdPopOut"), {
  ssr: false,
}); */

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

function addProductJsonLd(title: string, description: string = "") {
  return {
    __html: `{
"@context": "https://schema.org",
"@type": "Organization",
"name": "${title}",
"url": "http://medallobaila.com/",
"logo": "https://medallobaila.com/logo.png",
"description": "${description}",
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
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MedalloBaila" />
        <meta property="og:description" content={keyWord} />
        <meta property="og:image" content="https://medallobaila.com/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addProductJsonLd(title, keyWord)}
          key="product-jsonld"
        />
      </Head>
      <main>
        {/*  <AdPopOut /> */}
        <HeroSection />
        <UpcomingEvents />
        <DanceEventsCalendar />
        <PrivateDanceLessons />
        <DanceAcademies />
        <BlogSection lang={currentLocale} />
      </main>
    </>
  );
}

export async function getStaticProps({ previewData, locale }: any) {
  const currentLocale = locale ?? "es-CO";
  const title =
    currentLocale === "en-US"
      ? "MedalloBaila | Dance classes | Social Dancing | Medellín"
      : "MedalloBaila | Clases de baile | Sociales-bailar | Medellín";
  const keyWordEN =
    "Explore the best selection of dance academies, events, classes and socials in Medellín. Salsa, bachata, zouk lessons and more for children and adults";
  const keyWordES =
    "Explora la mejor selección de academias de baile, eventos, clases y sociales en Medellín. Clases de salsa, bachata, zouk y más para niños y adultos";

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
