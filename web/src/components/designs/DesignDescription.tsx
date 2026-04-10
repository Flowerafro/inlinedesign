import { PortableText } from "@portabletext/react";
import type { DesignProduct } from "@/lib/queries";

const ASSIGNMENT_LABELS: Record<string, string> = {
  exam: "Exam / School",
  "customer-order": "Customer Order",
  hobby: "Personal / Hobby",
  commercial: "Commercial / For Sale",
  community: "Public / Community Resource",
};

const TYPE_LABELS: Record<string, string> = {
  "logo": "Logo",
  "graphic-design": "Graphic Design",
  "brand-identity": "Brand Identity",
  "digital-download": "Digital Download",
  "printable": "Printable",
  "illustration": "Illustration",
  "digital-art": "Digital Art",
  "drawing": "Drawing",
  "other": "Other",
};

interface DesignDescriptionProps {
  design: DesignProduct;
}

export default function DesignDescription({ design }: DesignDescriptionProps) {
  const { title, types, assignmentType, description } = design;

  return (
    <section className="w-full max-w-[320px] md:max-w-[720px] px-4 flex flex-col gap-2">
      <h1 className="font-display text-[clamp(3rem,5vw,6rem)] leading-[0.95] uppercase text-white mb-60  wrapper-margin-top-50">
        {title}
      </h1>

      {types && types.length > 0 && (
        <div className="flex flex-col items-start gap-2 mb-4 wrapper-margin-top-50">
          <h2 className="font-heading text-[1.5rem] tracking-[0.1em] uppercase text-white/50 mb-6">Design type:</h2>
          {types.map((t) => (
            <div key={t} className="flex flex-col gap-2">
              <span
                className="font-heading text-[1rem] text-center tracking-[0.08em] uppercase button-padding border border-white/30 text-pink/70 rounded-sm"
              >
                {TYPE_LABELS[t] ?? t.replace(/-/g, " ")}
              </span>
            </div>
          ))}
        </div>
      )}

      {assignmentType && (
        <>
          <div className="flex flex-col gap-2 wrapper-margin-top-10">
            <h2 className="font-heading text-[1.5rem] tracking-[0.1em] uppercase text-white/50 mb-4">Assignment type:</h2>
            <p className="font-body text-[0.8rem] text-white/50 mb-8 uppercase tracking-wider">
              {ASSIGNMENT_LABELS[assignmentType] ?? assignmentType}
            </p>
          </div>
        </>
      )}

      {description && (
        <div className="font-body text-sm md:text-base leading-[1.75] text-pink/80 space-y-4 prose-invert wrapper-margin-top-50 whitespace-pre-line">
          <PortableText value={description as Parameters<typeof PortableText>[0]["value"]} />
        </div>
      )}
    </section>
  );
}
