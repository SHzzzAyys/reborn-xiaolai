import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import { getPost, getPosts } from "@/lib/posts";
import { mdxComponents } from "@/components/mdx";

// 代码高亮：明暗双主题，由 .dark 类切换（见 globals.css 的 .shiki 规则）
const mdxOptions = {
  mdxOptions: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        { theme: { light: "github-light", dark: "github-dark" }, keepBackground: false },
      ],
    ] as never,
  },
};

// 静态导出必须：穷举所有 slug，且不允许动态参数
export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "找不到文章" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/writing/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/writing/${slug}`,
      publishedTime: post.date || undefined,
      tags: post.tags,
    },
  };
}

const fmt = new Intl.DateTimeFormat("zh-CN", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-2xl px-5 pt-16">
      <Link
        href="/writing"
        className="link-underline text-sm text-muted hover:text-foreground"
      >
        ← 写作
      </Link>

      <header className="mt-6 mb-10 border-b border-line pb-8">
        <h1 className="font-serif text-4xl leading-tight tracking-tight">
          {post.title}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
          {post.date && (
            <time dateTime={post.date}>{fmt.format(new Date(post.date))}</time>
          )}
          {post.tags.map((t) => (
            <span key={t}>#{t}</span>
          ))}
        </div>
      </header>

      <div className="mdx text-[1.05rem]">
        <MDXRemote
          source={post.content}
          components={mdxComponents}
          options={mdxOptions}
        />
      </div>
    </article>
  );
}
