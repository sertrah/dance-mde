import Head from 'next/head'

import Teachers from '@/components/Teachers';
import { createClient } from '../../prismicio'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function TeachersPage({ page }: any) {
  return (
    <>
      <Head>
        <title>Profesores de baile</title>
        <meta name="description" content="Reserva clases de baile privadas o personalizadas en Medellín. clases de baile en medellin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Teachers data={page?.data} />
    </>
  )
}

export async function getStaticProps({ previewData, params, locale }: any) {
  const client = createClient({ previewData });
  const currentLocale = locale ?? 'es-CO';

  const page = await client.getSingle('teachers', { lang: currentLocale})

  return {
    props: {
      page,
      ...(await serverSideTranslations(currentLocale, [
        'common',
        'footer',
        'teachers',
      ])),
    },
  }
}