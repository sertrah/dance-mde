import React, { FC } from "react";
import { useTranslation } from "next-i18next";

import Dancers from "./Dancers";
import Button from "../Button";
import { DarkSubtitle } from "../Subtitle";

import style from "./style.module.sass";

const PrivateDanceLessonsContainer: FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <>
    <div className={style.privateDanceLessons__aboveBg_triangle}></div>
    <section className={style.privateDanceLessons}>
      <div className={style.privateDanceLessons__internal_triangle}></div>
      {children}
      <div className={style.privateDanceLessons__underBg}></div>
      <div className={style.privateDanceLessons__underBg_triangle}></div>
    </section>
    <div className={style.privateDanceLessons__triangleEnd}></div>
  </>
);

const PrivateDanceLessons = () => {
  const { t } = useTranslation("home");

  return (
    <PrivateDanceLessonsContainer>
      <div className={style.privateDanceLessons__wrapper}>
        <div className={style.privateDanceLessons__wrapperDancers}>
          <Dancers />
        </div>
        <div>
          <DarkSubtitle isTextColorBlack>
            {t("private_dance_title")}
          </DarkSubtitle>
          <div className={style.privateDanceLessons__container}>
            <p className={style.privateDanceLessons__text}>
              {t("private_dance_description1")}
            </p>
            <p className={style.privateDanceLessons__text}>
              {t("private_dance_description2")}
            </p>
            <p className={style.privateDanceLessons__text}>
              {t("private_dance_description3")}
            </p>
            <div className={style.privateDanceLessons__containerDancers}>
              <Dancers />
            </div>
            <Button>{t("private_button")}</Button>
          </div>
        </div>
      </div>
    </PrivateDanceLessonsContainer>
  );
};

export default PrivateDanceLessons;
