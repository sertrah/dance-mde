import React from 'react'
import { useTranslation } from 'next-i18next'
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import style from '@/styles/Teachers.module.css'

const TeachersBanner = ({ data }: any) => {
  const { t } = useTranslation('teachers');
  console.log(data);
  return (
      <section className={style.teacher_banner}>
      <Image
          src="/bb.webp"
          alt="Social Event Medellin"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className={style.cover} />
        <Typography variant="h1" className={style.title}>{t('title')} <span>{t('title_1')}</span></Typography>
        <Typography variant="body1" className={style.description}>{t('description')}</Typography>
    </section>
  )
}

export default TeachersBanner