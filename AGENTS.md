<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# 项目运维手册（给后续 Claude）

SHzzz（GitHub: SHzzzAyys，AI 爱好者 + 生物学博士）的个人主页。本节是交接文档：架构、日常操作、踩过的坑。读完即可接手。

## 一句话架构

Next.js 16 + React 19 + Tailwind v4，**静态导出**（`output: 'export'`），项目列表**构建时从 GitHub API 自动同步**，博客是本地 `.mdx`，部署到 **Cloudflare Pages**（`https://shzzz.pages.dev`），`git push` → GitHub Actions 自动构建部署。

## 关键文件

| 文件 | 作用 |
|---|---|
| `lib/site.ts` | 站点全局配置中心：`SITE`、`SITE_URL`、`NAV`、`FOOTER_LINKS`、`PINNED`、分类映射、`FALLBACK_PROJECTS` |
| `lib/github.ts` | `getProjects()` 构建时拉 GitHub 仓库、过滤 fork/archived、排序、抓精选 README 摘要 |
| `lib/posts.ts` | `getPosts()/getPost()` 读 `content/posts/*.mdx`（用 `node:fs`，**禁止被 Client Component import**） |
| `app/page.tsx` | 首页：hero + 精选区 + 分类项目 + 关于预览 |
| `app/writing/[slug]/page.tsx` | 文章页（SSG，`next-mdx-remote/rsc` 渲染） |
| `app/feed.xml/route.ts` | RSS |
| `app/sitemap.ts` `app/robots.ts` | SEO 路由（都需 `dynamic = "force-static"`） |
| `components/mdx.tsx` | MDX 正文 → 站点排版的组件映射 |
| `.github/workflows/deploy.yml` | CI：构建 + 部署到 Cloudflare Pages（含每日 cron 重建） |
| `new-post.ps1` | 交互式脚本，生成新文章草稿 |

## 项目列表怎么自动同步

`getProjects()` 在构建时拉 `users/SHzzzAyys/repos`，过滤掉 fork/归档，映射成卡片。**新建仓库会自动出现**，默认归入「更多」分组。要调整：
- 归特定分组 → 在 `lib/site.ts` 的 `CATEGORY_OVERRIDE` 加一行 `仓库名: "分组名"`。
- 置顶到「精选」区 → 加进 `PINNED` 数组（按数组顺序排）。
- 覆盖某仓库描述 → `DESC_OVERRIDE`（默认用 GitHub 上的真实描述，留空即可）。
- API 失败时回退 `FALLBACK_PROJECTS`（手写列表，记得与线上保持大致一致）。

## 怎么发一篇博客

1. `content/posts/` 下新建 `YYYY-MM-DD-slug.mdx`（或跑 `new-post.ps1`）。文件名去掉扩展名即 URL：`/writing/<slug>/`。
2. 开头 front-matter（**date 必须加引号**，否则 YAML 自动转 Date）：
   ```
   ---
   title: "标题"
   date: "2026-05-21"
   excerpt: "列表里的一句话摘要"
   tags: [标签1, 标签2]
   draft: false   # true=只在 dev 可见，不发布
   ---
   ```
3. 正文写 Markdown。本地预览：`npm run dev`（dev 显示草稿）。
4. 发布：`draft: false` → `git add content/posts/ && git commit && git push`。约 1 分钟自动上线，同时进 `/writing`、`/feed.xml`、`sitemap.xml`。

## 部署 & 构建

- **CI 自动部署**：push 到 `main` → `deploy.yml` 用 `NEXT_PUBLIC_SITE_URL=https://shzzz.pages.dev` 构建（**不设** `GITHUB_PAGES`，即根路径无 basePath），再用 `cloudflare/wrangler-action` 部署 `out/`。所需 secrets（`CLOUDFLARE_ACCOUNT_ID` / `CLOUDFLARE_API_TOKEN`）已配在仓库。
- **本地验证构建**：`rm -rf .next out && NEXT_PUBLIC_SITE_URL=https://shzzz.pages.dev npm run build`，看 `out/` 产物。
- **本地手动部署到 Cloudflare**（一般不用，CI 已自动）：`npx wrangler pages deploy out --project-name shzzz --branch main --commit-dirty=true`（机器上 wrangler 已登录，token 自动刷新）。
- `next.config.ts` 仍保留 basePath 逻辑（只在 `GITHUB_PAGES=true` 时生效），现在没用到但留着无害。

## ⚠️ 踩过的坑（别重蹈）

1. **fetch 缓存**：`getProjects()` 用 `cache: "force-cache"`。`output:'export'` 下**不能用 `no-store`**（会让路由变动态→构建报错→被 catch 吞掉走兜底，假装成功）。本地若数据不更新，构建前 `rm -rf .next`。判断走了 API 还是兜底：grep 英文描述（如 `Auto code review agent powered by Claude Agent SDK`），只在 API 数据里有。
2. **元数据路由必须静态**：`sitemap.ts`/`robots.ts`/`feed.xml/route.ts` 都要 `export const dynamic = "force-static"`，否则静态导出报错。
3. **OG 图**：别用 `next/og` 文件约定的 `opengraph-image.tsx`——它产出**无扩展名**文件，静态托管会当 `octet-stream`，社交抓取器拒绝。现用固化的 `public/og.png`（带扩展名），metadata 里显式 `openGraph.images:['/og.png']`。
4. **绝对 URL 别用 `new URL(absPath, base)`**：当 base 含路径前缀时绝对路径会替换掉它。feed/sitemap 里用字符串拼接 `${SITE_URL}/...`。
5. **动态路由**：`app/writing/[slug]/page.tsx` 必须 `export const dynamicParams = false`；Next 16 的 `params` 是 Promise，要 `await params`。
6. **`lib/posts.ts` 用了 `node:fs`**：只能在 Server Component / 构建期用，别从 Client Component import。

## 不要做

- 不加 Google Analytics / 阅读量计数 / 评论系统 / Newsletter / CMS — 这是个静态个人站，git 里的文件就是 CMS，RSS 足够。
- 不为了动画引入 Framer Motion 等大型库 — 现有 CSS 过渡够用。
- 一次提交只做一件事，别把多个功能塞进一个 commit。
