import type { Metadata } from "next";
import { getDesignProducts } from "@/lib/queries";
import DesignsClient from "@/components/designs/DesignsClient";

export const metadata: Metadata = {
    title: "Designs – inline design",
    description:
        "Browse the design products of Inline design — digital art and prints, illustrations, and more.",
};


export default async function DesignsPage() {
    const designs = await getDesignProducts();

    return (
        <section className="w-full flex flex-col items-center px-6 md:px-8 py-20 wrapper-margin-top">
            <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-8">
                <header className="mb-24 flex flex-col items-center text-center gap-8 mb-8">
                    <h1 className="font-display text-[clamp(3rem,10vw,6rem)] leading-[0.85] text-white uppercase tracking-tighter mb-8">
                        Digital design products
                    </h1>
                    <p className="font-body text-white/60 text-sm md:text-base max-w-[460px] leading-relaxed p-8 mt-8 gap-4">
                        A selection of my latest design products - ranging from UI/UX design to graphic design and branding.
                    </p>
                </header>

                <DesignsClient designs={designs} />
            </div>
        </section>
    );
}