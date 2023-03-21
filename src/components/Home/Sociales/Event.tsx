import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { FC } from "react";
import Typography from "@/helpers/prismic";

const Event: FC<{
  image: any,
  date: any,
  title: any,
  location: any,
  linkto: any,
}> = ({ image, date, title, location, linkto }) => {
  const handleOnClickEvent = () => {
    window.open(
      linkto.url, "_blank");
  }
  return (
    <div className={styles.event} onClick={handleOnClickEvent}>
      <div className={styles.detail}>
        <Typography richContent={date} />
        <Typography richContent={title} />
        <Typography richContent={location} />
      </div>
      <Image src={image.url} alt="Vercel Logo" fill
        style={{ objectFit: "cover" }}
      />
      <div className={styles.cover}></div>
    </div>
  );
}

export default Event;
