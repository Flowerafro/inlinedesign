import { fileUrl } from "@/lib/imageUrl";
import type { ProjectLink } from "@/lib/queries";
import { FaFileDownload, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectLinksProps {
  links: ProjectLink[];
}

export default function ProjectLinks({ links }: ProjectLinksProps) {
  if (!links || links.length === 0) return null;

  return (
    <section aria-label="Project links" className="mt-10">
      <h2 className="font-heading text-[1.1rem] tracking-[0.1em] uppercase text-white/50 mb-4">
        Links &amp; Deliverables
      </h2>
      <div className="flex flex-wrap gap-3">
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
              className="inline-flex items-center gap-2 font-heading text-[0.9rem] tracking-[0.08em] uppercase px-4 py-2 border border-white/40 text-white hover:border-[var(--color-pink)] hover:text-[var(--color-pink)] transition-colors duration-200"
            >
              {isFile ? <FaFileDownload size={16} strokeWidth={1.5} /> : <FaExternalLinkAlt size={16} strokeWidth={1.5} />}
              {link.linkType}
            </a>
          );
        })}
      </div>
    </section>
  );
}
