import React, { FC } from "react";
import Image from "next/image";
import Link from 'next/link';

import styles from "../../../styles/Home.module.css";
import Typography from "@/helpers/prismic";



const Genre: FC<{
  isOpposite?: boolean;
  bgColor?: "--radial-primary" | "--radial-secondary" | "--radial-ternary";
  title: any;
  imageName?: string;
  image?: any;
}> = ({ isOpposite = false, bgColor = "--radial-primary", title, image }) => {
  return (
    <Link href={`/academy/${title[0].text.toLowerCase()}`} >
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
          style={{ objectFit: "contain" }}
          className={title[0].text === 'Tango' ? styles.genre_tango : ''}
        />
      </div>
    </Link>
  );
};
export default Genre;
