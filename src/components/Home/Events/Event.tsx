import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { FC } from "react";
import Typography from "@/helpers/prismic";
import { EventSliceItem } from "@/core/domain/interfaces/Event.repository";
import { Paragraph } from "@/components/UI-shared/Typography";
import { useTranslation } from "react-i18next";

const Event: FC<
  EventSliceItem & { openDialog: () => void }
> = ({ image, date, title, openDialog }) => {
  const { t } = useTranslation('common');

  const handleOnClickEvent = () => {
    openDialog();
    document.querySelector('html')!.style.overflow = "hidden";
  }
  return (
    <div className={styles.event} onClick={handleOnClickEvent}>
      <div className={styles.detail}>
        <Typography richContent={date} />
        <Typography richContent={title} />
        <Paragraph >{t('see_more')}</Paragraph>
      </div>
      <Image src={image?.url ?? ''} alt="Event image" fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 60vw,
        (max-width: 1200px) 70vw,
        100vw"
      />
      <div className={styles.cover}></div>
    </div>
  );
}

export default Event;
