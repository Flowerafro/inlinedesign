import Link from "next/link";
import SocialIcons from "@/components/ui/Icons/SocialIcons";

export default function HomePage() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="max-w-[1200px] mx-auto px-8 py-16 flex items-center justify-center gap-16 min-h-[calc(100dvh-180px)] flex-wrap"
    >
      {/* Text + socials */}
      <div className="flex flex-col gap-6 max-w-[420px]">
        <h1
          id="hero-heading"
          className="font-heading text-[clamp(2.2rem,5vw,3.2rem)] leading-[1.05] uppercase"
        >
          Cool but not a<br />
          cocky welcome headline
        </h1>

        <p className="font-body text-base leading-[1.65] text-white/75 max-w-[340px]">
          Lorem ipsum filler text here about something short and introducing
          about site
        </p>

        {/* Social icons + CTA */}
        <SocialIcons />

        <Link
          href="/cv.pdf"
          className="btn-cv ml-1"
          aria-label="Download resume"
        >
          GET RESUME
        </Link>
      </div>
    </section >
  );
}
