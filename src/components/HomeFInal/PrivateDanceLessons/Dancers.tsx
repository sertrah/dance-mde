import React, { useRef } from "react";
import Image from "next/image";
import style from "./style.module.sass";

/* 
function piramide(count = 0, values = [0], limit = 0) {
    if (count >= 20) {
        console.log(values);
        return;
    }
    const newCounter = count + 1;
    if (values.length >= limit) {
        console.log(values);
        return piramide(newCounter, [newCounter], values.length + 1);

    }

    return piramide(newCounter, [...values, newCounter], limit);
} */
const dancers = [
  { url: "sebas.webp", x: 120, y: 0 },
  { url: "ana.webp", x: 170, y: 50 },
  { url: "salsa2.png", x: 50, y: 80 },
  { url: "yerin.png", x: 250, y: 140 },
  { url: "sebas.webp", x: 120, y: 140 },
  { url: "ana.webp", x: 40, y: 150 },

  { url: "salsa2.png", x: 200, y: 220 },
  { url: "yerin.png", x: 120, y: 220 },
  { url: "sebas.webp", x: 20, y: 200 },
  { url: "ana.webp", x: 80, y: 260 },
];
const Dancers = () => {
  const dancerContainer = useRef<HTMLDivElement>(null);
  return (
    <div className={style.dancers} ref={dancerContainer}>
      {dancers.map(({ url, x, y }, index) => {
        return (
          <Image
            className={style.dancers__item}
            key={`${index}-${url}`}
            src={`/${url}`}
            alt={`Bailarin: ${url}`}
            width={150}
            height={200}
            style={{
              objectFit: "contain",
              top: y,
              right: x,
            }}
          />
        );
      })}
    </div>
  );
};

export default Dancers;
