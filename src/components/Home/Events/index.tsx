import Button from "@mui/material/Button";
import styles from "@/styles/Home.module.css";
import Typography from "@/helpers/prismic";
import CustomLink from "@/components/UI-shared/CustomLink";
import Event from "./Event";
import { useTranslation } from 'next-i18next'
import SliceEventDialog from "@/components/UI-shared/SliceEventDialog";
import { useState } from "react";
import { EventSliceItem } from "@/core/domain/interfaces/Event.repository";


export default function Events({ sliceItems, title }: any) {
  const { t } = useTranslation('common');
  const [sliceEventSelected, setSliceEventSelected] = useState<EventSliceItem | null>(null);
  const handleClose = () => {
    setSliceEventSelected(null);
  }
  return (
    <section className={styles.events}>
      <Typography richContent={title} hasUnderline />
      <div className={styles.events_container}>
        {sliceItems.map((eventSliceItem: EventSliceItem, index: number) => (
          <Event
            key={`event-${index}`}
            openDialog={() => setSliceEventSelected(eventSliceItem)}
            {...eventSliceItem}
          />
        ))}
      </div>
      <CustomLink href="/events" className={styles.events_btn} >
        <Button type="submit" variant="contained" >
          {t('home_event_button')}
        </Button>
      </CustomLink>
      <SliceEventDialog
        open={!!sliceEventSelected}
        currentSliceEvent={sliceEventSelected}
        onClose={handleClose}
      />
    </section>
  );
}
