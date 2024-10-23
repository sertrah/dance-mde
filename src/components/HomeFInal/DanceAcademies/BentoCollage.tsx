import React, { FC } from "react";
import Image from "next/image";
import classNames from "classnames";
import style from "./style.module.scss";

const Bento: FC<{ color: string }> = ({ color }) => {
  return (
    <div className={classNames(style.bento, style[`bento__${color}`])}>
      <p>Gente Bailando</p>
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
          width={200}
          style={{ objectFit: "contain" }}
        />
        <p>Gente Bailando</p>
      </div>
      <div className={style.bentoCollage__items}>
        <Bento color="orange" />
        <Bento color="purple" />
        <Bento color="blue" />
        <Bento color="black" />
        <Bento color="beige" />
        <Bento color="red" />
      </div>
    </div>
  );
};

export default BentoCollage;
