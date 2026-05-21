import type { Metadata } from "next";
import { NOW } from "@/lib/now";

export const metadata: Metadata = {
  title: "Now",
  description: "我现在正在做什么。",
  alternates: { canonical: "/now" },
  openGraph: { title: "Now — SHzzz", url: "/now" },
};

const fmt = new Intl.DateTimeFormat("zh-CN", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function NowPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-16">
      <header className="mb-10">
        <h1 className="font-serif text-4xl tracking-tight">Now</h1>
        <p className="mt-3 max-w-xl text-muted">
          这一页记录我此刻正在专注的事，灵感来自{" "}
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-foreground"
          >
            nownownow.com
          </a>{" "}
          的约定。
        </p>
        <p className="mt-2 text-xs text-muted">
          最后更新于 {fmt.format(new Date(NOW.updatedAt))}
        </p>
      </header>

      <div className="space-y-10">
        {NOW.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="mb-3 text-xs uppercase tracking-widest text-muted">
              {s.heading}
            </h2>
            <ul className="space-y-2">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-line pl-4 leading-relaxed text-foreground/90"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
