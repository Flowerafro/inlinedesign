"use client";

import { useProjectFilter } from "@/hooks/useProjectFilter";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectFilter from "@/components/projects/ProjectFilter";
import type { Project } from "@/lib/queries";

interface ProjectsClientProps {
  projects: Project[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const { filterKeys, activeFilter, setFilter, visible, hasMore, loadMore } =
    useProjectFilter(projects);

  return (
    <>
      <ProjectFilter
        filterKeys={filterKeys}
        activeFilter={activeFilter}
        onFilter={setFilter}
      />

      {visible.length === 0 ? (
        <p className="font-body text-white/50 text-base py-16 text-center">
          No projects found for this filter.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {visible.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      )}

      {hasMore && (
        <div className="flex justify-center mt-16">
          <button
            onClick={loadMore}
            className="border border-white/60 bg-transparent text-white font-heading text-lg tracking-[0.2em] uppercase px-12 py-4 hover:border-white hover:bg-white/5 transition-all duration-300 hover:-translate-y-0.5 rounded-[4px]"
          >
            LOAD MORE PROJECTS
          </button>
        </div>
      )}
    </>
  );
}
