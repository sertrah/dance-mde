import React, { FC } from "react";
import Image from "next/image";
import CustomLink from "@/components/UI-shared/CustomLink";

import styles from "../../../styles/Home.module.css";
import Typography from "@/helpers/prismic";
import { useRouter } from "next/router";



const Genre: FC<{
  isOpposite?: boolean;
  bgColor?: "--radial-primary" | "--radial-secondary" | "--radial-ternary";
  title: any;
  imageName?: string;
  image?: any;
}> = ({ isOpposite = false, bgColor = "--radial-primary", title, image }) => {
  const { locale } = useRouter();
  return (
    <CustomLink href={`/academy/${title[0].text.toLowerCase()}`} locale={locale} >
      <div
        style={{
          backgroundImage: `var(${bgColor ? bgColor : "--radial-primary"})`,
        }}
        className={`${styles.genre} ${isOpposite && styles.genre_right}`}
      >
        <Typography richContent={title} />
        <Image
          src={image.url}
          alt="Dancers"
          fill
          sizes="(max-width: 360px) 33vw"
          style={{ objectFit: "contain" }}
          className={title[0].text === 'Tango' ? styles.genre_tango : ''}
        />
      </div>
    </CustomLink>
  );
};
export default Genre;
