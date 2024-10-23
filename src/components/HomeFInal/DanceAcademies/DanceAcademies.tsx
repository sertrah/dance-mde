import React from "react";
import BentoCollage from "./BentoCollage";
import { Subtitle } from "../Subtitle";
import style from "./style.module.scss";

const DanceAcademies = () => {
  return (
    <section className={style.danceAcademies}>
      <Subtitle isTextColorBlack>
        ¿Estás buscando las mejores academias de baile en Medellín?
      </Subtitle>
      <div className={style.danceAcademies__container}>
        <p>
          ¡Baila como un paisa en Medellín! Nuestra ciudad es un paraíso para
          los bailarines con academias de baile para todos los gustos y
          presupuestos. ¿Buscas clases de salsa en Medellín? ¿O tal vez
          prefieres aprender tango en la capital de la montaña? Sea cual sea su
          ritmo, aquí lo encontrará. aquí lo encontrará. Desde clases de baile
          gratuitas hasta opciones económicas desde 5 dolares, Medellín tiene
          algo para cada bailarín. Aprende bachata, perfecciona tu porro o
          sumérgete en el mundo de la danza urbana. danza urbana. Las mejores
          academias de baile de Medellín ofrecen una gran variedad de estilos.
          variedad de estilos: Salsa caleña y cubana - Tango argentino - Porro
          antioqueño - Porro antioqueño - Cumbia colombiana - Bachata dominicana
          - Baile urbano y hip hop Baile urbano y hip hop brasileño Zouk.
        </p>
        <p>
          Seas principiante o experto, adulto o niño, encontrarás clases de
          baile en Medellín clases de baile en Medellín adaptadas a tu nivel.
          Las academias que encontrarás aquí ofrecen cursos para todas las
          edades y experiencias.
        </p>

        <BentoCollage />
      </div>
    </section>
  );
};

export default DanceAcademies;
