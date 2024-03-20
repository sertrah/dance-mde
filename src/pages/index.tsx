import Head from 'next/head'

import { createClient } from '../prismicio'
import Home from '@/components/Home'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function HomePage(props: any) {

  function addProductJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Medallo Baila",
        "alternateName": "${props.page.data.metaTitle}",
        "url": "https://medallobaila.com/",
        "logo": "https://medallobaila.com/_next/image?url=%2Flogo.png&w=1920&q=75",
        "sameAs": [
          "https://www.instagram.com/harlen.giraldo/",
          "https://www.linkedin.com/in/harlen-giraldo-ortega-852179116/"
        ]
      }
  `,
    };
  }
  return (
    <>
      <Head>
        <title>{props.page.data.metaTitle}</title>
        <meta name="description" content={props.page.data.metaDescription} />
        <link rel="alternate" href={`https://medallobaila.com${props.currentLocale === 'en-US' ? '/' + props.currentLocale : ''}`} hrefLang={props.currentLocale.toLowerCase()} />
        <link rel="canonical" href={`https://medallobaila.com${props.currentLocale === 'en-US' ? '/' + props.currentLocale : ''}`} />.
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='keywords' content={props.keyWord} />
        <meta property="og:locale" content={props.currentLocale.toLowerCase()} />
        <meta property="og:title" content={props.page.data.metaTitle} />
        <meta property="og:description" content={props.page.data.metaDescription} />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addProductJsonLd()}
          key="product-jsonld"
        />

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
  const keyWordEN = 'Explore the best selection of dance academies, events, classes and socials in Medellín. Discover salsa, bachata, zouk and more.';
  const keyWordES = 'Explora la mejor selección de academias de baile, eventos, clases y sociales en Medellín. Descubre clases de salsa, bachata, zouk y más.';
  const page = await client.getSingle('home', { lang: currentLocale });
  return {
    props: {
      page,
      keyWord: currentLocale === 'en-US' ? keyWordEN : keyWordES,
      currentLocale,
      ...(await serverSideTranslations(currentLocale, [
        'common',
        'footer',
        'teachers'
      ])),
      // Will be passed to the page component as props
    }
  }
}
