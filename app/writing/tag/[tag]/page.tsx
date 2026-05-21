import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllTags, getPostsByTag } from "@/lib/posts";

export const dynamicParams = false;

// 返回原始 tag（不 encode），让静态导出写出 UTF-8 目录名（如 建站/），
// 而非字面的 %E5%.. 目录——后者会让托管层解码后匹配不到而 404。
export function generateStaticParams() {
  return getAllTags().map(({ tag }) => ({ tag }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag } = await params;
  const enc = encodeURIComponent(tag);
  return {
    title: `标签：${tag}`,
    description: `标记为「${tag}」的文章。`,
    alternates: { canonical: `/writing/tag/${enc}` },
    openGraph: { title: `标签：${tag} — SHzzz`, url: `/writing/tag/${enc}` },
  };
}

const fmt = new Intl.DateTimeFormat("zh-CN", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);
  if (posts.length === 0) notFound();

  return (
    <div className="mx-auto max-w-3xl px-5 pt-16">
      <header className="mb-10">
        <Link
          href="/writing"
          className="link-underline text-sm text-muted hover:text-foreground"
        >
          ← 全部文章
        </Link>
        <h1 className="mt-6 font-serif text-4xl tracking-tight">
          #{tag}
        </h1>
        <p className="mt-2 text-sm text-muted">{posts.length} 篇</p>
      </header>

      <ul className="divide-y divide-line">
        {posts.map((p) => (
          <li key={p.slug} className="group py-6">
            <Link href={`/writing/${p.slug}`} className="block">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-serif text-2xl group-hover:text-accent">
                  {p.title}
                </h2>
                {p.date && (
                  <time dateTime={p.date} className="shrink-0 text-xs text-muted">
                    {fmt.format(new Date(p.date))}
                  </time>
                )}
              </div>
              {p.excerpt && (
                <p className="mt-2 max-w-2xl text-muted">{p.excerpt}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
