import React from "react";
import AcademyCard from "./AcademyCard";
import Typography from "@/helpers/prismic";
import Link from "next/link";
import { useRouter } from "next/router";
import style from "@/styles/Academy.module.css";

const Academy = ({ data }: any) => {
  const router = useRouter();

  const slices = data?.slices[0];
  if (!slices) {
    return <p>Upss... algo paso</p>;
  }
  return (
    <main className={style.academy_page}>
      <header className={`header small`}>
        <Link href="/">MB</Link>
        <Link
          className={`header--locale`}
          href="/"
          locale={router.locale === "en-US" ? "es-CO" : "en-US"}
        >
          {router.locale === "en-US" ? "ES" : "EN"}
        </Link>
      </header>

      <Typography richContent={data.title} hasUnderline />
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
