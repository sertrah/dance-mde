// app/banner.js
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export function cookieConsentGiven(): string | null {
  if (!localStorage.getItem("cookie_consent")) {
    return null;
  }
  return localStorage.getItem("cookie_consent");
}

export default function CookieConsentGiven() {
  const { t } = useTranslation("common");

  const [consentGiven, setConsentGiven] = useState<null | string>(null);

  useEffect(() => {
    // We want this to only run once the client loads
    // or else it causes a hydration error
    setConsentGiven(cookieConsentGiven());
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookie_consent", "yes");
    setConsentGiven("yes");
  };

  const handleDeclineCookies = () => {
    localStorage.setItem("cookie_consent", "no");
    setConsentGiven("no");
  };

  return (
    <div>
      {consentGiven === null && (
        <div className="cookie-consent">
          <p>
            {t("cookie_consent_given")}
            <Link href="/cookie">{t("see_more")}</Link>
          </p>
          <button type="button" onClick={handleAcceptCookies}>
            {t("cookie_accept")}
          </button>
          <span> </span>
        </div>
      )}
    </div>
  );
}
