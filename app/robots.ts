import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// output: export 下，元数据路由必须声明为静态
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
