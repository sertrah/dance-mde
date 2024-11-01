import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import style from "./style.module.sass";

const HeroSection = () => {
  const { t } = useTranslation("home");

  return (
    <section className={style.heroSection}>
      <div className={style.heroSection_content}>
        <h1>MedalloBaila</h1>
        <p>{t("hero_subtitle")}</p>
      </div>
      <Image
        src="/bg.webp"
        alt="Gente de medellin bailando"
        fill
        priority
        style={{ objectFit: "cover" }}
      />
      <div className={style.heroSection_overlay} />
    </section>
  );
};

export default HeroSection;
