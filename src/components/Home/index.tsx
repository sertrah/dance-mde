import React, { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import style from "@/styles/temp.module.css";
import AdBanner from "@/components/UI-shared/AdBanner";
import PrivateClasses from "@/components/HomeV2/PrivateClasses";

const Cover = dynamic(() => import("@/components/HomeV2/Cover"));
const Academies = dynamic(() => import("@/components/HomeV2/Academies"));
const SpecialEvent = dynamic(() => import("@/components/HomeV2/SpecialEvent"));
const Events = dynamic(() => import("@/components/HomeV2/Events"));
const WeekSchedule = dynamic(() => import("@/components/HomeV2/WeekSchedule"));

const whsap = "https://wa.me/573052597643?text=Quiero....saber...Mas";

const HomePage = () => {
  const { t } = useTranslation("home");
  const { locale } = useRouter();
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 400)
      );
    }
  }, []);

  return (
    <>
      <header className={`header ${small ? "small" : ""}`}>MB</header>
      <Cover t={t} />
      <p
        style={{
          textAlign: "center",
          margin: "2rem auto",
          width: "80%",
          maxWidth: "800px",
        }}
      >
        {t("long_description")}
      </p>
      <SpecialEvent t={t} />
      <AdBanner />
      <Events />
      <WeekSchedule />
      <PrivateClasses t={t} locale={locale} />
      <Academies t={t} locale={locale} />
      <section className={style.more_services}>
        <h2>{t("info_title")}</h2>
        <p>{t("info_description")}</p>
        <Link href={whsap} target="_blank">
          {t("contact")}
        </Link>
      </section>
    </>
  );
};

export default HomePage;
