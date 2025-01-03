import Head from "next/head";

import Academy from "@/components/Academy";
import { createClient } from "../../prismicio";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PrismicDocument } from "@prismicio/types";

function addProductJsonLd(title: string, description: string = "", category: string) {
  return {
    __html: `{
  "@context": "https://schema.org/",
  "@type": "Product",
  "@id": "https://medallobaila.com/academy/${category}",
  "name": "${title}",
  "brand": { "@type": "Brand", "name": "MedalloBaila" },
  "image": "https://medallobaila.com/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fdance-mde%2FZyP9iq8jQArT0GZ5_nuevaguardia.webp%3Fauto%3Dformat%2Ccompress&w=3840&q=75",
  "description":"${description}",
  "mpn": "54549767",
  "sku": "25029",
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": 80.800,
    "highPrice": 130400,
    "priceCurrency": "COP",
    "offers": [
      {
        "@type": "Offer",
        "price": 130400,
        "priceCurrency": "COP",
        "availability": "http://schema.org/InStock",
        "sku": "25029",
        "itemCondition": "http://schema.org/NewCondition",
        "priceValidUntil": "2026-01-03T13:57:28Z"
      }
    ]
  }
}
`,
  };
}

export default function AcademyPage({
  page,
  SEO,
  title,
  siteDescription,
  currentLocale
}: any) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content={SEO} />
        <meta name="description" content={siteDescription} />
        <meta property="og:locale" content={currentLocale.toLowerCase()} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MedalloBaila" />
        <meta property="og:description" content={siteDescription} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addProductJsonLd(title, siteDescription, page.uuid)}
          key="product-jsonld"
        />
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
      { params: { pid: "urbano" }, locale: "es-CO" },
      { params: { pid: "urbano" }, locale: "en-US" },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ previewData, params, locale }: any) {
  const client = createClient({ previewData });

  const currentLocale = locale ?? "es-CO";
  const page: PrismicDocument<Record<string, any>, string, string> = await client.getSingle(params.pid, { lang: currentLocale });
  const title = page.data.title[0].text;

  return {
    props: {
      page,
      title,
      currentLocale,
      SEO: page.data.slices[0].primary.keyPhrases,
      siteDescription: page.data.slices[0].primary.site_description,
      ...(await serverSideTranslations(currentLocale, ["common", "footer"])),
    },
  };
}
