import type { Project } from "@/lib/site";
import { LANG_COLOR } from "@/lib/site";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-md border border-line bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-accent"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-lg group-hover:text-accent">
          {project.name}
        </h3>
        <span className="text-muted transition-colors group-hover:text-accent">
          ↗
        </span>
      </div>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {project.desc}
      </p>

      <div className="mt-4 flex items-center gap-3 text-xs text-muted">
        <span className="flex items-center gap-1.5">
          <span
            className="inline-block h-2.5 w-2.5 rounded-full"
            style={{ background: LANG_COLOR[project.lang] ?? "#888" }}
            aria-hidden
          />
          {project.lang}
        </span>
        {project.stars ? <span>★ {project.stars}</span> : null}
      </div>
    </a>
  );
}
