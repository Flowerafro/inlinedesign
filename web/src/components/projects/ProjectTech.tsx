import Image from "next/image";
import { imageUrl } from "@/lib/imageUrl";
import type { TechStackItem } from "@/lib/queries";

interface ProjectTechProps {
  techStack: TechStackItem[];
}

export default function ProjectTech({ techStack }: ProjectTechProps) {
  if (!techStack || techStack.length === 0) return null;

  return (
    <section aria-label="Tech stack" className="mt-10">
      <h2 className="font-heading text-[1.1rem] tracking-[0.1em] uppercase text-white/50 mb-4">
        Tech Stack
      </h2>
      <div className="flex flex-wrap gap-3">
        {techStack.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-3 py-2 border border-white/20 bg-white/5"
          >
            {item.icon && (
              <div className="relative w-5 h-5 shrink-0">
                <Image
                  src={imageUrl(item.icon).width(40).height(40).url()}
                  alt={item.label}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <span className="font-body text-[0.85rem] text-white/80">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
