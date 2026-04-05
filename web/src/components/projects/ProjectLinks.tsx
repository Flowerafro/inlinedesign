import { fileUrl } from "@/lib/imageUrl";
import type { ProjectLink } from "@/lib/queries";
import { FaFileDownload, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectLinksProps {
  links: ProjectLink[];
}

export default function ProjectLinks({ links }: ProjectLinksProps) {
  if (!links || links.length === 0) return null;

  return (
    <section aria-label="Project links" className="mt-10 w-full h-full flex gap-4">
      <h2 className="font-heading text-[1.5rem] tracking-[0.1em] uppercase text-white/50 mb-4">
        Links &amp; Deliverables
      </h2>
      <div className="flex flex-wrap gap-4">
        {links.map((link, i) => {
          const isFile = !!link.file?.asset;
          const href = isFile ? fileUrl(link.file!.asset._ref) : link.url;
          if (!href) return null;

          return (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              download={isFile ? true : undefined}
              className="flex items-center gap-2 px-6 py-2 bg-pink-500 text-white font-heading text-[0.9rem] tracking-[0.1em] uppercase rounded-sm transition-all duration-300 hover:bg-pink-600 hover:-translate-y-0.5"
            >
              {isFile ? <FaFileDownload size={15} /> : <FaExternalLinkAlt size={15} />}
              <span>{link.linkType}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
