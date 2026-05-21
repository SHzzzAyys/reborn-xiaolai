import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getPosts } from "@/lib/posts";

// output: export 下，元数据路由必须声明为静态
export const dynamic = "force-static";

// 静态导出：构建时生成 out/sitemap.xml。新增静态路由时在下方追加。
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/writing/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/about/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const posts: MetadataRoute.Sitemap = getPosts().map((p) => ({
    url: `${SITE_URL}/writing/${p.slug}/`,
    lastModified: p.date ? new Date(p.date) : now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...posts];
}
