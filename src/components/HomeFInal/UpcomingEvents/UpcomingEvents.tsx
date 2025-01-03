import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { useQuery } from "react-query";

import EmblaCarousel from "./Carousel";
import { Subtitle } from "../Subtitle";
import SliceEventController from "@/core/infrastructure/controllers/SliceEventController";
import { QueryClientProvider, QueryClient } from "react-query";

import style from "./style.module.sass";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const OPTIONS: EmblaOptionsType = {
  breakpoints: {
    "(min-width: 850px)": { slidesToScroll: 3, active: false },
  },
};

const UpcomingEvents = () => {
  const { t } = useTranslation("home");
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
        <p>{t("long_description")}</p>
        <Subtitle>{t("event_title")}</Subtitle>
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
      <Link href={"/events"}> Ver todos los eventos</Link>
    </section>
  );
};

const WrappedUpcomingEvents = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <UpcomingEvents />
    </QueryClientProvider>
  );
};

export default WrappedUpcomingEvents;
