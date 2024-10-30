import React, { useRef } from "react";
import Image from "next/image";
import style from "./style.module.sass";
import { useGSAP } from "@gsap/react";
import { gsap, Power1 } from "gsap";

gsap.registerPlugin(useGSAP);

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
  { url: "sebas.webp", x: -40, y: 0 },
  { url: "dancers/alejoynoa.webp", x: 140, y: 0 },
  { url: "dancers/laura.webp", x: 120, y: 50 },
  { url: "ana.webp", x: 40, y: 40 },
  { url: "salsa2.png", x: -20, y: 80 },
  { url: "dancers/juan.webp", x: 140, y: 140 },
  { url: "dancers/jyv.webp", x: 50, y: 140 },
  { url: "dancers/kiz.webp", x: -40, y: 150 },

  { url: "dancers/zouk.webp", x: 120, y: 190 },
  { url: "yerin.png", x: 60, y: 240 },
  { url: "dancers/bachata.webp", x: -20, y: 240 },
];
const Dancers = () => {
  const dancerContainer = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      dancers.map((_, index) => {
        gsap.to(`#dancer-${index}`, {
          y: "random(-20, 20)", // Random movement on Y-axis
          duration: 3,
          repeat: -1, // Infinite repeat
          yoyo: true, // Makes the animation go back and forth
          ease: Power1.easeInOut,
          stagger: 1,
        });
      });
    },
    { scope: dancerContainer }
  );
  return (
    <div className={style.dancers} ref={dancerContainer}>
      {dancers.map(({ url, x, y }, index) => {
        return (
          <Image
            id={`dancer-${index}`}
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
