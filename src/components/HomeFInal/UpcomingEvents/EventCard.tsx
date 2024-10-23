import React from "react";
import Image from "next/image";
import style from "./style.module.sass";
import Chip from "@mui/material/Chip";

const EventCard = () => {
  return (
    <div className={style.eventCard}>
      <div className={style.eventCard__date}>Nov 23</div>
      <div className={style.eventCard__content}>
        <Image
          src="/medellin.webp"
          alt="Decoration for the title"
          width={280}
          height={500}
          className=""
          style={{ objectFit: "cover" }}
        />
        <div className={style.eventCard__content__info}>
          <p className={style.eventCard__content__infoTitle}>
            Bachata Tradicional
          </p>
          <p className={style.eventCard__content__infoText}>
            Lugar: Casa ritmo
          </p>
        </div>
      </div>
      <div className={style.eventCard__genres}>
        <Chip size="small" label="Bachata" className={`is-bachata`} />
        <Chip size="small" label="Salsa" className={`is-salsa`} />
      </div>
      <div className={style.eventCard__border} />
    </div>
  );
};

export default EventCard;
