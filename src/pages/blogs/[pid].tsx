import Head from "next/head";

import { createClient } from "../../prismicio";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Article from "@/components/Blogs/Articles";

export default function AcademyPage({
  data,
  SEO,
  title,
  siteDescription,
}: any) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content={SEO} />
        <meta name="description" content={siteDescription} />
        <meta property="og:site_name" content="Medallo Baila" />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={data.thumbail.url} />
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={data.thumbail.url} />
        <meta name="twitter:card" content={data.thumbail.url} />
      </Head>
      <main>
        <Article prismicData={data} />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: "the-grand-social" }, locale: "en-US" },
      { params: { pid: "the-grand-social" }, locale: "es-CO" },
      /* { params: { pid: "theGrandSocial" }, locale: "en-US" }, */
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ previewData, params, locale }: any) {
  const client = createClient({ previewData });

  const currentLocale = locale ?? "es-CO";
  const documentType = "blog";
  const prismicUID = params.pid;
  const page = await client.getByUID(documentType, prismicUID, {
    lang: currentLocale,
  });
  console.log(page);
  const title = "page.data.title[0].text";

  return {
    props: {
      data: page.data,
      title: page.data.og_title,
      SEO: "page.data.slices[0].primary.keyPhrases",
      siteDescription: "page.data.slices[0].primary.site_description",
      ...(await serverSideTranslations(currentLocale, ["common", "footer"])),
    },
  };
}
