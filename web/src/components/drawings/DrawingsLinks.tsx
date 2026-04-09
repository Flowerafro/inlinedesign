import { FaBehance, FaDeviantart } from "react-icons/fa";
import type { Drawing } from "@/lib/queries";

interface DrawingLinksProps {
    drawing: Drawing;
}

export default function DrawingLinks({ drawing }: DrawingLinksProps) {
    const { behanceUrl, deviantartUrl } = drawing;

    if (!behanceUrl && !deviantartUrl) return null;

    return (
        <section aria-label="Artwork links" className="mt-10 w-full flex flex-col gap-4">
            <h2 className="font-heading text-[1.5rem] tracking-[0.1em] uppercase text-white/50 mb-4">
                Find this on
            </h2>
            <div className="flex flex-col items-start gap-4">
                {behanceUrl && (
                    <a
                        href={behanceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 button-padding bg-[#053eff] text-white font-heading text-[0.9rem] tracking-[0.1em] uppercase rounded-sm transition-all duration-300 hover:opacity-80 hover:-translate-y-0.5"
                    >
                        <FaBehance size={18} />
                        <span>Behance</span>
                    </a>
                )}
                {deviantartUrl && (
                    <a
                        href={deviantartUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 button-padding bg-[#05cc47] text-white font-heading text-[0.9rem] tracking-[0.1em] uppercase rounded-sm transition-all duration-300 hover:opacity-80 hover:-translate-y-0.5"
                    >
                        <FaDeviantart size={18} />
                        <span>DeviantArt</span>
                    </a>
                )}
            </div>
        </section>
    );
}