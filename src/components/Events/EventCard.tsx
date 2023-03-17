import React, { FC } from "react";
import Image from "next/image";
import CustomLink from "@/components/UI-shared/CustomLink";
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
  showmore?: any;
}> = ({ title, date, location, description, imageUrl, showmore }) => {
  const handleOnClickEvent = () => {
    window.open(
      showmore?.url, "_blank");
  }
  return (
    <div className={styles.event_card} onClick={handleOnClickEvent}>
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
          <CustomLink href="https://nextjs.org" passHref >Ver más</CustomLink>
        </div>
      </div>
    </div>
  );
};
export default Genre;
