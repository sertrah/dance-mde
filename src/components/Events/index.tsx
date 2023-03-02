import { useState, ChangeEvent } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { PrimaryTitle } from "@/components/UI-shared/Typography";
import EventCard from "./EventCard";
import styles from "../../styles/Events.module.css";
import Typography from "@/helpers/prismic";

export default function Events({ page }: any) {
  const totalEntries = page.data.slices.length || 0;
  const [currentPage, setPage] = useState(1);
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  console.log(page.data.slices)
  return (
    <section className={styles.event_page}>
      <Typography richContent={page.data.title} hasUnderline />
      <Stack spacing={7}>
        <div className={styles.events}>
          {page?.data?.slices?.[currentPage - 1]?.items && page.data.slices[currentPage - 1 ].items.map(
            ({ image, date, location, title, description, showmore }: any) => (
              <EventCard
                key={`event-card-${title[0].text}`}
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
