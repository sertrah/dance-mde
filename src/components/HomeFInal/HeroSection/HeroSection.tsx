import React from "react";
import Image from "next/image";
import style from "./style.module.sass";
import { useTranslation } from "next-i18next";

const HeroSection = () => {
  const { t } = useTranslation("home");

  return (
    <section className={style.heroSection}>
      <header className={`header small`}>MB</header>

      <div className={style.heroSection_content}>
        <h1>MedalloBaila</h1>
        <p>{t("hero_subtitle")}</p>
      </div>
      <Image
        src="/bb.webp"
        alt="Gente de medellin bailando"
        fill
        style={{ objectFit: "cover" }}
      />
    </section>
  );
};

export default HeroSection;
