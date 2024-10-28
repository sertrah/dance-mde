import Head from "next/head";

import Academy from "@/components/Academy";
import { createClient } from "../../prismicio";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function AcademyPage({
  page,
  SEO,
  title,
  description,
  siteDescription,
}: any) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content={SEO} />
        <meta name="description" content={siteDescription} />
      </Head>
      <Academy data={page.data} />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: "bachata" }, locale: "es-CO" },
      { params: { pid: "bachata" }, locale: "en-US" },
      { params: { pid: "salsa" }, locale: "es-CO" },
      { params: { pid: "salsa" }, locale: "en-US" },
      { params: { pid: "kizomba" }, locale: "es-CO" },
      { params: { pid: "kizomba" }, locale: "en-US" },
      { params: { pid: "tango" }, locale: "es-CO" },
      { params: { pid: "tango" }, locale: "en-US" },
      { params: { pid: "zouk" }, locale: "es-CO" },
      { params: { pid: "zouk" }, locale: "en-US" },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ previewData, params, locale }: any) {
  const client = createClient({ previewData });

  const currentLocale = locale ?? "es-CO";
  const title =
    currentLocale === "en-US"
      ? "Dance Academies | Medellín"
      : "Academias de baile y danza | Medellín";
  const description =
    currentLocale === "en-US"
      ? "Academies of dance, projection and social dance. Classes of salsa, zouk, bachata, tango, porro, etc."
      : "Academias de danza, proyeccion y baile social. Clases de salsa, zouk, bachata, tango, porro";
  const page = await client.getSingle(params.pid, { lang: currentLocale });

  return {
    props: {
      page,
      title,
      description,
      SEO: page.data.slices[0].primary.keyPhrases,
      siteDescription: page.data.slices[0].primary.site_description,
      ...(await serverSideTranslations(currentLocale, ["common", "footer"])),
    },
  };
}
