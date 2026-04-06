import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDesignProductBySlug, getDesignProductSlugs } from "@/lib/queries";
import DesignsHero from "@/components/designs/DesignsHero";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import DesignDescription from "@/components/designs/DesignDescription";
import DesignTech from "@/components/designs/DesignTech";
import DesignLinks from "@/components/designs/DesignLinks";
import DesignGallery from "@/components/designs/DesignGallery";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getDesignProductSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const design = await getDesignProductBySlug(slug);
  if (!design) return { title: "Design product not found – inline design" };
  return {
    title: `${design.title} – inline design`,
    description: `${design.title} — a design product by Line Henriksen.`,
  };
}

export default async function DesignsDetailPage({ params }: Props) {
  const { slug } = await params;
  const design = await getDesignProductBySlug(slug);

  if (!design) notFound();

  return (
    <article className="w-full flex flex-col justify-center items-center mx-auto">
      <DesignsHero image={design.heroImage} title={design.title} />

      <div className="wrapper-padding">
        <section className="flex flex-col mx-auto px-10 py-12 gap-8">
          <Breadcrumbs />
          <DesignDescription design={design} />
          <DesignTech techStack={design.techStack ?? []} />
          <DesignLinks design={design} />
          <DesignGallery images={design.gallery ?? []} />
        </section>
      </div>
    </article>
  );
}
