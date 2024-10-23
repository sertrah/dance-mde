import React from "react";
import Image from "next/image";
import style from "./style.module.sass";

const HeroSection = () => {
  return (
    <section className={style.heroSection}>
      <div className={style.heroSection_content}>
        <h1>Medallo Baila</h1>
        <p>La ciudad de la eterna Bailacion</p>
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
