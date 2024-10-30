import React from "react";
import Image from "next/image";
import style from "./style.module.sass";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const HeroSection = () => {
  const { t } = useTranslation("home");
  const router = useRouter();

  return (
    <section className={style.heroSection}>
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
