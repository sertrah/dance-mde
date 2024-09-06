import React from "react";
import style from "./../../styles/temp.module.css";
import Link from "next/link";
import Image from "next/image";

const Academies: React.FC<{ t: (arg: string) => string, locale: any }> = ({ t, locale }) => {
  return (
    <section className={style.academies}>
      <h2>{t("academy_title")}</h2>
      <p className={style.academies_description}>{t("academy_description")}</p>
      <div className={style.academy_container}>
        <Link
          href={`/academy/bachata`}
          locale={locale}
          className={`${style.academy} ${style.academy_bachata}`}
        >
          <Image
            className={style.academy_teachers}
            src="/dancers/bachata.webp"
            alt="Social Event Medellin"
            style={{ objectFit: "contain" }}
            width={130}
            height={200}
          />
          <p>Bachata</p>
        </Link>
        <Link
          href={`/academy/zouk`}
          locale={locale}
          className={`${style.academy} ${style.academy_zouk}`}
        >
          <Image
            className={style.academy_teachers}
            src="/dancers/zouk.webp"
            alt="Social Event Medellin"
            style={{ objectFit: "contain" }}
            width={130}
            height={200}
          />
          <p>Zouk</p>
        </Link>
        <Link
          href={`/academy/salsa`}
          locale={locale}
          className={`${style.academy} ${style.academy_salsa}`}
        >
          <Image
            className={style.academy_teachers}
            src="/dancers/salsa.webp"
            alt="Social Event Medellin"
            style={{ objectFit: "contain" }}
            width={130}
            height={200}
          />
          <p>Salsa</p>
        </Link>
        <Link
          href={`/academy/tango`}
          locale={locale}
          className={`${style.academy} ${style.academy_tango}`}
        >
          <Image
            className={style.academy_teachers}
            src="/dancers/tango.webp"
            alt="Social Event Medellin"
            style={{ objectFit: "contain" }}
            width={130}
            height={200}
          />
          <p>Tango</p>
        </Link>
        <Link
          href={`/academy/kizomba`}
          locale={locale}
          className={`${style.academy} ${style.academy_kiz}`}
        >
          <Image
            className={style.academy_teachers}
            src="/dancers/kiz.webp"
            alt="Social Event Medellin"
            style={{ objectFit: "contain" }}
            width={130}
            height={168}
          />
          <p>Kizomba</p>
        </Link>
        <Link
          href={`/academy/urbano`}
          locale={locale}
          className={`${style.academy} ${style.academy_urbano}`}
        >
          <Image
            className={style.academy_teachers}
            src="/urbano.png"
            alt="Social Event Medellin"
            style={{ objectFit: "contain" }}
            width={100}
            height={200}
          />
          <p>Urbano</p>
        </Link>
      </div>
      <div className={style.cuadro}></div>
    </section>
  );
};

export default Academies;
