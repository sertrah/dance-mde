import Image from "next/image";
import { SubTitle, Paragraph } from "@/components/UI-shared/Typography";
import styles from "@/styles/Home.module.css";
import { FC } from "react";

const Event: FC<{
  imageName: string,
  date: string,
  detail: string,
}> = ({ imageName, date, detail }) => {
  return (
    <div className={styles.event}>
      <div className={styles.detail}>
        <SubTitle>{date}</SubTitle>
        <Paragraph>{detail}</Paragraph>
      </div>
      <Image src={imageName} alt="Vercel Logo" fill
        style={{ objectFit: "cover" }}
      />
      <div className={styles.cover}></div>
    </div>
  );
}

export default Event;
