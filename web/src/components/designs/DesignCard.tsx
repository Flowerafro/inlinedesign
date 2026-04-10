import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { imageUrl } from "../../lib/imageUrl";
import type { DesignProduct } from "../../lib/queries";

interface DesignCardProps {
  design: DesignProduct;
}

export default function DesignCard({ design }: DesignCardProps) {
  const { title, slug, image, assignmentType } = design;
  const href = `/designs/${slug.current}`;
  const typeLabel = assignmentType ? assignmentType.replace(/-/g, " ") : "Design";

  return (
    <Link
      href={href}
      className="flex flex-col group cursor-pointer transition-all duration-300 hover:-translate-y-1"
      aria-label={`View design: ${title}`}
    >
      <div className="relative overflow-hidden aspect-square rounded-sm w-full mb-4">
        <div className="absolute inset-0 z-10 transition-all duration-500 group-hover:bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          <span className="button-padding border border-white/20 bg-white/10 backdrop-blur-md text-white text-[10px] uppercase tracking-[0.2em] rounded-full">
            View Project
          </span>
        </div>

        {image ? (
          <Image
            src={imageUrl(image).width(800).height(800).fit("crop").url()}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover z-0 transition-all duration-500 ease-out 
                 brightness-[0.85] group-hover:brightness-[0.5] group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-neutral-900" />
        )}
      </div>

      <div className="flex flex-col w-full px-1">
        <div className="flex justify-between items-center w-full">
          <h3 className="font-heading text-lg md:text-xl uppercase text-white transition-colors duration-300 group-hover:text-[#ff4d94]">
            {title}
          </h3>
          <FiArrowUpRight className="text-white text-xl transition-colors duration-300 group-hover:text-[#ff4d94]" />
        </div>
        <span className="text-sm text-white/40 uppercase tracking-widest mt-1">
          {typeLabel}
        </span>
      </div>
    </Link>
  );
}
