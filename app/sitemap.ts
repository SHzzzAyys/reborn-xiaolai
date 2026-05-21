import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// output: export 下，元数据路由必须声明为静态
export const dynamic = "force-static";

// 静态导出：构建时生成 out/sitemap.xml。
// 新增路由时在下方追加一条；M3 接入博客后会自动循环 getPosts() 把文章 URL 加进来。
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
