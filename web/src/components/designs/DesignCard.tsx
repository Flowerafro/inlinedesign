import Image from "next/image";
import Link from "next/link";
import { imageUrl } from "../../lib/imageUrl";
import type { DesignProduct } from "../../lib/queries";

interface DesignCardProps {
  design: DesignProduct;
}

export default function DesignCard({ design }: DesignCardProps) {
  const { title, slug, image, assignmentType } = design;
  const href = `/designs/${slug.current}`;
  
  const typeLabel = assignmentType ? assignmentType.charAt(0).toUpperCase() + assignmentType.slice(1) : "";

  return (
    <Link href={href} className="relative overflow-hidden block aspect-square cursor-pointer group" aria-label={`View design: ${title}`}>
      {image ? (
        <Image
          src={imageUrl(image).width(800).height(800).fit("crop").url()}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-400 ease-out group-hover:scale-[1.04]"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#22201d] to-black" />
      )}

      {/* The Overlay */}
      <section className="absolute inset-0 bg-[var(--color-card-overlay)] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-start justify-end p-5">
        <div className="w-full h-full flex flex-col items-center justify-center text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {typeLabel && (
            <span className="font-heading text-[1rem] tracking-[0.15em] uppercase text-pink mb-2 block">
              {typeLabel}
            </span>
          )}
          <h3 className="font-heading text-[1.4rem] md:text-[2rem] uppercase text-white mb-6">
            {title}
          </h3>
          <p className="inline-flex items-center justify-center font-heading text-[1.2rem] uppercase border border-white px-8 py-3 text-white bg-transparent transition-all duration-300 hover:bg-pink hover:border-pink hover:text-white rounded-[4px]">
            view
          </p>
        </div>
      </section>
    </Link>
  );
}
