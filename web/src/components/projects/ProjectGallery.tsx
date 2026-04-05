"use client";

import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { imageUrl } from "../../lib/imageUrl";
import { useProjectGallerySlider } from "@/hooks/useProjectGallerySlider";
import type { SanityImage } from "@/lib/queries";

interface ProjectGalleryProps {
  images: SanityImage[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const total = images.length;
  const { currentIndex, next, prev, goTo, onTouchStart, onTouchEnd } =
    useProjectGallerySlider(total);

  if (total === 0) return null;

  return (
    <section aria-label="Project gallery" className="my-16">
      <h2 className="font-heading text-[1.5rem] tracking-[0.1em] uppercase text-white/50 mb-6">
        Gallery
      </h2>

      {/* Slider track */}
      <div
        className="relative overflow-hidden w-full"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Slides */}
        <div
          className="flex transition-transform duration-400 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="relative w-full shrink-0 aspect-video"
            >
              <Image
                src={imageUrl(img).url()}
                alt={`Gallery image ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-contain p-2 md:p-6"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        {total > 1 && (
          <>
            <button
              onClick={prev}
              className="gallery-arrow left-3"
              aria-label="Previous image"
            >
              <FaAngleLeft size={22} strokeWidth={1.5} />
            </button>
            <button
              onClick={next}
              className="gallery-arrow right-3"
              aria-label="Next image"
            >
              <FaAngleRight size={22} strokeWidth={1.5} />
            </button>
          </>
        )}
      </div>

      {/* Dot indicators */}
      {total > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${i === currentIndex
                ? "bg-[var(--color-pink)]"
                : "bg-white/30 hover:bg-white/60"
                }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
