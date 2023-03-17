import Head from 'next/head'

import { createClient } from '../prismicio'
import Home from '@/components/Home'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


export default function HomePage(props: any) {
  return (
    <>
      <Head>
        <title>{props.page.data.metaTitle}</title>
        <meta name="description" content={props.page.data.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={props.page.data.metaTitle} />
        <meta property="og:description" content={props.page.data.metaDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Home page={props.page.data} />
      </main>
    </>
  )
}

export async function getStaticProps({ previewData, locale }: any) {
  const client = createClient({ previewData })
  const currentLocale = locale ?? 'es-CO';
  const page = await client.getSingle('home', { lang: currentLocale })
  return {
    props: {
      page,
      ...(await serverSideTranslations(currentLocale, [
        'common',
        'footer',
      ])),
      // Will be passed to the page component as props
    }
  }
}
