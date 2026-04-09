import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDrawingBySlug } from "@/lib/queries";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import DrawingsHero from "@/components/drawings/DrawingsHero";
import DrawingsDescription from "@/components/drawings/DrawingsDescription";
import DrawingsTech from "@/components/drawings/DrawingsTech";
import DrawingsLinks from "@/components/drawings/DrawingsLinks";
import DrawingsGallery from "@/components/drawings/DrawingsGallery";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const drawing = await getDrawingBySlug(slug);
    if (!drawing) return { title: "Drawing not found – inline design" };
    return {
        title: `${drawing.title} – inline design`,
        description: `${drawing.title} — a drawing by Line Henriksen.`,
    };
}

export default async function DrawingDetailPage({ params }: Props) {
    const { slug } = await params;
    const drawing = await getDrawingBySlug(slug);

    if (!drawing) notFound();

    return (
        <article className="w-full flex flex-col justify-center items-center mx-auto">
            <DrawingsHero image={drawing.heroImage} title={drawing.title} />

            <div className="wrapper-padding">
                <section className="flex flex-col mx-auto px-10 py-12 gap-8">
                    <Breadcrumbs />
                    <DrawingsDescription drawing={drawing} />
                    <DrawingsTech techStack={drawing.techStack ?? []} />
                    <DrawingsLinks drawing={drawing} />
                </section>
            </div>
        </article>
    );
}
