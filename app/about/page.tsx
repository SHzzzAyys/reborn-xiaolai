import { SITE } from "@/lib/site";

export const metadata = { title: "关于 — Reborn" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-16">
      <header className="mb-10">
        <h1 className="font-serif text-4xl tracking-tight">关于</h1>
      </header>

      <div className="max-w-2xl space-y-5 text-lg leading-relaxed">
        <p>
          我是一名作家、老师与投资人。十余年来，我一直在公开发布自己所学——关于金钱、语言、注意力，
          以及那种把一个好奇的下午，慢慢复利成一份事业的奇妙力量。
        </p>
        <p>
          这个站点是一本公开记录的读书笔记本：每周两篇文章，一架中英双语的书，
          以及一群更愿意把一页好书重读三遍、也不愿草草扫过一百页的学习者。
        </p>
        <p>
          前提很简单：终身学习者可以
          <span className="italic text-accent"> 重生 </span>
          ——而当 AI 成为一位耐心的导师，重新开始的成本，从未如此之低。
        </p>
      </div>

      <dl className="mt-12 grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
        <div>
          <dt className="text-xs uppercase tracking-widest text-muted">常驻</dt>
          <dd className="mt-1 font-serif text-lg">
            {SITE.locations.join(" · ")}
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-widest text-muted">写作始于</dt>
          <dd className="mt-1 font-serif text-lg">2004 年</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-widest text-muted">找到我</dt>
          <dd className="mt-1 flex gap-4 font-serif text-lg">
            {SITE.socials.map((s) => (
              <a key={s.label} href={s.href} className="link-underline hover:text-accent">
                {s.label}
              </a>
            ))}
          </dd>
        </div>
      </dl>
    </div>
  );
}
