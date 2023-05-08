import React from 'react'
import style from '@/styles/Teachers.module.css'
import TeacherCard from './TeacherCard';
import TeachersBanner from './TeachersBanner';

const Teachers = ({ data }: any) => {
  return (
    <main className={style.teacher_page}>
      <TeachersBanner />
      <section>
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
      </section>
    </main>
  )
}

export default Teachers