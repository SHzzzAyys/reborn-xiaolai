import { SITE } from "@/lib/site";
import { renderOG } from "./opengraph-image";

// Twitter 卡片复用 OG 图的渲染，但各自声明路由段配置（Turbopack 不允许从 metadata 路由 re-export 段配置）。
export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${SITE.name} — ${SITE.bio}`;

export default function TwitterImage() {
  return renderOG();
}
