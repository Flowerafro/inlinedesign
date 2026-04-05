import Image from "next/image";
import Link from "next/link";
import cloudyThoughts from "../../assets/cloudy-thoughts-nobg.png";

export const metadata = {
  title: "About – inline design",
  description: "Learn more about Line Henriksen and the story behind inline design.",
};

export default function AboutPage() {
  return (
    <section className="w-full flex flex-col items-center">
      {/* Main Content Container */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-24">

        {/* Page Header (Centered) */}
        <header className="flex flex-col items-center text-center mb-20">
          <h1 className="font-display text-[clamp(4rem,10vw,7rem)] leading-[0.85] text-white uppercase tracking-tighter mb-4">
            ABOUT
          </h1>
          <p className="font-body text-white/60 text-sm md:text-base max-w-[500px] leading-relaxed">
            Get to know the designer behind the pixels. A brief look into my background, my creative process, and what drives my work.
          </p>
        </header>

        {/* Content Layout (Flexbox) */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">

          {/* Left Column (Image) */}
          <div className="w-full md:w-[45%] relative aspect-[4/5] md:aspect-auto md:h-[600px]">
            <Image
              src={cloudyThoughts}
              alt="Cloudy Thoughts graphic"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>

          {/* Right Column (Text Block) */}
          <div className="w-full md:w-[55%] flex flex-col justify-center mt-4 md:mt-12">
            <h2 className="font-heading text-[2.5rem] md:text-[3rem] text-white uppercase text-left mb-8 tracking-wide">
              THE STORY SO FAR
            </h2>

            <div className="font-body text-white/80 space-y-6 leading-relaxed text-base md:text-[1.05rem]">
              <p>
                Designer of digital experiences and web designs. inline design is my creative sandbox mixing logic and creativity. I believe that good design is as much about problem-solving as it is about visual aesthetics.
              </p>
              <p>
                With a background in graphic design and a passion for front-end development, I bridge the gap between creative concepts and technical execution. Every project is an opportunity to learn, explore, and push boundaries.
              </p>
              <p>
                When I'm not designing or coding, you can usually find me seeking new inspiration, exploring typography details, or sketching out new ideas.
              </p>
            </div>

            {/* Call to Action (CTA) */}
            <div className="mt-12">
              <Link
                href="/cv.pdf"
                className="inline-block bg-pink-500 text-white font-heading text-[1.1rem] tracking-widest uppercase px-12 py-3 rounded-sm transition-transform duration-300 hover:translate-y-[-2px] hover:bg-pink-600 shadow-[0_4px_15px_rgba(250,65,204,0.3)]"
              >
                VIEW MY RESUME
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
