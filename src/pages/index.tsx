import Head from 'next/head'

import { createClient } from '../prismicio'
import Home from '@/components/Home'


export default function HomePage(props: any) {
  return (
    <>
      <Head>
        <title>Clases de Baile en Medellín - Sociales en Medellín</title>
        <meta name="description" content="Encuentra donde bailar salsa, bachata y más en Medellín. Todos los niveles. Descubre los horarios y precios en línea. ¡Disfruta de la magia de Medellín!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Clases de Baile en Medellín - Sociales en Medellín" />
        <meta property="og:description" content="Encuentra donde bailar salsa, bachata y más en Medellín. Todos los niveles. Descubre los horarios y precios en línea. ¡Disfruta de la magia de Medellín!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Home page={props.page.data} />
      </main>
    </>
  )
}

export async function getStaticProps({ previewData }: any) {
  const client = createClient({ previewData })

  const page = await client.getSingle('home')

  return {
    props: {
      page,
    },
  }
}
