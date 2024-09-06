import React from "react";
import style from "./../../styles/temp.module.css";
import Image from "next/image";
import Link from "next/link";

const PrivateClasses: React.FC<{ t: (arg: string) => string; locale: any }> = ({
  t,
  locale,
}) => {
  return (
    <section className={style.private}>
      <h2>{t("private_title")}</h2>
      <p>{t("private_short_description")}</p>
      <div className={style.private_images}>
        <Image
          className={style.private_image_1}
          src="/ana.webp"
          alt="Bailarina de bachata"
          style={{ objectFit: "cover" }}
          width={200}
          height={300}
        />
        <Image
          className={style.private_image_2}
          src="/yerin.png"
          alt="Socialas de baile en medellin"
          style={{ objectFit: "cover" }}
          width={200}
          height={300}
        />
        <Image
          className={style.private_image_3}
          src="/sebas.webp"
          alt="Social Event Medellin"
          style={{ objectFit: "cover" }}
          width={200}
          height={300}
        />
        <div className={style.private_draw}></div>
      </div>

      <p>{t("private_description")} </p>
      <Link href={"/teachers"} locale={locale}>
        {t("contact_private")}
      </Link>
    </section>
  );
};

export default PrivateClasses;
