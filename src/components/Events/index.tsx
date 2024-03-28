import { useState, ChangeEvent } from "react";
import { useQuery } from "react-query";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import EventCard from "./EventCard";
import styles from "../../styles/Events.module.css";
import Typography from "@/helpers/prismic";
import SliceEventController from "@/core/infrastructure/controllers/SliceEventController";
import { EventSliceItem } from "@/core/domain/interfaces/Event.repository";
import SliceEventDialog from "../UI-shared/SliceEventDialog";

export default function Events({ page }: any) {
  const totalEntries = page.data.slices.length || 0;
  const [currentPage, setPage] = useState(1);
  const [sliceEventSelected, setSliceEventSelected] = useState<EventSliceItem | null>(null);

  const { data: SliceEvent } = useQuery(
    [`event-list`, page.data.reference.id, 'es-co'],
    ({ queryKey: [, referenceId, lang] }) => SliceEventController.getSliceEventsFromPrismic(referenceId, lang),
    {
      retry: 1,
      retryDelay: 3000,
    }
  );

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleClose = ()=> {
    setSliceEventSelected(null);
  }
  return (
    <section className={styles.event_page}>
      <Typography richContent={page.data.title} hasUnderline />
      <Stack spacing={7}>
        <div className={styles.events}>
          {SliceEvent?.list && SliceEvent?.list?.map(
            (sliceEventData: EventSliceItem, index: number) => (
              <EventCard
                key={`event-card-${sliceEventData?.title[0]?.text} ${index}`}
                openDialog={setSliceEventSelected}
                {...sliceEventData}
              />
            )
          )}
        </div>
        {totalEntries > 0 && (
          <Pagination count={totalEntries} page={currentPage} onChange={handleChange} shape="rounded" color="primary" />
        )}
      </Stack>

      <SliceEventDialog
        open={!!sliceEventSelected}
        currentSliceEvent={sliceEventSelected}
        onClose={handleClose}
      />
    </section>
  );
}
