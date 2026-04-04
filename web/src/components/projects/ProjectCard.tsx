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

      {/* Dark overlay + content perfectly centered */}
      <div className="project-card__overlay flex flex-col items-center justify-center p-6 text-center">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h3 className="font-heading text-[1.4rem] md:text-[2rem] uppercase text-white mb-6">
            {title}
          </h3>
          <p className="inline-flex items-center justify-center font-heading text-[1.2rem] p-4 uppercase border border-white px-8 py-3 text-white bg-transparent transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:-translate-y-0.5 rounded-[4px]">
            view
          </p>
        </div>
      </div>
    </Link>
  );
}
