import { PrismicRichText as BasePrismicRichText } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "./../styles/info_page.module.css";
import React from "react";

export function linkResolver(document: any) {
  if (document.type === "post") {
    return "/blog/" + document.uid;
  }

  return "/";
}

const cookie = ({ content }: any) => {
  console.log(content);
  return (
    <div className={styles.section}>
      <div>
        <BasePrismicRichText linkResolver={linkResolver} field={content} />
      </div>
    </div>
  );
};

export async function getStaticProps({ previewData, locale }: any) {
  const client = createClient({ previewData });
  const currentLocale = locale ?? "es-CO";

  const { results } = await client.getByTag("politica-de-cookies", {
    lang: currentLocale,
  });

  const content = results[0] ? results[0].data.contenido : {};

  return {
    props: {
      content,
      ...(await serverSideTranslations(currentLocale, ["common", "footer"])),
    },
  };
}

export default cookie;
