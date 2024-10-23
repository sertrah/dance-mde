import React from "react";
import Image from "next/image";
import { DarkSubtitle } from "../Subtitle";
import WeekSchedule from "./WeekSchedule";
import style from "./style.module.sass";

const DanceEventsCalendar = () => {
  return (
    <section className={style.danceEventsCalendar}>
      <DarkSubtitle>
        Sociales Top en Medellín: Descubre dónde bailar en la semana{" "}
      </DarkSubtitle>

      <div className={style.danceEventsCalendar__container}>
        <p className="text-white">
          ¿Quieres aprovechar al máximo tus ganas de bailar bachata, salsa y
          zouk en Medellín? ¡Programa tu semana de baile! Agenda semanal para
          bailarines:
        </p>

        <ul className={style.danceEventsCalendar__infoList}>
          <li className={style.danceEventsCalendar__infoItem}>
            Lunes: Empieza la semana con energía en Blood Dance Company.
          </li>
          <li className={style.danceEventsCalendar__infoItem}>
            Lunes: Empieza la semana con energía en Blood Dance Company.
          </li>
          <li className={style.danceEventsCalendar__infoItem}>
            Lunes: Empieza la semana con energía en Blood Dance Company.
          </li>
          <li className={style.danceEventsCalendar__infoItem}>
            Lunes: Empieza la semana con energía en Blood Dance Company.
          </li>
        </ul>
        <WeekSchedule />
        <Image
          src={`/salsa1.png`}
          alt="Decoration for the title"
          width={200}
          height={300}
          className={style.danceEventsCalendar__img}
          style={{ objectFit: "fill" }}
        />
      </div>
    </section>
  );
};

export default DanceEventsCalendar;
