import React, { FC } from "react";
import Image from "next/image";
import classNames from "classnames";
import { useTranslation } from "next-i18next";

import style from "./style.module.scss";

const academies = [
  { title: "Urbano", color: "orange", url: "urbano.png" },
  { title: "Bachata", color: "purple", url: "bachata.webp" },
  { title: "Zouk", color: "blue", url: "zouk.webp" },
  { title: "Tango", color: "black", url: "tango.webp" },
  { title: "Kizomba", color: "beige", url: "kiz.webp" },
  { title: "Salsa", color: "red", url: "salsa.webp" },
];

const Bento: FC<{ color: string; title: string; url: string }> = ({
  color,
  title,
  url,
}) => {
  return (
    <div className={classNames(style.bento, style[`bento__${color}`])}>
      <p>{title}</p>
      <Image
        src={`/dancers/${url}`}
        alt="Gente de medellin bailando"
        height={150}
        width={150}
        style={{ objectFit: "contain" }}
        sizes="(max-width: 768px) 80vw,
        (max-width: 1200px) 70vw,
        100vw"
      />
    </div>
  );
};

const BentoCollage = () => {
  const { t } = useTranslation("home");

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
        <p>{t("bento_title")}</p>
      </div>
      <div className={style.bentoCollage__items}>
        {academies.map(({ title, color, url }) => (
          <Bento key={title} title={title} color={color} url={url} />
        ))}
      </div>
    </div>
  );
};

export default BentoCollage;
