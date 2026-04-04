// Social icons as inline SVGs — no icon library dependency

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function BeaconsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        padding: "1.25rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
        marginTop: "auto",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.85rem",
          color: "rgba(255,255,255,0.6)",
        }}
      >
        © 2026 inlinedesign.no. All rights reserved.
      </p>

      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
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
      </div>
    </footer>
  );
}
