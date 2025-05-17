import Head from "next/head";
import Contact from "@/components/UI-shared/Contact";
import { i18n } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function EventsPage(props: any) {
  return (
    <>
      <Head>
        <title>{i18n?.t("contact_title")}</title>
        <meta name="description" content={i18n?.t("contact_description")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Contact />
      </main>
    </>
  );
}

export async function getStaticProps({ previewData, locale }: any) {
  const currentLocale = locale ?? "es-CO";

  return {
    props: {
      ...(await serverSideTranslations(currentLocale, ["common", "footer"])),
    },
  };
}
