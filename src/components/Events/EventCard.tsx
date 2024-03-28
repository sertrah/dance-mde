import React, { Dispatch, FC, SetStateAction } from "react";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";
import { useTranslation } from "react-i18next";

import { EventSliceItem } from "@/core/domain/interfaces/Event.repository";
import Typography from "@/helpers/prismic";
import CustomLink from "@/components/UI-shared/CustomLink";
import { locationLinks } from "@/helpers/temp";
import styles from "../../styles/Events.module.css";
import { SubTitle } from "../UI-shared/Typography";

const components = {
  paragraph: ({ children }: any) => <SubTitle>{children}</SubTitle>,
};

const EventCard: FC<
  EventSliceItem & { openDialog: Dispatch<SetStateAction<EventSliceItem | null>> }
> = (props) => {
  const {
    title,
    date,
    description,
    image,
    locationId,
    urlEvent,
    urlLocation,
    openDialog,
  } = props;
  const { t } = useTranslation('common');

  const handleOnClickEvent = () => {
    openDialog(props);
  };
  return (
    <div className={styles.event_card}>
      <div
        className={styles.event_card_container_img}
        onClick={handleOnClickEvent}
      >
        <Image
          src={image.url ?? ""}
          alt="Dancers"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 80vw,
          (max-width: 1200px) 70vw,
          100vw"
        />
      </div>
      <div className={styles.event_card_detail} onClick={handleOnClickEvent}>
        <PrismicRichText field={title} components={components} />
        <Typography richContent={date} />
        <Typography
          richContent={description}
          className={styles.event_card_description}
        />
      </div>
      <div className={styles.event_card_location}>
        <CustomLink
          href={locationLinks?.[locationId]?.link ?? urlLocation}
          passHref
          target="_blank"
          rel="nofollow" 
        >
          {t('location')}
        </CustomLink>
        <CustomLink  rel="nofollow"  href={urlEvent ?? ""} passHref target="_blank">
         {t('see_more')}
        </CustomLink>
      </div>
    </div>
  );
};
export default EventCard;
