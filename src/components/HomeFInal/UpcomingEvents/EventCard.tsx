"use client";
import React, { FC } from "react";
import Image from "next/image";
import style from "./style.module.sass";
import Chip from "@mui/material/Chip";
import { locationLinks } from "@/helpers/temp";
import { socialPlaceKeys } from "@/helpers/temp";

import type * as prismicT from "@prismicio/types";
import CustomLink from "@/components/UI-shared/CustomLink";
import { useTranslation } from "react-i18next";

const EventCard: FC<{
  image: prismicT.ImageField<never>;
  genres: string;
  title: prismicT.TitleField;
  locationId: socialPlaceKeys;
  urlCustomLocation: string;
  urlEvent: string;
  date: prismicT.TitleField;
}> = ({
  image,
  title,
  genres,
  locationId,
  urlEvent,
  urlCustomLocation,
  date,
}) => {
  const { t } = useTranslation("common");
  const dateMapped = date[0]?.text.split(" ") as string[];
  return (
    <div className={style.eventCard}>
      <div className={style.eventCard__date}>
        {dateMapped[0]} <span>{dateMapped[1]}</span>
      </div>
      <div className={style.eventCard__content}>
        <Image
          src={image.url as string}
          alt="Evento de baile en Medellín"
          width={280}
          height={500}
          className=""
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 80vw,
          (max-width: 1200px) 70vw,
          100vw"
        />
        <div className={style.eventCard__content__info}>
          <p className={style.eventCard__content__infoTitle}>
            {title[0]?.text}
          </p>
          <CustomLink
            rel="nofollow"
            className={style.eventCard__content__infoText}
            href={locationLinks?.[locationId]?.link ?? urlCustomLocation}
            passHref
            target="_blank"
          >
            Lugar: {locationLinks?.[locationId]?.name || "Ver Ubicación"}
          </CustomLink>
          <CustomLink
            rel="nofollow"
            href={urlEvent ?? ""}
            passHref
            target="_blank"
          >
            {t("see_more")}
          </CustomLink>
        </div>
      </div>
      <div className={style.eventCard__genres}>
        {genres.split(",").map((name) => (
          <Chip
            key={`${name}-${title[0]?.text}`}
            size="small"
            label={name}
            className={`is-${name}`}
          />
        ))}
      </div>
      <div className={style.eventCard__border} />
    </div>
  );
};

export default EventCard;
