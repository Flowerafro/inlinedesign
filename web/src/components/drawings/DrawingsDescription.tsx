import { PortableText } from "@portabletext/react";
import type { Drawing } from "@/lib/queries";

const ASSIGNMENT_LABELS: Record<string, string> = {
    exam: "Exam / School",
    "customer-order": "Customer Order",
    hobby: "Personal / Hobby",
    commercial: "Commercial / For Sale",
    community: "Public / Community Resource",
};

const TYPE_LABELS: Record<string, string> = {
    "illustration": "Illustration",
    "digital-art": "Digital Art",
    "free-hand-drawing": "Free Hand Drawing",
    "drawing": "Drawing",
    "other": "Other",
};

interface DrawingDescriptionProps {
    drawing: Drawing;
}

export default function DrawingDescription({ drawing }: DrawingDescriptionProps) {
    const { title, types, assignmentType, description } = drawing;

    return (
        <section className="w-full max-w-[320px] md:max-w-[720px] px-4 flex flex-col gap-2">
            <h1 className="font-display text-[clamp(3rem,5vw,6rem)] leading-[0.95] uppercase text-white mb-60 wrapper-padding">
                {title}
            </h1>

            {types && types.length > 0 && (
                <div className="flex flex-col items-start gap-2 mb-4">
                    <h2 className="font-heading text-[1.5rem] tracking-[0.1em] uppercase text-white/50 mb-6">Art style:</h2>
                    <div className="flex flex-wrap gap-2">
                        {types.map((t) => (
                            <span key={t} className="font-heading text-[1rem] tracking-[0.08em] uppercase button-padding border border-white/30 text-white/70 rounded-sm">
                                {TYPE_LABELS[t] ?? t.replace(/-/g, " ")}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {assignmentType && (
                <div className="flex flex-col gap-2">
                    <h2 className="font-heading text-[1.5rem] tracking-[0.1em] uppercase text-white/50 mb-4">Context:</h2>
                    <p className="font-body text-[0.8rem] text-white/50 mb-8 uppercase tracking-wider">
                        {ASSIGNMENT_LABELS[assignmentType] ?? assignmentType}
                    </p>
                </div>
            )}

            {description && (
                <div className="font-body text-sm md:text-base leading-[1.75] text-white/80 space-y-4 prose-invert wrapper-padding whitespace-pre-line">
                    <PortableText value={description as any} />
                </div>
            )}
        </section>
    );
}