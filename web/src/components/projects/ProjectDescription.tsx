import { PortableText } from "@portabletext/react";
import type { Project } from "@/lib/queries";

const ASSIGNMENT_LABELS: Record<string, string> = {
  exam: "Exam / School",
  customer: "Customer Project",
  hobby: "Personal / Hobby",
};

const TYPE_LABELS: Record<string, string> = {
  "web-site": "Web Site",
  "web-application": "Web App",
  "ui-design": "UI Design",
  "ux-design": "UX Design",
  "logo": "Logo",
  "graphic-design": "Graphic Design",
  "brand-identity": "Brand Identity",
  "communication-design": "Communication Design",
};

interface ProjectDescriptionProps {
  project: Project;
}

export default function ProjectDescription({ project }: ProjectDescriptionProps) {
  const { title, types, assignmentType, description } = project;

  return (
    <div className="max-w-[720px]">
      {/* H1 — Six Caps */}
      <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.95] uppercase text-white mb-6">
        {title}
      </h1>

      {/* Type chips */}
      {types && types.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {types.map((t) => (
            <span
              key={t}
              className="font-heading text-[0.75rem] tracking-[0.08em] uppercase px-2 py-[0.2rem] border border-white/30 text-white/70"
            >
              {TYPE_LABELS[t] ?? t.replace(/-/g, " ")}
            </span>
          ))}
        </div>
      )}

      {/* Assignment type */}
      {assignmentType && (
        <p className="font-body text-[0.8rem] text-white/50 mb-8 uppercase tracking-wider">
          {ASSIGNMENT_LABELS[assignmentType] ?? assignmentType}
        </p>
      )}

      {/* Portable Text description */}
      {description && (
        <div className="font-body text-base leading-[1.75] text-white/80 space-y-4 prose-invert">
          <PortableText value={description as Parameters<typeof PortableText>[0]["value"]} />
        </div>
      )}
    </div>
  );
}
