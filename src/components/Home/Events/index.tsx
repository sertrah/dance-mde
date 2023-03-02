import Button from "@mui/material/Button";
import Link from 'next/link';
import styles from "@/styles/Home.module.css";
import Typography from "@/helpers/prismic";
import Event from "./Event";

export default function Events({sliceItems, primary}: any) {
  return (
    <section className={styles.events}>
      <Typography richContent={primary.title} hasUnderline />
      <div className={styles.events_container}>
        {sliceItems.map(({ title, image, date, location }: any, index: number ) => (
          <Event
            key={`event-${index}`}
            title={title}
            image={image}
            date={date}
            location={location}
          />
        ))}
      </div>
      <Link href="/events" className={styles.events_btn} >
        <Button type="submit" variant="contained" >
          See all events
        </Button>
      </Link>

    </section>
  );
}
