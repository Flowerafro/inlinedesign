export default function HomePage() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="w-full mx-auto px-6 py-16 flex-1 flex items-center justify-center gap-16 min-h-[calc(100dvh-180px)] flex-wrap"
    >
      <div className="flex flex-col gap-6 max-w-[1200px]">
        <h1 id="hero-heading" className="font-heading text-[clamp(2.2rem,5vw,3.2rem)] leading-[1.05] uppercase">
          Cool but not a<br />cocky welcome headline </h1>

        <p className="font-body text-base leading-[1.65] text-white/75 max-w-[340px]">
          Lorem ipsum filler text here about something short and introducing
          about site
        </p>
      </div>
    </section >
  );
}