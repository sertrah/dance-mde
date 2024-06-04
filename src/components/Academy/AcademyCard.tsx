import React from "react";
import Link from "next/link";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import style from "@/styles/Academy.module.css";
import Typography from "@/helpers/prismic";
import CustomLink from "@/components/UI-shared/CustomLink";

const AcademyCard = ({
  content,
  image,
  instagramLinkTo,
  whatsAppNumber,
}: any) => {
  return (
    <section className={style.academy}>
      <Image
        src={image.url}
        alt="Academias de baile"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className={style.academy_detail}>
        <Typography richContent={content} hasUnderline />

        <h3 className={style.academy_sub_title}>Redes sociales</h3>
        <div className={style.academy_social_media}>
          <CustomLink
            href={instagramLinkTo.url}
            className={style.academy_link}
            target="_blank"
            rel="nofollow"
          >
            Instagram
            <InstagramIcon />
          </CustomLink>
          <CustomLink
            rel="nofollow"
            href={`https://wa.me/573052597643?text=Hola%2C%20vi%20tu%20academia%20desde%20el%20portal%20web%20dance-mde.%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s%21`}
            target="_blank"
            className={style.academy_link}
          >
            Whatsapp
            <WhatsAppIcon />
          </CustomLink>
        </div>
      </div>
    </section>
  );
};

export default AcademyCard;
