import { getPosts } from "@/lib/posts";
import { SITE, SITE_URL } from "@/lib/site";

// 静态导出：构建时生成 out/feed.xml
export const dynamic = "force-static";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const posts = getPosts();
  const items = posts
    .map((p) => {
      // 注意用字符串拼接而非 new URL()：后者的绝对路径会替换掉 SITE_URL 里的 basePath
      const link = `${SITE_URL}/writing/${p.slug}/`;
      const pubDate = p.date ? new Date(p.date).toUTCString() : "";
      return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      ${pubDate ? `<pubDate>${pubDate}</pubDate>` : ""}
      <description>${escapeXml(p.excerpt)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE.name)} 的写作</title>
    <link>${SITE_URL}/writing/</link>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <description>${escapeXml(SITE.tagline)}</description>
    <language>zh-CN</language>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
