import { SubTitle } from "@/components/UI-shared/Typography";
import Form from "./Form";

import style from "@/styles/Shared.module.css";
import { useTranslation } from "next-i18next";

export default function Contact() {
  const { t } = useTranslation("common");
  return (
    <section className={style.contact}>
      <div>
        <SubTitle hasUnderline> {t("contact_title")} </SubTitle>
        <p>{t("contact_description")}</p>
      </div>
      <div>
        <Form />
      </div>
    </section>
  );
}
