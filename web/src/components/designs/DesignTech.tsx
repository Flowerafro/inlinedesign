export default function DesignTech({ techStack }: { techStack: string[] }) {
    if (!techStack || techStack.length === 0) return null;

    return (
        <div className="flex flex-wrap gap-2 mt-4 wrapper-margin-top-50 md:max-w-1/2">
            {techStack.map((tech) => (
                <span
                    key={tech}
                    className="glass-button transition-all duration-300 hover:-translate-y-0.5"
                >
                    {tech}
                </span>
            ))}
        </div>
    );
}