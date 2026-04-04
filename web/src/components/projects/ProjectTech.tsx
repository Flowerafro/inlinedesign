export default function ProjectTech({ techStack }: { techStack: string[] }) {
  if (!techStack || techStack.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {techStack.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 bg-white/10 border border-white/5 rounded-full text-xs font-body text-white/80"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}