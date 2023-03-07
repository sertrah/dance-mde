import { PrimaryTitle } from "@/components/UI-shared/Typography";
import Form from "./Form";

import style from "@/styles/Shared.module.css";

export default function Contact() {
  return (
      <section className={style.contact}>
          <PrimaryTitle hasUnderline> Hablamelo </PrimaryTitle>
          <div>
            <Form />
          </div>
      </section>
  );
}
