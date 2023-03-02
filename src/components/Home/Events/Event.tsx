import Image from "next/image";
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/es' // load on demand
import { SubTitle, Paragraph } from "@/components/UI-shared/Typography";
import styles from "@/styles/Home.module.css";
import { FC, useMemo } from "react";
dayjs.locale('es') // use Spanish locale globally

const Event: FC<{
  image: any,
  date: any,
  title: any,
  location: any,
}> = ({ image, date, title, location }) => {
  const dayMemo: Dayjs | null = useMemo(() => dayjs(date), [date]);
  return (
    <div className={styles.event}>
      <div className={styles.detail}>
        <SubTitle>{dayMemo.format('MMMM D')}</SubTitle>
        <Paragraph>{`${title}, ${location}`}</Paragraph>
      </div>
      <Image src={image.url} alt="Vercel Logo" fill
        style={{ objectFit: "cover" }}
      />
      <div className={styles.cover}></div>
    </div>
  );
}

export default Event;
