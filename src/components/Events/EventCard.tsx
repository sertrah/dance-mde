import React, { FC } from "react";
import Image from "next/image";
import Link from 'next/link';
import { PrismicRichText } from "@prismicio/react";

import styles from "../../styles/Events.module.css";
import { SubTitle } from "../UI-shared/Typography";
import Typography from "@/helpers/prismic";

const components = {
  paragraph: ({ children }: any) => (
    <SubTitle >{children}</SubTitle>
  ),
}


const Genre: FC<{
  imageName?: string;
  imageUrl?: any;
  date?: any;
  location?: any;
  description?: any;
  title?: any;
}> = ({ title, date, location, description, imageUrl }) => {
  return (
    <div className={styles.event_card}>
      <div className={styles.event_card_container_img}>
        <Image
          src={imageUrl}
          alt="Dancers"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.event_card_detail}>
        <PrismicRichText field={title} components={components} />
        <Typography richContent={date} />
        <Typography richContent={description} />
        <div className={styles.event_card_location}>
          <Typography richContent={location} />
          <Link href="https://nextjs.org" passHref >see more</Link>
        </div>
      </div>
    </div>
  );
};
export default Genre;
