import { useState, ChangeEvent, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { createClient } from '@/prismicio';
import EventCard from "./EventCard";
import styles from "../../styles/Events.module.css";
import Typography from "@/helpers/prismic";

export default function Events({ page }: any) {
  const totalEntries = page.data.slices.length || 0;
  const [currentPage, setPage] = useState(1);
  const [responseData, setData] = useState<any>(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const client = createClient()

    client.getByID(page.data.reference.id)
      .then((response) => {
        setData(response.data)
        console.log(response.data)
        setLoading(false)
      })
  }, []);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <section className={styles.event_page}>
      <Typography richContent={page.data.title} hasUnderline />
      <Stack spacing={7}>
        <div className={styles.events}>
          {responseData?.slices[0].items && responseData?.slices[0].items.map(
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
