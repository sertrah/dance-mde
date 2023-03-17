import Button from "@mui/material/Button";
import styles from "@/styles/Home.module.css";
import Typography from "@/helpers/prismic";
import CustomLink from "@/components/UI-shared/CustomLink";
import Event from "./Event";
import { useTranslation } from 'next-i18next'


export default function Events({ sliceItems, title }: any) {
  const { t } = useTranslation('common');

  return (
    <section className={styles.events}>
      <Typography richContent={title} hasUnderline />
      <div className={styles.events_container}>
        {sliceItems.map(({ title, image, date, location, showmore }: any, index: number) => (
          <Event
            key={`event-${index}`}
            title={title}
            image={image}
            date={date}
            location={location}
            linkto={showmore}
          />
        ))}
      </div>
      <CustomLink href="/events" className={styles.events_btn} >
        <Button type="submit" variant="contained" >
          {t('home_event_button')}
        </Button>
      </CustomLink>

    </section>
  );
}
