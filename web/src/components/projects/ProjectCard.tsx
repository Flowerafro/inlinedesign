import Image from "next/image";
import Link from "next/link";
import { imageUrl } from "../../lib/imageUrl";
import type { Project } from "../../lib/queries";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, slug, cardImage } = project;
  const href = `/projects/${slug.current}`;

  return (
    <Link href={href} className="project-card group" aria-label={`View project: ${title}`}>
      {/* Background image */}
      {cardImage ? (
        <Image
          src={imageUrl(cardImage).width(800).height(800).fit("crop").url()}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover project-card__img"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#22201d] to-black" />
      )}

      {/* Dark overlay + content */}
      <div className="project-card__overlay">
        <h3 className="font-heading text-[1.4rem] leading-tight uppercase text-white mb-3">
          {title}
        </h3>
        <span className="inline-flex items-center gap-1 font-heading text-[0.85rem] tracking-[0.1em] uppercase text-white border border-white/60 px-3 py-1 group-hover:border-[var(--color-pink)] group-hover:text-[var(--color-pink)] transition-colors duration-200">
          VIEW →
        </span>
      </div>
    </Link>
  );
}
