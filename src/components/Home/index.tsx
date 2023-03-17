import { FC, useEffect, useState } from 'react'
import Contact from '@/components/UI-shared/Contact'
import Banner from '@/components/Home/Banner'
import Events from '@/components/Home/Events'
import Sociales from '@/components/Home/Sociales';
import HomeSlices from './Slices';
import { createClient } from '@/prismicio';
import { useRouter } from "next/router"

const Home: FC<{ page: any }> = ({ page }) => {
  const [data, setData] = useState<any>(null)
  const [isLoading, setLoading] = useState(false)
  const { locale } = useRouter();

  useEffect(() => {
    setLoading(true)
    const client = createClient()

    client.getByID(page.reference.id, { lang: locale} )
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
  }, []);

  return <>
    <Banner title={page.title} />
    <HomeSlices slices={page.slices} />
    {data?.title && <Events sliceItems={data.slices[0].items.slice(0,3)} title={data.title} />}
    <Sociales/>
    <Contact />
  </>
}

export default Home;