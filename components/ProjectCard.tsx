import type { Project } from "@/lib/site";
import { LANG_COLOR } from "@/lib/site";

// 相对时间：今天 / N 天前 / N 周前 / N 个月前（用内置 Intl，无依赖）
function relativeTime(iso?: string): string | null {
  if (!iso) return null;
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return null;
  const diffDays = Math.round((then - Date.now()) / 86_400_000);
  const rtf = new Intl.RelativeTimeFormat("zh-CN", { numeric: "auto" });
  const abs = Math.abs(diffDays);
  if (abs < 1) return "今天更新";
  if (abs < 7) return `更新于 ${rtf.format(diffDays, "day")}`;
  if (abs < 30) return `更新于 ${rtf.format(Math.round(diffDays / 7), "week")}`;
  if (abs < 365) return `更新于 ${rtf.format(Math.round(diffDays / 30), "month")}`;
  return `更新于 ${rtf.format(Math.round(diffDays / 365), "year")}`;
}

export default function ProjectCard({ project }: { project: Project }) {
  const updated = relativeTime(project.updated);

  return (
    // 外层是 <div>（不是 <a>），内部放两个独立链接，避免嵌套 <a>
    <div
      className={`group relative flex flex-col rounded-md border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-accent ${
        project.pinned ? "border-accent/40 ring-1 ring-accent/30" : "border-line"
      }`}
    >
      {project.pinned && (
        <span className="absolute right-3 top-3 rounded-full bg-accent/12 px-2 py-0.5 text-[10px] tracking-wide text-accent">
          精选
        </span>
      )}

      <div className="flex items-center justify-between gap-2 pr-12">
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name}，在 GitHub 上查看`}
          className="font-serif text-lg transition-colors hover:text-accent"
        >
          {project.name}
          <span aria-hidden className="ml-1 text-muted">
            ↗
          </span>
        </a>
      </div>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {project.desc}
      </p>

      {project.readmeExcerpt && (
        <p className="mt-2 border-l-2 border-line pl-3 text-xs leading-relaxed text-muted/85">
          {project.readmeExcerpt}
        </p>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
        <span className="flex items-center gap-1.5">
          <span
            className="inline-block h-2.5 w-2.5 rounded-full"
            style={{ background: LANG_COLOR[project.lang] ?? "#888" }}
            aria-hidden
          />
          {project.lang}
        </span>
        {project.stars ? <span>★ {project.stars}</span> : null}
        {updated && <span>{updated}</span>}
        {project.homepage && (
          <a
            href={project.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-accent transition-opacity hover:opacity-75"
          >
            Demo →
          </a>
        )}
      </div>
    </div>
  );
}
