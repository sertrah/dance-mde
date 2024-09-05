// app/banner.js
"use client";
import { useEffect, useState } from "react";
import Link from 'next/link'

export function cookieConsentGiven(): string | null {
  if (!localStorage.getItem("cookie_consent")) {
    return null;
  }
  return localStorage.getItem("cookie_consent");
}

export default function Banner() {
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
            We use tracking cookies to understand how you use the product and
            help us improve it. Please accept cookies to help us improve.
            <Link href="/cookie">Know more</Link>
          </p>
          <button type="button" onClick={handleAcceptCookies}>
            Accept cookies
          </button>
          <span> </span>
        </div>
      )}
    </div>
  );
}
