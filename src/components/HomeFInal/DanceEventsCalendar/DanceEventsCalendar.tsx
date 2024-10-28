import React from "react";
import Image from "next/image";
import { DarkSubtitle } from "../Subtitle";
import WeekSchedule from "./WeekSchedule";
import { useTranslation } from "next-i18next";
import style from "./style.module.sass";

const DanceEventsCalendar = () => {
  const { t } = useTranslation("home");

  return (
    <section className={style.danceEventsCalendar}>
      <div className={style.danceEventsCalendar__section1}>
        <DarkSubtitle>{t("academy_title")}</DarkSubtitle>

        <div className={style.danceEventsCalendar__container}>
          <p className="text-white">{t("academy_description")}</p>

          <ul className={style.danceEventsCalendar__infoList}>
            {[...Array(7)].map((s, index) => (
              <li
                key={`where-to-go-${index}`}
                className={style.danceEventsCalendar__infoItem}
              >
                {t(`where-to-go-${index + 1}`)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={style.danceEventsCalendar__section2}>
        <WeekSchedule />
        <Image
          src={`/salsa1.png`}
          alt="Decoration for the title"
          width={200}
          height={300}
          className={style.danceEventsCalendar__img}
          style={{ objectFit: "fill" }}
          sizes="(max-width: 768px) 80vw,
          (max-width: 1200px) 70vw,
          100vw"
        />
      </div>
    </section>
  );
};

export default DanceEventsCalendar;
