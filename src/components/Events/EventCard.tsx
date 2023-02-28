import React, { FC } from "react";
import Image from "next/image";
import Link from 'next/link';

import { Paragraph, SubTitle } from "@/components/UI-shared/Typography";
import styles from "../../styles/Events.module.css";

const Genre: FC<{ imageName?: string; }> = ({ imageName = "/dancers.png" }) => {
  return (
    <div className={styles.event_card}>
      <div className={styles.event_card_container_img}>
        <Image
          src={imageName}
          alt="Dancers"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.event_card_detail}>
        <SubTitle>BM style men</SubTitle>
        <Paragraph>21 of October </Paragraph>
        <Paragraph className={styles.event_card_description} >lorem impsu dolor lorem impsudolor
          lorem imspu dolor lorem impsudolor
          lorem impsu dolor  </Paragraph>
        <div className={styles.event_card_location}>
          <Paragraph>📍 Bm studio</Paragraph>
          <Link href="https://nextjs.org" passHref >see more</Link>
        </div>
      </div>
    </div>
  );
};
export default Genre;
