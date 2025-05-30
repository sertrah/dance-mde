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
        <p>{t("long_description_0")}</p>
        <p>{t("long_description_1")}</p>
        <p>{t("long_description_2")}</p>
        <p>{t("long_description_3")}</p>
        <p>{t("long_description_4")}</p>
      </div>
      <Subtitle>{t("event_title")}</Subtitle>

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
      <Link
        href={"/events"}
        style={{
          background: "#e8bc58",
          width: "fit-content",
          alignSelf: "center",
          color: "#000",
          padding: "0.5rem 1.5rem",
          textDecoration: "none",
          borderRadius: "29px",
        }}
      >
        {t("see_all_events")}
      </Link>
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
