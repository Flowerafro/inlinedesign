import type { Metadata } from "next";
import { getProjects } from "@/lib/queries";
import ProjectsClient from "@/components/projects/ProjectsClient";

export const metadata: Metadata = {
  title: "Projects – inline design",
  description:
    "Browse the portfolio of Line Henriksen — web design, UI/UX, brand identity, and graphic design projects.",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="w-full flex flex-col items-center px-6 md:px-8 py-16">

      <div className="max-w-[1200px] mx-auto mt-10">
        <header className="mb-12">
          <h1 className="font-display text-[clamp(3.5rem,10vw,7rem)] leading-[0.9] uppercase text-white mb-4">
            Projects
          </h1>
          <p className="font-body text-white/60 text-base max-w-[480px] leading-relaxed">
            A selection of web and design work — filtered by discipline.
          </p>
        </header>

        <ProjectsClient projects={projects} />
      </div>
    </section>
  );
}
