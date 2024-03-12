import { SubTitle } from "@/components/UI-shared/Typography";
import Form from "./Form";

import style from "@/styles/Shared.module.css";
import { useTranslation } from 'next-i18next'

export default function Contact() {
  const {t} = useTranslation('common');
  return (
      <section className={style.contact}>
          <SubTitle hasUnderline> {t('contact_title')} </SubTitle>
          <div>
            <Form />
          </div>
      </section>
  );
}
