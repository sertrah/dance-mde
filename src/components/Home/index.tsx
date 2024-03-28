
import { FC } from "react";
import dynamic from 'next/dynamic'

import Banner from "@/components/Home/Banner";

const Sociales = dynamic(() => import('@/components/Home/Sociales'))
const Teachers = dynamic(() => import('@/components/Home/Teachers'))
const Events = dynamic(() => import('@/components/Home/Events'))
const Contact = dynamic(() => import('@/components/UI-shared/Contact'))

import { useQuery } from "react-query";
import HomeSlices from "./Slices";
import SliceEventController from "@/core/infrastructure/controllers/SliceEventController";

const Home: FC<{ page: any }> = ({ page }) => {
  const { data: SliceEvent } = useQuery(
    [`event-list`, 'ZAX_whAAACgATCfT', 'es-CO'],
    ({ queryKey: [, referenceId, lang] }) =>
      SliceEventController.getSliceEventsFromPrismic(referenceId, lang),
    {
      retry: 1,
      retryDelay: 3000,
    }
  );
  return (
    <>
      <Banner title={page.title} siteDescription={page.description} />
      <Sociales />
      <Teachers title={page.teacherTitle} description={page.teacherDescription} image={page.teacher} />
      {SliceEvent?.commonTitle && (
        <Events
          sliceItems={SliceEvent?.list?.slice(0, 3)}
          title={SliceEvent?.commonTitle}
        />
      )}
      <HomeSlices slices={page.slices} />
      <Contact />
    </>
  );
};

export default Home;
