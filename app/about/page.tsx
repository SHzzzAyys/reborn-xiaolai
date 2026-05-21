import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { getProjects } from "@/lib/github";

export const metadata: Metadata = {
  title: "关于",
  description: `关于 ${SITE.name}：${SITE.bio}。${SITE.tagline}`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `关于 — ${SITE.name}`,
    description: SITE.tagline,
    url: "/about",
  },
};

export default async function AboutPage() {
  const projects = await getProjects();
  const stacks = Array.from(
    new Set(projects.map((p) => p.lang).filter((l) => l && l !== "—"))
  );

  return (
    <div className="mx-auto max-w-3xl px-5 pt-16">
      <header className="mb-10 flex items-center gap-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={SITE.avatar}
          alt={SITE.name}
          width={64}
          height={64}
          className="h-16 w-16 rounded-full object-cover ring-1 ring-black/10"
        />
        <div>
          <h1 className="font-serif text-4xl tracking-tight">关于</h1>
          <p className="mt-1 text-sm text-muted">{SITE.bio}</p>
        </div>
      </header>

      <div className="max-w-2xl space-y-5 text-lg leading-relaxed">
        <p>
          我是 <span className="font-serif">{SITE.name}</span>，一名生物学博士，也是个 AI
          重度爱好者。我的研究方向偏寄生虫 / 弓形虫与计算生物学，日常和测序数据、
          流程脚本、以及一堆永远跑不完的分析打交道。
        </p>
        <p>
          研究之外，我着迷于一件事：把大语言模型和 Agent
          真正接进工作流里，去消化科研与生活中那些重复、易错的环节——
          从代码审查、任务记录，到把论文的科研规范沉淀成可复用的技能。
        </p>
        <p>
          我相信工具应当从你自己的
          <span className="italic text-accent"> 摩擦与伤疤 </span>
          里生长出来，而不是套用模板。这个站点，就是我顺手做的一个小实验。
        </p>
      </div>

      <dl className="mt-12 grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
        <div>
          <dt className="text-xs uppercase tracking-widest text-muted">方向</dt>
          <dd className="mt-1 font-serif text-lg">计算生物学 · AI Agent</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-widest text-muted">常用技术栈</dt>
          <dd className="mt-1 font-serif text-lg">{stacks.join(" · ")}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-xs uppercase tracking-widest text-muted">找到我</dt>
          <dd className="mt-1 flex gap-4 font-serif text-lg">
            {SITE.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline hover:text-accent"
              >
                {s.label}
              </a>
            ))}
          </dd>
        </div>
      </dl>
    </div>
  );
}
