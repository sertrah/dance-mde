import { useState, ChangeEvent } from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router"
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import EventCard from "./EventCard";
import styles from "../../styles/Events.module.css";
import Typography from "@/helpers/prismic";
import SliceEventController from "@/core/infrastructure/controllers/SliceEventController";

export default function Events({ page }: any) {
  const totalEntries = page.data.slices.length || 0;
  const [currentPage, setPage] = useState(1);
  const { locale } = useRouter();

  const { data: SliceEvent } = useQuery(
    [`event-list`, page.data.reference.id, locale],
    ({ queryKey: [, referenceId, lang] }) => SliceEventController.getSliceEventsFromPrismic(referenceId, lang),
    {
      retry: 1,
      retryDelay: 3000,
    }
  );


  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <section className={styles.event_page}>
      <Typography richContent={page.data.title} hasUnderline />
      <Stack spacing={7}>
        <div className={styles.events}>
          {SliceEvent?.list && SliceEvent?.list?.map(
            ({ image, date, location, title, description, showmore }: any, index: number) => (
              <EventCard
                key={`event-card-${title[0].text} ${index}`}
                imageName="/event2.jpg"
                imageUrl={image.url}
                date={date}
                location={location}
                description={description}
                title={title}
                showmore={showmore}
              />
            )
          )}
        </div>
        {totalEntries > 0 && (
          <Pagination count={totalEntries} page={currentPage} onChange={handleChange} shape="rounded" color="primary" />
        )}
      </Stack>
    </section>
  );
}
