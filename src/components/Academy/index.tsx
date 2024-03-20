import React from 'react'
import AcademyCard from './AcademyCard'
import style from '@/styles/Academy.module.css'
import Typography from '@/helpers/prismic'

const Academy = ({ data }: any) => {
  const slices = data?.slices[0];
  if (!slices) {
    return <p>Upss... algo paso</p>
  }
  console.log(slices);
  return (
    <main className={style.academy_page}>
      <Typography richContent={data.title} hasUnderline />
      <Typography richContent={slices.primary.description} />
      <div className={style.academies}>
        {slices.items.map(({ content, image, instagramLinkTo, whatsappnumber }: any, index: any) => <AcademyCard
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