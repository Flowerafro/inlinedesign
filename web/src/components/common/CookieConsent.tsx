"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

const COOKIE_KEY = "id_cookie_consent";

export default function CookieConsent() {
  const [status, setStatus] = useState<"accepted" | "declined" | "pending">("pending");

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (stored === "accepted" || stored === "declined") {
      setStatus(stored);
    }
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setStatus("accepted");
  }

  function decline() {
    localStorage.setItem(COOKIE_KEY, "declined");
    setStatus("declined");
  }

  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      {/* Load GA only after explicit consent */}
      {status === "accepted" && gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {/* Banner — only shown while pending */}
      {status === "pending" && (
        <div className="cookie-banner" role="region" aria-label="Cookie consent">
          <p>
            This site uses cookies to analyse traffic via Google Analytics.{" "}
            <a
              href="/privacy"
              style={{ color: "var(--color-pink)", textDecoration: "underline" }}
            >
              Privacy policy
            </a>
            .
          </p>
          <div className="cookie-banner__actions">
            <button className="cookie-btn decline" onClick={decline}>
              DECLINE
            </button>
            <button className="cookie-btn accept" onClick={accept}>
              ACCEPT
            </button>
          </div>
        </div>
      )}
    </>
  );
}
