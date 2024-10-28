import Head from "next/head";
import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HeroSection from "@/components/HomeFInal/HeroSection/HeroSection";

const UpcomingEvents = dynamic(
  () => import("@/components/HomeFInal/UpcomingEvents/UpcomingEvents"),
  { ssr: false }
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

export default function Home2({ title, keyWord }: any) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={keyWord} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
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
  return {
    props: {
      title,
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
