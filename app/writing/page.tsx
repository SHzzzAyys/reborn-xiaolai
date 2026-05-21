import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "写作",
  description: "实验笔记、工具心得与随手记。",
  alternates: { canonical: "/writing" },
  openGraph: { title: "写作 — SHzzz", url: "/writing" },
};

const fmt = new Intl.DateTimeFormat("zh-CN", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function WritingPage() {
  const posts = getPosts();

  return (
    <div className="mx-auto max-w-3xl px-5 pt-16">
      <header className="mb-10">
        <h1 className="font-serif text-4xl tracking-tight">写作</h1>
        <p className="mt-3 max-w-xl text-muted">
          实验笔记、工具心得与随手记。慢慢写，不追求频率。
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-muted">还没有发布的文章。</p>
      ) : (
        <ul className="divide-y divide-line">
          {posts.map((p) => (
            <li key={p.slug} className="group py-6">
              <Link href={`/writing/${p.slug}`} className="block">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="font-serif text-2xl group-hover:text-accent">
                    {p.title}
                  </h2>
                  {p.date && (
                    <time
                      dateTime={p.date}
                      className="shrink-0 text-xs text-muted"
                    >
                      {fmt.format(new Date(p.date))}
                    </time>
                  )}
                </div>
                {p.excerpt && (
                  <p className="mt-2 max-w-2xl text-muted">{p.excerpt}</p>
                )}
                {p.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line px-2 py-0.5 text-xs text-muted"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
