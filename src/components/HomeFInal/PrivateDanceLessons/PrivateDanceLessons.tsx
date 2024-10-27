import React from "react";
import { DarkSubtitle } from "../Subtitle";
import Dancers from "./Dancers";
import style from "./style.module.sass";
import Button from "../Button";

const PrivateDanceLessons = () => {
  return (
    <>
      <div className={style.privateDanceLessons__aboveBg_triangle}></div>
      <section className={style.privateDanceLessons}>
        <div className={style.privateDanceLessons__internal_triangle}></div>

        <DarkSubtitle isTextColorBlack>
          clases de baile particulares y personalizadas de bachata salsa
        </DarkSubtitle>
        <div className={style.privateDanceLessons__container}>
          <p className={style.privateDanceLessons__text}>
            Incrementa tu nivel de baile con los mejores profesores de baile en
            Medellín. Aprovecha nuestras clases impartidas por expertos en los
            generos Bachata, Salsa, Porro, Zouk & Kizomba Incrementa tu nivel de
            baile con los mejores profesores de baile en Medellín. Aprovecha
            nuestras clases impartidas por expertos en los generos Bachata,
            Salsa, Porro, Zouk & KizombaIncrementa tu nivel de baile con los
            mejores profesores de baile en Medellín. Aprovecha nuestras clases
            impartidas por expertos en los generos Bachata, Salsa, Porro, Zouk &
            Kizomba
          </p>
          <Dancers />
          <Button>Quiero agendar una clase </Button>
        </div>
        <div className={style.privateDanceLessons__underBg}></div>
        <div className={style.privateDanceLessons__underBg_triangle}></div>
      </section>
      <div className={style.privateDanceLessons__triangleEnd}></div>
    </>
  );
};

export default PrivateDanceLessons;
