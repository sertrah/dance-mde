import Head from "next/head";

import Teachers from "@/components/Teachers";
import { createClient } from "../../prismicio";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function TeachersPage({ page, locale, seo }: any) {
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta
          name="description"
          content={seo.description}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="Clases de Baile Medellín, Escuela de Baile Medellín, aprender a bailar bachata, Salsa/Bachata/Kizomba/Zouk Medellín "
        />
        <link
          rel="canonical"
          href={`https://medallobaila.com/${
            locale === "es-CO" ? "" : "en-US/"
          }teachers`}
        />
      </Head>
      <Teachers data={page?.data} />
    </>
  );
}

export async function getStaticProps({ previewData, params, locale }: any) {
  const client = createClient({ previewData });
  const currentLocale = locale ?? "es-CO";

  const page = await client.getSingle("teachers", { lang: currentLocale });
  const seo =
    currentLocale === "es-CO"
      ? {
          title: "Los mejores profesores de baile en Medellín",
          description:
            "Clases Presencial o en línea. Clases privadas o personalizadas en Medellín. Zouk, Bachata, salsa y tango",
        }
      : {
          title: "The best dance teachers in Medellín",
          description:
            "Presential or online classes. Private or personalized classes in Medellín. Zouk, Bachata, salsa and tango",
        };

  return {
    props: {
      locale,
      page,
      seo,
      ...(await serverSideTranslations(currentLocale, [
        "common",
        "footer",
        "teachers",
      ])),
    },
  };
}
