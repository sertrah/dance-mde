import React from "react";
import style from "./../../styles/temp.module.css";

const Cover: React.FC<{ t: (arg: string) => string }> = ({ t }) => {
  return (
    <section className={style.banner}>
      <div className="prueba" />
      <video className={style.cover_video}  controls autoPlay loop muted playsInline>
        <source src="/videos/banner.mp4" type="video/mp4" />
      </video>
      <h1>{t("title")}</h1>
      <p>{t("description_home")}</p>
    </section>
  );
};

export default Cover;
