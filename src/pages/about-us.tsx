import Head from "next/head";
import Events from "@/components/Events";
import { createClient } from "../prismicio";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { QueryClientProvider, QueryClient } from "react-query";

export default function EventsPage(props: any) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <>
      <Head>
        <title>Acerca de nosotros</title>
        <meta
          name="description"
          content="Descubrir los eventos de baile, socailes y talleres en Medellín."
        />
        <meta
          name="keywords"
          content="Eventos de Baile Medellín, Baile Social en Medellín, Conciertos y Baile en Medellín"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <QueryClientProvider client={queryClient}>
          <Events page={props?.page} />
        </QueryClientProvider>
      </main>
    </>
  );
}

export async function getStaticProps({ previewData, locale }: any) {
  const client = createClient({ previewData });
  const currentLocale = locale ?? "es-CO";

  const page = await client.getSingle("eventList", { lang: currentLocale });

  return {
    props: {
      page,
      ...(await serverSideTranslations(currentLocale, ["common", "footer"])),
    },
  };
}
