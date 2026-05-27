// 站点全局数据 —— 基于 SHzzz 的真实 GitHub 资料。
// 项目区在构建时从 GitHub API 自动同步（见 lib/github.ts），
// 下面的 FALLBACK_PROJECTS 仅在 API 请求失败时兜底。

export const SITE = {
  name: "SHzzz",
  username: "SHzzzAyys",
  handle: "@SHzzzAyys",
  bio: "AI 爱好者 · 生物学博士",
  tagline: "在生物学与 AI 的交叉处，做点趁手的工具。",
  blurb:
    "白天做生物学研究，晚上写代码。喜欢用 LLM / Agent 把科研与日常里的重复劳动自动化，也顺手做些小而美的应用。",
  avatar: "https://avatars.githubusercontent.com/u/217686080?v=4",
  github: "https://github.com/SHzzzAyys",
  joined: "2025",
  socials: [{ label: "GitHub", href: "https://github.com/SHzzzAyys" }],
};

// 站点的「绝对 URL 根」—— OG/canonical/sitemap/RSS 都要用，必须包含 basePath。
// 绑自定义域名后只需把环境变量 NEXT_PUBLIC_SITE_URL 改成新域名（同时去掉 next.config 的 basePath）。
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://shzzzayys.github.io/shzzz-homepage";

export const NAV = [
  { label: "项目", href: "/#projects" },
  { label: "写作", href: "/writing" },
  { label: "Now", href: "/now" },
  { label: "关于", href: "/about" },
];

// 只在页脚出现的次要链接（不挤主导航）
export const FOOTER_LINKS = [{ label: "Uses", href: "/uses" }];

// GitHub 语言配色（与 GitHub 一致）；未列出的语言用灰色兜底。
export const LANG_COLOR: Record<string, string> = {
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  Shell: "#89e051",
  CSS: "#563d7c",
  Go: "#00ADD8",
  Rust: "#dea584",
  Jupyter: "#DA5B0B",
  "Jupyter Notebook": "#DA5B0B",
};

export type Project = {
  name: string;
  lang: string;
  desc: string;
  href: string;
  category: string;
  stars?: number;
  updated?: string;
  pinned?: boolean;
  homepage?: string; // 有在线 demo 时（GitHub repo 的 homepage 字段）
  readmeExcerpt?: string; // 仅精选项目：从 README 抽的首段摘要
};

// 精选置顶：这里列的仓库会出现在「精选」区，按本数组顺序排在最前。
// 留空则全部走自动排序（按最近 push 倒序）。
export const PINNED: string[] = ["frictionlog", "inversion", "para-prot-signal"];

// 可选：覆盖个别精选仓库的 README 摘要（README 首段不适合直接展示时）。
export const README_EXCERPT_OVERRIDE: Record<string, string> = {};

// 分类顺序。未被 CATEGORY_OVERRIDE 命中的仓库归入最后的「更多」。
export const CATEGORIES = [
  "AI / Agent 工具",
  "科研 / 生信",
  "应用 / 实验",
  "更多",
] as const;

export const DEFAULT_CATEGORY = "更多";

// 仓库名 → 分类。新仓库不必在此登记，会自动落入「更多」，
// 想让它进特定分组时再加一行即可。
export const CATEGORY_OVERRIDE: Record<string, string> = {
  frictionlog: "AI / Agent 工具",
  "code-review-agent": "AI / Agent 工具",
  "task-recorder": "AI / Agent 工具",
  "toxo-phd-skills": "科研 / 生信",
  "para-prot-signal": "科研 / 生信",
  "journal-query": "科研 / 生信",
  "culture-radar": "科研 / 生信",
  inversion: "应用 / 实验",
  hondana: "应用 / 实验",
  "zhinan-test": "应用 / 实验",
  "shzzz-homepage": "应用 / 实验",
  pushgate: "应用 / 实验",
  "seed-engineering": "应用 / 实验",
};

