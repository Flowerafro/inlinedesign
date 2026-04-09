import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { imageUrl } from "@/lib/imageUrl";
import { getDrawingBySlug } from "@/lib/queries";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import DrawingsDescription from "@/components/drawings/DrawingsDescription";
import DrawingsTech from "@/components/drawings/DrawingsTech";
import DrawingsLinks from "@/components/drawings/DrawingsLinks";
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
        <article className="w-full min-h-screen bg-black flex flex-col items-center justify-center">
            {/* Wrapper som holder innholdet samlet og sentrert, med luft til navbaren */}
            <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center lg:items-start py-20 md:py-32 lg:py-40 px-6 md:px-12">

                {/* VENSTRE SIDE: Tegningen (Sentrert med luft rundt) */}
                <section className="w-full lg:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-[600px] aspect-square group">
                        {drawing.heroImage ? (
                            <Image
                                src={imageUrl(drawing.heroImage).width(1000).url()}
                                alt={drawing.title}
                                fill
                                priority
                                className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                        ) : (
                            <div className="w-full h-full bg-neutral-900/50" />
                        )}
                    </div>
                </section>

                {/* HØYRE SIDE: Tekstinnhold (Sentrert vertikalt med bildet) */}
                <section className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:pl-16 wrapper-padding">
                    <div className="w-full max-w-[450px] flex flex-col gap-12">

                        {/* Navigasjon og Tittel */}
                        <div className="flex flex-col gap-6">
                            <Breadcrumbs />
                            <div className="flex flex-col gap-3">
                                <span className="text-pink-500 font-heading tracking-[0.3em] uppercase text-[16px]">
                                    {drawing.assignmentType?.replace(/-/g, " ") || "Drawing"} / Illustration
                                </span>
                                <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] uppercase text-white tracking-tighter">
                                    {drawing.title}
                                </h1>
                            </div>
                        </div>

                        {/* Detaljer - delt opp med tynne linjer for luft */}
                        <div className="flex flex-col gap-10 border-t border-white/10 pt-10">
                            <DrawingsDescription drawing={drawing} />

                            <div className="flex flex-col gap-10">
                                <DrawingsTech techStack={drawing.techStack ?? []} />
                                <DrawingsLinks drawing={drawing} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </article>
    );
}