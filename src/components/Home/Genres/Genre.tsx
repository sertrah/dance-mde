import React, { FC } from "react";
import Image from "next/image";
import { PrimaryTitle } from "@/components/UI-shared/Typography";
import styles from "../../../styles/Home.module.css";

const Genre: FC<{
  isOpposite?: boolean;
  bgColor?: "--radial-primary" | "--radial-secondary" | "--radial-ternary";
  title: string;
  imageName?: string;
}> = ({ isOpposite = false, bgColor = "--radial-primary", title, imageName="/dancers.png" }) => {
  return (
    <div
      style={{
        backgroundImage: `var(${bgColor ? bgColor : "--radial-primary"})`,
      }}
      className={`${styles.genre} ${isOpposite && styles.genre_right}`}
    >
      <PrimaryTitle> {title} </PrimaryTitle>
      <Image
        src={imageName}
        alt="Dancers"
        fill
        style={{objectFit:"contain"}}
      />
    </div>
  );
};
export default Genre;
