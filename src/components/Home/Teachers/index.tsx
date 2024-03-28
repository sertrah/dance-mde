import Image from "next/image";

import styles from "@/styles/Home.module.css";

import { SubTitle, Paragraph } from '@/components/UI-shared/Typography';
import Typography from "@/helpers/prismic";
import { useTranslation } from 'next-i18next'

export default function Teachers({ title, image, description }: any) {
  const { t } = useTranslation('teachers');

  return (
    <section className={styles.teachers}>
      <SubTitle hasUnderline className={styles.teachers_title}>{title} </SubTitle>

      <div className={styles.teachers_content}>
        <Image
          className={styles.teachers_img}
          src={image.url}
          alt="Clases gratis de baile"
          priority
          width={300}
          height={100}
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 80vw,
                (max-width: 1200px) 70vw,
                100vw"
        />
        <Typography richContent={description} className={styles.teachers_text} />
      </div>
    </section>
  );
}
