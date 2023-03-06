import React from 'react'
import AcademyCard from './AcademyCard'
import style from '@/styles/Academy.module.css'
import Typography from '@/helpers/prismic'

const Academy = ({ data }: any) => {
  console.log(data.slices[0].items)
  return (
    <main className={style.academy_page}>
      <Typography richContent={data.title} hasUnderline />
      <div className={style.academies}>
        {data?.slices[0].items.map(({ content, image, instagramLinkTo, whatsappnumber }: any, index: any) => <AcademyCard
          content={content}
          image={image}
          instagramLinkTo={instagramLinkTo}
          whatsAppNumber={whatsappnumber}
          key={`academias-${index}`} />)}
      </div>
    </main>
  )
}

export default Academy