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
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[rgba(26,10,50,0.96)] backdrop-blur-[8px] border-t border-[rgba(250,65,204,0.25)] p-4 px-6 flex items-center justify-between gap-4 flex-wrap font-body text-[0.85rem]" role="region" aria-label="Cookie consent">
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
          <div className="flex gap-3 shrink-0">
            <button className="font-heading tracking-[0.07em] text-[0.9rem] px-4 py-1.5 border-[1.5px] border-white bg-transparent text-white cursor-pointer transition-colors duration-200 hover:bg-white hover:text-black" onClick={decline}>
              DECLINE
            </button>
            <button className="font-heading tracking-[0.07em] text-[0.9rem] px-4 py-1.5 border-[1.5px] border-[var(--color-pink)] bg-[var(--color-pink)] text-white cursor-pointer transition-colors duration-200 hover:bg-[#e030b8] hover:border-[#e030b8]" onClick={accept}>
              ACCEPT
            </button>
          </div>
        </div>
      )}
    </>
  );
}
