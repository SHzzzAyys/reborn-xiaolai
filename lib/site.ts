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

export const NAV = [
  { label: "项目", href: "/#projects" },
  { label: "关于", href: "/about" },
];

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
};

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
  inversion: "应用 / 实验",
  hondana: "应用 / 实验",
  "zhinan-test": "应用 / 实验",
  "shzzz-homepage": "应用 / 实验",
};

// 可选：为个别仓库提供更顺口的中文描述，优先于 GitHub 上的原始描述。
// 留空即直接使用 GitHub 仓库描述（这才是「自动同步」的默认行为）。
export const DESC_OVERRIDE: Record<string, string> = {};

// API 失败时的兜底列表（与上次手写内容一致）。
export const FALLBACK_PROJECTS: Project[] = [
  { name: "frictionlog", lang: "Python", desc: "你的 AGENTS.md 应当从你的「伤疤」里长出来，而不是套模板。本地优先的 Claude Code 摩擦记录器。", href: "https://github.com/SHzzzAyys/frictionlog", category: "AI / Agent 工具" },
  { name: "code-review-agent", lang: "Python", desc: "基于 Claude Agent SDK 的自动代码审查 Agent。", href: "https://github.com/SHzzzAyys/code-review-agent", category: "AI / Agent 工具" },
  { name: "task-recorder", lang: "Python", desc: "终端任务记录器，自动检测 Claude Code 会话。", href: "https://github.com/SHzzzAyys/task-recorder", category: "AI / Agent 工具" },
  { name: "toxo-phd-skills", lang: "Shell", desc: "弓形虫博士论文「科研完整性」Claude Code 插件。", href: "https://github.com/SHzzzAyys/toxo-phd-skills", category: "科研 / 生信" },
  { name: "para-prot-signal", lang: "JavaScript", desc: "寄生虫科研文献日报：每日自动抓取 PubMed 上弓形虫 / 疟原虫相关最新论文，生成可浏览、可收藏、可导出的静态页面。", href: "https://github.com/SHzzzAyys/para-prot-signal", category: "科研 / 生信" },
  { name: "inversion", lang: "JavaScript", desc: "在你失败之前，先想象失败 —— AI 驱动的决策「事前验尸」桌面应用。", href: "https://github.com/SHzzzAyys/inversion", category: "应用 / 实验" },
  { name: "hondana", lang: "HTML", desc: "本棚 —— 个人 EPUB 书架与在线阅读器，日式极简风。", href: "https://github.com/SHzzzAyys/hondana", category: "应用 / 实验" },
  { name: "zhinan-test", lang: "HTML", desc: "直男翻译官 · 情侣测评 —— 一个轻松的互动小测验。", href: "https://github.com/SHzzzAyys/zhinan-test", category: "应用 / 实验" },
  { name: "shzzz-homepage", lang: "TypeScript", desc: "这个站点本身 —— Next.js + Tailwind 的个人主页，静态部署到 GitHub Pages。", href: "https://github.com/SHzzzAyys/shzzz-homepage", category: "应用 / 实验" },
];
