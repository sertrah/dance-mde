import Head from 'next/head'

import Academy from '@/components/Academy';
import { createClient } from '../../prismicio'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function AcademyPage({ page }: any) {
  return (
    <>
      <Head>
        <title>Academy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Academy data={page.data} />
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: 'bachata' }, locale: 'es-CO' },
      { params: { pid: 'bachata' }, locale: 'en-US' },
      { params: { pid: 'salsa' }, locale: 'es-CO' },
      { params: { pid: 'salsa' }, locale: 'en-US' },
      { params: { pid: 'kizomba' }, locale: 'es-CO' },
      { params: { pid: 'kizomba' }, locale: 'en-US' },
      { params: { pid: 'tango' }, locale: 'es-CO' },
      { params: { pid: 'tango' }, locale: 'en-US' },
      { params: { pid: 'zouk' }, locale: 'es-CO' },
      { params: { pid: 'zouk' }, locale: 'en-US' }],
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps({ previewData, params, locale }: any) {
  const client = createClient({ previewData });
  const currentLocale = locale ?? 'es-CO';

  const page = await client.getSingle(params.pid, { lang: currentLocale})

  return {
    props: {
      page,
      ...(await serverSideTranslations(currentLocale, [
        'common',
        'footer',
      ])),
    },
  }
}