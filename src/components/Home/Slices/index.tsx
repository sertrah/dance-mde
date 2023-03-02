import { FC } from 'react'
import Genres from '@/components/Home/Genres'
import Events from '@/components/Home/Events'

const slice_type = { home_genre: "", "home_events": "" }
const HomeSlices: FC<{ slices: any }> = ({ slices }) => {
  return <>
    {slices.map(({ items, slice_type, primary }: any) => {
      if (slice_type === "home_events") return <Events sliceItems={items} primary={primary} key={slice_type} />
      return <Genres sliceItems={items} primary={primary} key={slice_type} />
    })}
  </>

}
export default HomeSlices;