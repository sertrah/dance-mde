import DanceAcademies from "@/components/HomeFInal/DanceAcademies/DanceAcademies";
import DanceEventsCalendar from "@/components/HomeFInal/DanceEventsCalendar/DanceEventsCalendar";
import HeroSection from "@/components/HomeFInal/HeroSection/HeroSection";
import PrivateDanceLessons from "@/components/HomeFInal/PrivateDanceLessons/PrivateDanceLessons";
import UpcomingEvents from "@/components/HomeFInal/UpcomingEvents/UpcomingEvents";
import Head from "next/head";
import Image from "next/image";

export default function Home2({ page }: any) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Discutamos acerca del baile en medellin."
        />
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

export async function getStaticProps({ previewData, params, locale }: any) {
  /*   const client = createClient({ previewData });
  const currentLocale = locale ?? "es-CO";

  const page = await client.getSingle("teachers", { lang: currentLocale });
 */
  return {
    props: {
      page: "",
    },
  };
}
