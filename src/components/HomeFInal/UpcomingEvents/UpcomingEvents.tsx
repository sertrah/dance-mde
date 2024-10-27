import React from "react";
import Image from "next/image";
import style from "./style.module.sass";
import { Subtitle } from "../Subtitle";
import EventCard from "./EventCard";
import { useQuery } from "react-query";
import EmblaCarousel from "./Carousel";

import SliceEventController from "@/core/infrastructure/controllers/SliceEventController";
import { EventSliceItem } from "@/core/domain/interfaces/Event.repository";

const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const UpcomingEvents = () => {
  const { data: SliceEvent } = useQuery(
    [`event-list`, "ZAX_whAAACgATCfT", "es-CO"],
    ({ queryKey: [, referenceId, lang] }) =>
      SliceEventController.getSliceEventsFromPrismic(referenceId, lang),
    {
      retry: 1,
      retryDelay: 3000,
    }
  );

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
        {!SliceEvent?.list ? (
          <div className={style.events_temp}>Cargando...</div>
        ) : (
          <EmblaCarousel
            slides={SliceEvent?.list?.slice(0, 3)}
            options={OPTIONS}
          />
        )}
      </div>
    </section>
  );
};

export default UpcomingEvents;
