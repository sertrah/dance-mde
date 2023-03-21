import { FC, useEffect, useState } from 'react'
import Contact from '@/components/UI-shared/Contact'
import Banner from '@/components/Home/Banner'
import Events from '@/components/Home/Events'
import Sociales from '@/components/Home/Sociales';
import { useQuery } from "react-query";
import HomeSlices from './Slices';
import { useRouter } from "next/router"
import SliceEventController from '@/core/infrastructure/controllers/SliceEventController';

const Home: FC<{ page: any }> = ({ page }) => {
  const { locale } = useRouter();
  const { data: SliceEvent } = useQuery(
    [`event-list`, page.reference.id, locale],
    ({ queryKey: [, referenceId, lang] }) => SliceEventController.getSliceEventsFromPrismic(referenceId, lang),
    {
      retry: 1,
      retryDelay: 3000,
    }
  );

  return <>
    <Banner title={page.title} />
    <HomeSlices slices={page.slices} />
    {SliceEvent?.commonTitle && <Events sliceItems={SliceEvent?.list?.slice(0, 3)} title={SliceEvent?.commonTitle} />}
    <Sociales />
    <Contact />
  </>
}

export default Home;