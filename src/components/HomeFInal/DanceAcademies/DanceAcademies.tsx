import React from "react";
import BentoCollage from "./BentoCollage";
import { Subtitle } from "../Subtitle";
import style from "./style.module.scss";
import { useTranslation } from "next-i18next";

const DanceAcademies = () => {
  const { t } = useTranslation("home");

  return (
    <section className={style.danceAcademies}>
      <Subtitle isTextColorBlack>{t("academies_title")}</Subtitle>
      <div className={style.danceAcademies__container}>
        <p>{t("academy-description-1")}</p>
        <p>{t("academy-description-2")}</p>

        <BentoCollage />
      </div>
    </section>
  );
};

export default DanceAcademies;
