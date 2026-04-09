"use client";

import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { imageUrl } from "../../lib/imageUrl";
import { useProjectGallerySlider } from "@/hooks/useProjectGallerySlider";
import type { SanityImage } from "@/lib/queries";

interface DesignGalleryProps {
  images: SanityImage[];
}

export default function DesignGallery({ images }: DesignGalleryProps) {
  const total = images.length;
  const { currentIndex, next, prev, goTo, onTouchStart, onTouchEnd } =
    useProjectGallerySlider(total);

  if (total === 0) return null;

  return (
    <section aria-label="Design gallery" className="my-16">
      <h2 className="font-heading text-[1.5rem] tracking-[0.1em] uppercase text-white/50 mb-6">
        Gallery
      </h2>
      <div
        className="relative overflow-hidden w-full"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-400 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] shrink-0 overflow-hidden"
            >
              <Image
                src={imageUrl(img).url()}
                alt={`Gallery image ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-contain p-6 bg-[#0a0a0a] rounded-md"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {total > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute top-1/2 -translate-y-1/2 bg-black/45 border-[1.5px] border-white/25 text-white w-[44px] h-[44px] flex items-center justify-center cursor-pointer transition-colors duration-200 z-10 hover:bg-[rgba(250,65,204,0.3)] hover:border-[var(--color-pink)] left-3"
              aria-label="Previous image"
            >
              <FaAngleLeft size={22} strokeWidth={1.5} />
            </button>
            <button
              onClick={next}
              className="absolute top-1/2 -translate-y-1/2 bg-black/45 border-[1.5px] border-white/25 text-white w-[44px] h-[44px] flex items-center justify-center cursor-pointer transition-colors duration-200 z-10 hover:bg-[rgba(250,65,204,0.3)] hover:border-[var(--color-pink)] right-3"
              aria-label="Next image"
            >
              <FaAngleRight size={22} strokeWidth={1.5} />
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${i === currentIndex
                ? "bg-[var(--color-black)]"
                : "bg-white/30 hover:bg-white/60"
                }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
