import { FC } from 'react'
import Contact from '@/components/UI-shared/Contact'
import Banner from '@/components/Home/Banner'
import HomeSlices from './Slices';

const Home: FC<{ page: any }> = ({ page }) => <>
  <Banner title={page.title} />
  <HomeSlices slices={page.slices} />
  <Contact />
</>

export default Home;