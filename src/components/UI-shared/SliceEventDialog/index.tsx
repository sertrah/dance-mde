import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { EventSliceItem } from '@/core/domain/interfaces/Event.repository';

import Image from "next/image";
import CustomLink from "@/components/UI-shared/CustomLink";
import { PrismicRichText } from "@prismicio/react";
import Typography from "@/helpers/prismic";
import { locationLinks } from "@/helpers/temp";

import styles from "../../../styles/Shared.module.css";
import { SubTitle, Paragraph } from '../Typography';
import { useTranslation } from 'react-i18next';


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
  const { t } = useTranslation('common');

  if (!currentSliceEvent) return <></>;
  const {
    title,
    date,
    description,
    image,
    locationId,
    urlLocation,
    urlEvent
  } = currentSliceEvent;

  const handleClose = () => {
    onClose();
    document.querySelector('html')!.style.overflow = "auto";
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
          <Paragraph  className={styles.moda_event_date}>{locationLinks?.[locationId]?.label}</Paragraph>
          <Typography richContent={date} className={styles.moda_event_date} />
          <Typography
            richContent={description}
            className={styles.moda_event_description}
          />
        </div>
        <div className={styles.moda_event_actions}>
          <CustomLink
            href={locationLinks?.[locationId]?.link ?? urlLocation}
            passHref
            target="_blank"
          >
            {t('location')}
          </CustomLink>
          <CustomLink href={urlEvent ?? locationLinks?.[locationId]?.instagramLink} passHref target="_blank">
            {t('see_more')}
          </CustomLink>
        </div>
      </div>
    </Dialog>
  );
}