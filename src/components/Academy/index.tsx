import React from "react";
import AcademyCard from "./AcademyCard";
import Typography from "@/helpers/prismic";
import style from "@/styles/Academy.module.css";

const Academy = ({ data }: any) => {
  const slices = data?.slices[0];
  if (!slices) {
    return <p>Upss... algo paso</p>;
  }
  return (
    <main className={style.academy_page}>
      <Typography richContent={data.slices[0].primary.title} hasUnderline />
      <Typography
        richContent={slices.primary.description}
        className={style.academy_description}
      />
      <div className={style.academies}>
        {slices.items.map(
          (
            { content, image, instagramLinkTo, whatsappnumber }: any,
            index: any
          ) => (
            <AcademyCard
              content={content}
              image={image}
              instagramLinkTo={instagramLinkTo}
              whatsAppNumber={whatsappnumber}
              key={`academias-${index}`}
            />
          )
        )}
      </div>
    </main>
  );
};

export default Academy;
