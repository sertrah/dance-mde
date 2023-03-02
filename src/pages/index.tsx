import Head from 'next/head'

import { createClient } from '../prismicio'
import Home from '@/components/Home'


export default function HomePage(props: any) {
  return (
    <>
      <Head>
        <title>Medellin Dance Events</title>
        <meta name="description" content="Eventos de baile en medellin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