// 可选：为个别仓库提供更顺口的中文描述，优先于 GitHub 上的原始描述。
// 留空即直接使用 GitHub 仓库描述（这才是「自动同步」的默认行为）。
export const DESC_OVERRIDE: Record<string, string> = {
  frictionlog: "FrictionLog — Claude Code 旁观工具，把 AI 纠错瞬间转化为 AGENTS.md 规则，v0.1.1 已发布 PyPI",
  "para-prot-signal": "寄生虫文献日报 — 每日自动抓取 PubMed 最新论文，DeepSeek 深度摘要，支持 Toxoplasma/Plasmodium",
};

// API 失败时的兜底列表（与上次手写内容一致）。
export const FALLBACK_PROJECTS: Project[] = [
  { name: "frictionlog", lang: "Python", desc: "FrictionLog — Claude Code 旁观工具，把 AI 纠错瞬间转化为 AGENTS.md 规则，v0.1.1 已发布 PyPI", href: "https://github.com/SHzzzAyys/frictionlog", category: "AI / Agent 工具" },
  { name: "code-review-agent", lang: "Python", desc: "基于 Claude Agent SDK 的自动代码审查 Agent。", href: "https://github.com/SHzzzAyys/code-review-agent", category: "AI / Agent 工具" },
  { name: "task-recorder", lang: "Python", desc: "终端任务记录器，自动检测 Claude Code 会话。", href: "https://github.com/SHzzzAyys/task-recorder", category: "AI / Agent 工具" },
  { name: "toxo-phd-skills", lang: "Shell", desc: "弓形虫博士论文「科研完整性」Claude Code 插件。", href: "https://github.com/SHzzzAyys/toxo-phd-skills", category: "科研 / 生信" },
  { name: "para-prot-signal", lang: "JavaScript", desc: "寄生虫文献日报 — 每日自动抓取 PubMed 最新论文，DeepSeek 深度摘要，支持 Toxoplasma/Plasmodium", href: "https://github.com/SHzzzAyys/para-prot-signal", category: "科研 / 生信" },
  { name: "journal-query", lang: "HTML", desc: "期刊中科院分区 / JCR 影响因子查询工具：演示数据零配置可用，配 easyScholar 本地代理可查真实数据；支持刊名模糊联想、批量查询、收藏分组、对比与导出。", href: "https://github.com/SHzzzAyys/journal-query", category: "科研 / 生信", homepage: "https://shzzzayys.github.io/journal-query/" },
  { name: "inversion", lang: "JavaScript", desc: "在你失败之前，先想象失败 —— AI 驱动的决策「事前验尸」桌面应用。", href: "https://github.com/SHzzzAyys/inversion", category: "应用 / 实验" },
  { name: "hondana", lang: "HTML", desc: "本棚 —— 个人 EPUB 书架与在线阅读器，日式极简风。", href: "https://github.com/SHzzzAyys/hondana", category: "应用 / 实验" },
  { name: "zhinan-test", lang: "HTML", desc: "直男翻译官 · 情侣测评 —— 一个轻松的互动小测验。", href: "https://github.com/SHzzzAyys/zhinan-test", category: "应用 / 实验" },
  { name: "shzzz-homepage", lang: "TypeScript", desc: "这个站点本身 —— Next.js + Tailwind 的个人主页，静态部署到 GitHub Pages。", href: "https://github.com/SHzzzAyys/shzzz-homepage", category: "应用 / 实验" },
  { name: "culture-radar", lang: "HTML", desc: "CultureRadar — 追踪美股文化拐点信号的研究看板，含 SaaS + 半导体 20 家公司", href: "https://github.com/SHzzzAyys/culture-radar", category: "科研 / 生信" },
  { name: "pushgate", lang: "JavaScript", desc: "PushGate — 自托管多渠道消息推送中转，支持 Bark / 钉钉 / 飞书 / 邮件 fan-out", href: "https://github.com/SHzzzAyys/pushgate", category: "应用 / 实验" },
  { name: "seed-engineering", lang: "TypeScript", desc: "种子轮工程化 — AI 辅助种子轮 DataRoom 系统，把融资从手艺活变成工程活", href: "https://github.com/SHzzzAyys/seed-engineering", category: "应用 / 实验" },
];
