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
    <section className="w-full flex flex-col items-center px-6 md:px-8 py-20">
      <div className="w-full max-w-[1200px] mx-auto">
        <header className="mb-24 flex flex-col items-center text-center">
          <h1 className="font-display text-[clamp(3rem,10vw,6rem)] leading-[0.85] text-white uppercase tracking-tighter">
            My Latest <br className="md:hidden" /> Projects
          </h1>
          <p className="font-body text-white/60 text-lg max-w-[460px] leading-relaxed mt-8">
            A selection of my latest work — ranging from client projects
            to school assignments and creative hobby explorations.
          </p>
        </header>

        <ProjectsClient projects={projects} />
      </div>
    </section>
  );
}