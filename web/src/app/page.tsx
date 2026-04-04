import Image from "next/image";
import Link from "next/link";

// Social icons — inline SVG, no library
function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none"
      viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function BeaconsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none"
      viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none"
      viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <section
      aria-labelledby="hero-heading"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "4rem 2rem 3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "4rem",
        minHeight: "calc(100dvh - 180px)",
        flexWrap: "wrap",
      }}
    >
      {/* Left — blob illustration */}
      <div className="hero-blob" style={{ position: "relative" }}>
        <Image
          src="/hero-blob.png"
          alt="Illustrated landscape scene in an organic blob shape"
          fill
          sizes="(max-width: 768px) 90vw, 380px"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Right — text + socials */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          maxWidth: "420px",
        }}
      >
        <h1
          id="hero-heading"
          className="font-heading"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
            lineHeight: 1.05,
            textTransform: "uppercase",
          }}
        >
          Cool but not a<br />
          cocky welcome headline
        </h1>

        <p
          className="font-body"
          style={{
            fontSize: "1rem",
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.75)",
            maxWidth: "340px",
          }}
        >
          Lorem ipsum filler text here about something short and introducing
          about site
        </p>

        {/* Social icons + CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "0.75rem",
            marginTop: "0.5rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://beacons.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="Portfolio / Beacons"
          >
            <BeaconsIcon />
          </a>
          <a
            href="mailto:hello@inlinedesign.no"
            className="social-icon"
            aria-label="Send email"
          >
            <EmailIcon />
          </a>

          <Link
            href="/cv.pdf"
            className="btn-cv"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1rem",
              letterSpacing: "0.1em",
              padding: "0.45rem 1.4rem",
              marginLeft: "0.25rem",
            }}
            aria-label="Download resume"
          >
            GET RESUME
          </Link>
        </div>
      </div>
    </section>
  );
}
