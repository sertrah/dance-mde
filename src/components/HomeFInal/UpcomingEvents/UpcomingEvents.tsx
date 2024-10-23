import React from "react";
import Image from "next/image";
import style from "./style.module.sass";
import { Subtitle } from "../Subtitle";
import EventCard from "./EventCard";

const UpcomingEvents = () => {
  return (
    <section className={style.upcomingEvents}>
      <div className={style.upcomingEvents__container}>
        <p>
          Bienvenido a MedalloBaila, tu website definitivo para encontrar los
          mejores eventos para bailar, tomar clases en Medellín. Nuestra
          plataforma te mantiene al día con los eventos de baile social en
          Medellín. No te pierdas las clases de baile en Medellín que se
          destacan por su calidad y profesionalismo.
        </p>
        <Subtitle>Proixmos Eventos</Subtitle>
      </div>
      <div className={style.upcomingEvents__cards}>
        <EventCard />
      </div>
    </section>
  );
};

export default UpcomingEvents;
