import React, { Dispatch, FC, SetStateAction } from "react";
import Image from "next/image";
import CustomLink from "@/components/UI-shared/CustomLink";
import { PrismicRichText } from "@prismicio/react";
import Typography from "@/helpers/prismic";
import { EventSliceItem } from "@/core/domain/interfaces/Event.repository";

import styles from "../../styles/Events.module.css";
import { SubTitle } from "../UI-shared/Typography";
import { locationLinks } from "@/helpers/temp";

const components = {
  paragraph: ({ children }: any) => <SubTitle>{children}</SubTitle>,
};

const EventCard: FC<
  EventSliceItem & { openDialog: Dispatch<SetStateAction<EventSliceItem | null>> }
> = (props) => {
  const {
    title,
    date,
    showWebsiteLabel,
    showWebsite,
    description,
    image,
    LocationId,
    showLocation,
    openDialog,
  } = props;
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
          href={locationLinks[LocationId].link ?? ""}
          passHref
          target="_blank"
        >
          {showLocation}
        </CustomLink>
        <CustomLink href={showWebsite?.url ?? ""} passHref target="_blank">
          {showWebsiteLabel}
        </CustomLink>
      </div>
    </div>
  );
};
export default EventCard;
