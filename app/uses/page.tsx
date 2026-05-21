import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses",
  description: "我用的硬件、编辑器、AI 工作流与科研工具。",
  alternates: { canonical: "/uses" },
  openGraph: { title: "Uses — SHzzz", url: "/uses" },
};

const GROUPS = [
  {
    heading: "硬件",
    items: ["日常开发与分析的主力机", "跑大计算时连远程服务器（Linux）"],
  },
  {
    heading: "编辑器 / 终端",
    items: ["VS Code", "Claude Code（终端里的主力 AI 助手）", "Git + GitHub"],
  },
  {
    heading: "AI 工作流",
    items: [
      "Claude 系列模型做代码、写作与分析",
      "自建的 Agent 小工具：代码审查、任务记录、文献日报",
    ],
  },
  {
    heading: "科研工具",
    items: ["Python 生信栈", "Snakemake 流程编排", "常规测序 / 系统发育分析工具链"],
  },
];

export default function UsesPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-16">
      <header className="mb-10">
        <h1 className="font-serif text-4xl tracking-tight">Uses</h1>
        <p className="mt-3 max-w-xl text-muted">
          我日常用的一套家伙什儿——硬件、编辑器、AI 工作流与科研工具。
        </p>
      </header>

      <dl className="grid gap-8 sm:grid-cols-2">
        {GROUPS.map((g) => (
          <div key={g.heading}>
            <dt className="mb-3 text-xs uppercase tracking-widest text-muted">
              {g.heading}
            </dt>
            <dd>
              <ul className="space-y-1.5">
                {g.items.map((item) => (
                  <li key={item} className="leading-relaxed text-foreground/90">
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
