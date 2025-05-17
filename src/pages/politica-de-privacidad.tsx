import { PrismicRichText as BasePrismicRichText } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "./../styles/info_page.module.css";
import React from "react";
import Head from "next/head";

export function linkResolver(document: any) {
  if (document.type === "post") {
    return "/blog/" + document.uid;
  }

  return "/";
}

const aboutUs = ({ content, title }: any) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.section}>
        <div>
          <BasePrismicRichText linkResolver={linkResolver} field={content} />
        </div>
      </div>
    </>
  );
};

export async function getStaticProps({ previewData, locale }: any) {
  const client = createClient({ previewData });
  const currentLocale = locale ?? "es-CO";

  const { results } = await client.getByTag("politica-de-privacidad", {
    lang: currentLocale,
  });

  const content = results[0] ? results[0].data.contenido : {};
  const title = results[0] ? results[0].data.title : "Privacy Policy";

  return {
    props: {
      title,
      content,
      ...(await serverSideTranslations(currentLocale, ["common", "footer"])),
    },
  };
}

export default aboutUs;
