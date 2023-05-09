import React from 'react'
import { useTranslation } from 'next-i18next'

import style from '@/styles/Teachers.module.css'
import TeacherCard from './TeacherCard';
import TeachersBanner from './TeachersBanner';
import { PrimaryTitle } from '../UI-shared/Typography';

const Teachers = ({ data }: any) => {
  const { t } = useTranslation('teachers');

  return (
    <main className={style.teacher_page}>
      <TeachersBanner t={t} />
      <PrimaryTitle hasUnderline className={style.secondary_title}> {t('secondary_title')} </PrimaryTitle>
      <section>
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
      </section>
    </main>
  )
}

export default Teachers