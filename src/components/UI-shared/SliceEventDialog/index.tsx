import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { EventSliceItem } from '@/core/domain/interfaces/Event.repository';

import Image from "next/image";
import CustomLink from "@/components/UI-shared/CustomLink";
import { PrismicRichText } from "@prismicio/react";
import Typography from "@/helpers/prismic";
import { locationLinks } from "@/helpers/temp";

import styles from "../../../styles/Shared.module.css";
import { SubTitle } from '../Typography';


const components = {
  paragraph: ({ children }: any) => <SubTitle>{children}</SubTitle>,
};

export interface SliceEventDialogProps {
  open: boolean;
  onClose: () => void;
  currentSliceEvent: EventSliceItem | null
}

export default function SliceEventDialog(props: SliceEventDialogProps) {
  const { onClose, open, currentSliceEvent } = props;
  if (!currentSliceEvent) return <></>;
  const {
    title,
    date,
    showWebsiteLabel,
    showWebsite,
    description,
    image,
    LocationId,
    showLocation
  } = currentSliceEvent;
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <div className={styles.moda_event}>
        <PrismicRichText field={title} components={components} />
        <div
          className={styles.moda_event_container_img}
        >
          <Image
            src={image.url ?? ""}
            alt="Dancers"
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </div>
        <div className={styles.moda_event_detail} >
          <Typography richContent={date} className={styles.moda_event_date} />
          <Typography
            richContent={description}
            className={styles.moda_event_description}
          />
        </div>
        <div className={styles.moda_event_actions}>
          <CustomLink
            href={locationLinks?.[LocationId]?.link ?? LocationId}
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
    </Dialog>
  );
}