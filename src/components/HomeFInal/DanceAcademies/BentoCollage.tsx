import React, { FC } from "react";
import Image from "next/image";
import classNames from "classnames";
import style from "./style.module.scss";

const academies = [
  { title: "Urbano", color: "orange" },
  { title: "Bachata", color: "purple" },
  { title: "Zouk", color: "blue" },
  { title: "Tango", color: "black" },
  { title: "Kizomba", color: "beige" },
  { title: "Salsa", color: "red" },
];

const Bento: FC<{ color: string; title: string }> = ({ color, title }) => {
  return (
    <div className={classNames(style.bento, style[`bento__${color}`])}>
      <p>{title}</p>
      <Image
        src="/sebas.webp"
        alt="Gente de medellin bailando"
        height={150}
        width={100}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

const BentoCollage = () => {
  return (
    <div className={style.bentoCollage}>
      <div className={classNames(style.bento__horizontal, style.bento)}>
        <Image
          src="/sebas.webp"
          alt="Gente de medellin bailando"
          height={200}
          width={150}
          style={{ objectFit: "contain" }}
        />
        <p>Encuentra tu lugar</p>
      </div>
      <div className={style.bentoCollage__items}>
        {academies.map(({ title, color }) => (
          <Bento key={title} title={title} color={color} />
        ))}
      </div>
    </div>
  );
};

export default BentoCollage;
