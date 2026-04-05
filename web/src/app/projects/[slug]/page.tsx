import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, getProjectSlugs } from "@/lib/queries";
import ProjectHero from "@/components/projects/ProjectHero";
import Breadcrumbs from "@/components/common/Breadcrumbs";
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
    <article className="w-full flex flex-col justify-center items-center mx-auto">
      <ProjectHero image={project.mainImage} title={project.title} />

      <div className="wrapper-padding">
        <section className="flex flex-col mx-auto px-10 py-12 gap-8">
          <Breadcrumbs />
          <ProjectDescription project={project} />
          <ProjectTech techStack={project.techStack ?? []} />
          <ProjectLinks links={project.projectLinks ?? []} />
          <ProjectGallery images={project.gallery ?? []} />
        </section>
      </div>
    </article>
  );
}
