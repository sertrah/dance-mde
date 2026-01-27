import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

/**
 * AdPopOut
 *
 * A reusable component for a dialog that pops out to show an ad.
 *
 * @returns {JSX.Element} The AdPopOut component.
 */
export default function AdPopOut() {
  const dialog = React.useRef<HTMLDialogElement>(null);

  const { t } = useTranslation("common");

  const handleOutsideClick = React.useCallback((e: any) => {
    if (e.target && e.target?.id === "dialog") {
      dialog.current!.close();
      dialog.current!.removeEventListener("click", handleOutsideClick);
    }
  }, []);

  React.useLayoutEffect(() => {
    if (dialog && dialog.current) {
      dialog.current.addEventListener("click", handleOutsideClick);
      dialog.current.showModal();
    }
  }, [handleOutsideClick]);

  return (
    <dialog id="dialog" modal-mode="mega" ref={dialog}>
      <form method="dialog">
        <button className="dialog__close-icon">x</button>

        <h2>{t("modal_title")}</h2>
        <p>{t("modal_text")}</p>
        <div className="dialog__img">
          <Image
            src="/special-event.webp"
            alt="Evento de fin de a;o"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <p>
          <strong>{t("modal_date")}</strong>
        </p>
        <p>
          {t("modal_call_to_action")}
          <Link href={"https://bit.ly/4fl0Ktr"} target="_blank" tabIndex={-1}>
            {t("modal_buy_tickets")}
          </Link>
        </p>
        <button className="dialog__close">{t("modal_close")}</button>
      </form>
    </dialog>
  );
}
