import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { FC } from "react";
import Typography from "@/helpers/prismic";
import { EventSliceItem } from "@/core/domain/interfaces/Event.repository";
import { locationLinks } from "@/helpers/temp";
import { Paragraph } from "@/components/UI-shared/Typography";

const Event: FC<
  EventSliceItem & { openDialog: () => void }
> = ({ image, date, title, LocationId, openDialog }) => {
  const handleOnClickEvent = () => {
    openDialog();
  }
  return (
    <div className={styles.event} onClick={handleOnClickEvent}>
      <div className={styles.detail}>
        <Typography richContent={date} />
        <Typography richContent={title} />
        <Paragraph >{locationLinks[LocationId].label}</Paragraph>
      </div>
      <Image src={image?.url ?? ''} alt="Vercel Logo" fill
        style={{ objectFit: "cover" }}
      />
      <div className={styles.cover}></div>
    </div>
  );
}

export default Event;
