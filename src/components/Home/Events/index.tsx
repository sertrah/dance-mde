import Button from "@mui/material/Button";
import Link from 'next/link';

import { PrimaryTitle } from "@/components/UI-shared/Typography";
import Event from "./Event";
import styles from "@/styles/Home.module.css";

export default function Events() {
  return (
    <section className={styles.events}>
      <PrimaryTitle hasUnderline>Upcoming events</PrimaryTitle>
      <div className={styles.events_container}>
        <Event detail="Men Style, 📍 Bm studio " date="21 Abril" imageName="/event2.jpg" />
        <Event detail="Bachata Concert, 📍 Premium plaza " date="3 October" imageName="/events.jpg" />
        <Event detail="Footworks, 📍 Medellin " date="1 December" imageName="/even3.jpg" />
      </div>
      <Link href="/events" className={styles.events_btn} >
        <Button type="submit" variant="contained" >
          See all events
        </Button>
      </Link>

    </section>
  );
}
