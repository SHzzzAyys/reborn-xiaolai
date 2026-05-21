import Link from "next/link";
import { SITE, PROJECTS, CATEGORIES } from "@/lib/site";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-5">
      {/* Hero with real GitHub avatar */}
      <section className="pt-16 pb-12 sm:pt-24">
        <div className="mb-8 flex items-center gap-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={SITE.avatar}
            alt={SITE.name}
            width={80}
            height={80}
            className="h-20 w-20 shrink-0 rounded-full object-cover shadow-sm ring-1 ring-black/10"
          />
          <div>
            <h1 className="font-serif text-3xl tracking-tight sm:text-4xl">
              {SITE.name}
            </h1>
            <p className="mt-1 text-sm text-muted">{SITE.bio}</p>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline mt-1 inline-block text-sm text-accent"
            >
              {SITE.handle}
            </a>
          </div>
        </div>

        <p className="max-w-xl font-serif text-2xl leading-snug sm:text-3xl">
          {SITE.tagline}
        </p>
        <p className="mt-4 max-w-xl text-muted">{SITE.blurb}</p>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <span>
            <span className="text-foreground">{SITE.repoCount}</span> 个公开仓库
          </span>
          <span>{SITE.joined} 年加入 GitHub</span>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-foreground"
          >
            在 GitHub 上关注我 →
          </a>
        </div>
      </section>

      {/* Projects, grouped by theme */}
      <section id="projects" className="scroll-mt-20 border-t border-line py-12">
        <div className="mb-8 flex items-baseline justify-between">
          <h2 className="font-serif text-2xl">项目</h2>
          <span className="text-sm text-muted">精选原创仓库</span>
        </div>

        <div className="space-y-10">
          {CATEGORIES.map((cat) => {
            const items = PROJECTS.filter((p) => p.category === cat);
            if (items.length === 0) return null;
            return (
              <div key={cat}>
                <h3 className="mb-4 text-xs uppercase tracking-widest text-muted">
                  {cat}
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {items.map((p) => (
                    <ProjectCard key={p.name} project={p} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* About teaser */}
      <section className="border-t border-line py-12">
        <h2 className="mb-3 font-serif text-2xl">关于</h2>
        <p className="max-w-xl text-muted">
          生物学博士在读，AI 重度爱好者。研究之外，我喜欢把 LLM 与 Agent
          接进真实的工作流里。
        </p>
        <Link
          href="/about"
          className="link-underline mt-4 inline-block text-sm text-foreground"
        >
          了解更多 →
        </Link>
      </section>
    </div>
  );
}
