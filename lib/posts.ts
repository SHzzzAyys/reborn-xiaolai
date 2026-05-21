import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

// 注意：本模块用了 node:fs，只能在 Server Component / 构建期调用，
// 不要从任何 Client Component 直接 import。

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO 字符串
  excerpt: string;
  tags: string[];
  draft: boolean;
  content: string; // 去掉 front-matter 的 MDX 正文
  readingMinutes: number; // 估算阅读时长（分钟）
};

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

// 中英文混排的阅读时长估算：中文按 ~350 字/分，英文单词按 ~220 词/分，取和。
function estimateReadingMinutes(text: string): number {
  const cjk = (text.match(/[一-鿿]/g) || []).length;
  const words = (text.match(/[A-Za-z0-9]+/g) || []).length;
  const minutes = cjk / 350 + words / 220;
  return Math.max(1, Math.round(minutes));
}

function readAll(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: String(data.title ?? slug),
        // gray-matter 会把未加引号的 YAML 日期解析成 Date，统一转 ISO
        date: data.date ? new Date(data.date).toISOString() : "",
        excerpt: String(data.excerpt ?? ""),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        draft: Boolean(data.draft),
        content,
        readingMinutes: estimateReadingMinutes(content),
      };
    });
}

// 生产构建过滤草稿；dev 下保留以便预览。按日期倒序。
export function getPosts(): Post[] {
  const showDraft = process.env.NODE_ENV !== "production";
  return readAll()
    .filter((p) => showDraft || !p.draft)
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug);
}

// 所有标签（去重，按文章数倒序）
export function getAllTags(): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const p of getPosts()) {
    for (const t of p.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

export function getPostsByTag(tag: string): Post[] {
  return getPosts().filter((p) => p.tags.includes(tag));
}
