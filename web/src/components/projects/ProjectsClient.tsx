"use client";

import { useFilter } from "@/hooks/useFilter";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectFilter from "@/components/projects/ProjectFilter";
import LoadMoreBtn from "../common/LoadMoreBtn";
import type { Project } from "@/lib/queries";

interface ProjectsClientProps {
  projects: Project[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const { filterKeys, activeFilter, setFilter, visible, hasMore, loadMore } =
    useFilter(projects);

  return (
    <>
      <ProjectFilter
        filterKeys={filterKeys}
        activeFilter={activeFilter}
        onFilter={setFilter}
      />

      {visible.length === 0 ? (
        <p className="font-body text-white/50 text-base py-16 text-center  gap-8 md:gap-10">
          No projects found for this filter.
        </p>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {visible.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </section>
      )}

      {hasMore && (
        <section className="flex justify-center mt-16  gap-8 md:gap-10">
          <LoadMoreBtn loadMore={loadMore} label="LOAD MORE PROJECTS" />
        </section>
      )}
    </>
  );
}
