import React from "react";
import { DarkSubtitle } from "../Subtitle";
import Dancers from "./Dancers";
import style from "./style.module.sass";
import Button from "../Button";

const PrivateDanceLessons = () => {
  return (
    <section className={style.privateDanceLessons}>
      <DarkSubtitle isTextColorBlack>
        clases de baile particulares y personalizadas de bachata salsa
      </DarkSubtitle>
      <div className={style.privateDanceLessons__container}>
        <p className={style.privateDanceLessons__text}>
          Incrementa tu nivel de baile con los mejores profesores de baile en
          Medellín. Aprovecha nuestras clases impartidas por expertos en los
          generos Bachata, Salsa, Porro, Zouk & Kizomba Incrementa tu nivel de
          baile con los mejores profesores de baile en Medellín. Aprovecha
          nuestras clases impartidas por expertos en los generos Bachata, Salsa,
          Porro, Zouk & KizombaIncrementa tu nivel de baile con los mejores
          profesores de baile en Medellín. Aprovecha nuestras clases impartidas
          por expertos en los generos Bachata, Salsa, Porro, Zouk & Kizomba
        </p>
        <Dancers />
        <Button>Quiero agendar una clase </Button>
      </div>
      <div className={style.privateDanceLessons__underBg}></div>
    </section>
  );
};

export default PrivateDanceLessons;
