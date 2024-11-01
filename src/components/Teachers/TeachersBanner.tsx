import React from "react";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";

import style from "@/styles/Teachers.module.css";

const TeachersBanner = ({ data }: any) => {
  return (
    <section className={style.teacher_banner}>
      <Image
        src="/bb.webp"
        alt="Social Event Medellin"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div className={style.cover} />
      <PrismicRichText field={data.mainSection} />
    </section>
  );
};

export default TeachersBanner;
