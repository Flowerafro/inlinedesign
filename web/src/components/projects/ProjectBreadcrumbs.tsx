import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa";

export default function ProjectBreadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1 font-heading text-[0.9rem] tracking-[0.06em] uppercase text-pink/80 hover:text-[var(--color-pink)] transition-colors duration-200"
      >
        <FaAngleLeft size={16} strokeWidth={1.5} />
        Back to Projects
      </Link>
    </nav>
  );
}
