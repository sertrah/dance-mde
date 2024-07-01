import React from "react";
import Chip from "@mui/material/Chip";
import { EmblaOptionsType } from "embla-carousel";
import { useQuery } from "react-query";
import Link, { LinkProps as NextLinkProps } from "next/link";

import Image from "next/image";
import PlaceIcon from "@mui/icons-material/Place";
import style from "./style.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import SliceEventController from "@/core/infrastructure/controllers/SliceEventController";
import { EventSliceItem } from "@/core/domain/interfaces/Event.repository";
import { locationLinks } from "@/helpers/temp";
import { useTranslation } from "react-i18next";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 1,
  speed: 500,
};

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const OPTIONS: EmblaOptionsType = { containScroll: false };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function Events() {
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
  const [emblaRef] = useEmblaCarousel();

  if (!SliceEvent?.list) {
    return <></>;
  }

  return (
    <section className={style.events}>
      <p>{t("long_description")}</p>

      <h2>{t("event_title")}</h2>
      <p className={style.events_description}>{t("event_description")}</p>

      <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {SliceEvent?.list
              ?.slice(0, 3)
              .map((eventSliceItem: EventSliceItem, index: number) => (
                <div className="embla__slide" key={index}>
                  <div className={style.card_events}>
                    <figure>
                      <Image
                        src={eventSliceItem.image?.url ?? ""}
                        alt="Social Event Medellin"
                        style={{ objectFit: "cover" }}
                        fill
                        priority
                      />
                      <figcaption>
                        <p className={style.event_name}>
                          {eventSliceItem.title[0]?.text}
                        </p>
                        <a
                          className={style.event_location}
                          href={
                            locationLinks?.[eventSliceItem.locationId]?.link ??
                            eventSliceItem.urlLocation
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <PlaceIcon />{" "}
                          {locationLinks?.[eventSliceItem.locationId]?.name ||
                            "Ver Ubicación"}
                        </a>
                        <Link
                          className={style.event_link}
                          href={
                            eventSliceItem.urlEvent ??
                            locationLinks?.[eventSliceItem.locationId]
                              ?.instagramLink
                          }
                          passHref
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Mas info
                        </Link>
                        <div className={style.event_genres}>
                          {eventSliceItem.genres.split(",").map((name) => (
                            <Chip
                              key={name}
                              size="small"
                              label={name}
                              className={`is-${name}`}
                            />
                          ))}
                        </div>
                      </figcaption>
                      <div />
                      <p className={style.events_date}>
                        <span>{eventSliceItem.date[0]?.text.slice(0, 2)}</span>
                        {eventSliceItem.date[0]?.text.slice(2)}
                      </p>
                    </figure>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default Events;
