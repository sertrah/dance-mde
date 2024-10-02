import React from "react";
import style from "./../../styles/temp.module.css";
import Link from "next/link";
import Image from "next/image";

const SpecialEvent: React.FC<{ t: (arg: string) => string }> = ({ t }) => {
  return (
    <section className={style.specialEvent}>
      <div className={style.specialBadge}>Imperdible!</div>
      <h2>
        {t("special-event-title")}
        <br />
        🪦💀
      </h2>
      <div className={style.specialEvent_image}>
        <Image
          src="/halloween.webp"
          fill
          alt="Cemetenrio de bailarines"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className={style.specialEvent_date}>
        <p>{t("special-event-date")}</p>
        <p>{t("special-event-location")} 🏰</p>
      </div>

      <div className={style.specialEvent_body}>
        <p>{t("special-event-description")}</p>
        <div className={style.specialEvent_schedule}>
          <p>{t("special-event-class")}</p>
          <p>{t("special-event-summary")}</p>
        </div>

        <div className={style.specialEvent_time}>
          <p>
            <strong>COVER:</strong> {t("special-event-cover")}
          </p>
          <Link
            target="_blank"
            href="https://maps.app.goo.gl/deVwnX8uF8VW6YTPA?g_st=com.google.maps.preview.copy"
            rel="nofollow"
          >
            {t("special-event-location")}
          </Link>
        </div>
      </div>

      <div className={style.specialEvent_location}>
        <p>{t("special-event-more")}</p>
        <Link
          href={
            "https://www.instagram.com/cementeriodebailarines?igsh=MTE5eTJpdjlubjZqeA%3D%3D&utm_source=qr"
          }
          target="_blank"
          rel="nofollow"
        >
          {t("special-event-click-here")}
        </Link>
      </div>

      <div className={style.specialEvent_buy_link}>
        {t("special-event-link-2")}
        <Link
          target="_blank"
          rel="nofollow"
          href="https://www.eventbrite.com/manage/events/1014886541967/details"
        >
          {t("special-event-buy-here")}
        </Link>

        <p style={{ margin: "40px auto 0", width: "80%" }}>
          {t("special-event-wsp")}. <strong>Whatsapp: +57 301 6447948</strong>
        </p>
      </div>
    </section>
  );
};

export default SpecialEvent;
