import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { PrimaryTitle } from "@/components/UI-shared/Typography";
import EventCard from "./EventCard";
import styles from '../../styles/Events.module.css';

export default function Events() {
  return (
    <section className={styles.event_page}>
      <PrimaryTitle hasUnderline>Events</PrimaryTitle>
      <Stack spacing={7}>
        <div className={styles.events}>
          <EventCard imageName="/event2.jpg" />
          <EventCard imageName="/event3.jpg" />
          <EventCard imageName="/yair.jpg" />
        </div>
        <Pagination count={10} shape="rounded" color="primary" />
      </Stack>
    </section>
  );
}
