import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, getProjectSlugs } from "@/lib/queries";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectBreadcrumbs from "@/components/projects/ProjectBreadcrumbs";
import ProjectDescription from "@/components/projects/ProjectDescription";
import ProjectTech from "@/components/projects/ProjectTech";
import ProjectLinks from "@/components/projects/ProjectLinks";
import ProjectGallery from "@/components/projects/ProjectGallery";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: "Project not found – inline design" };
  return {
    title: `${project.title} – inline design`,
    description: `${project.title} — a project by Line Henriksen.`,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <article className="w-full flex flex-col items-center">
      <ProjectHero image={project.mainImage} title={project.title} />

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-12">
        <ProjectBreadcrumbs />
        <ProjectDescription project={project} />
        <ProjectTech techStack={project.techStack ?? []} />
        <ProjectLinks links={project.projectLinks ?? []} />
        <ProjectGallery images={project.gallery ?? []} />
      </div>
    </article>
  );
}
