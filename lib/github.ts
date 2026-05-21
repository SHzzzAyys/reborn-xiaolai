import {
  SITE,
  CATEGORY_OVERRIDE,
  DESC_OVERRIDE,
  DEFAULT_CATEGORY,
  FALLBACK_PROJECTS,
  PINNED,
  README_EXCERPT_OVERRIDE,
  type Project,
} from "./site";

type GitHubRepo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  fork: boolean;
  archived: boolean;
  stargazers_count: number;
  pushed_at: string;
  homepage: string | null;
};

const GH_HEADERS = (token?: string) => ({
  Accept: "application/vnd.github+json",
  "User-Agent": "shzzz-homepage",
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
});

// 排序：PINNED 内的按声明顺序排最前并打标 pinned，其余按 updated（pushed_at）倒序。
function orderProjects(projects: Project[]): Project[] {
  const pinnedSet = new Set(PINNED);
  const pinnedItems = PINNED.map((name) => projects.find((p) => p.name === name))
    .filter((p): p is Project => Boolean(p))
    .map((p) => ({ ...p, pinned: true }));
  const restItems = projects
    .filter((p) => !pinnedSet.has(p.name))
    .sort((a, b) => (b.updated ?? "").localeCompare(a.updated ?? ""));
  return [...pinnedItems, ...restItems];
}

// 仅对精选仓库抓 README 首段做摘要（≤PINNED 条，远低于限流）。失败返回 undefined。
async function fetchReadmeExcerpt(
  name: string,
  token?: string
): Promise<string | undefined> {
  if (README_EXCERPT_OVERRIDE[name]) return README_EXCERPT_OVERRIDE[name];
  try {
    const res = await fetch(
      `https://api.github.com/repos/${SITE.username}/${name}/readme`,
      {
        headers: { ...GH_HEADERS(token), Accept: "application/vnd.github.raw" },
        cache: "force-cache",
      }
    );
    if (!res.ok) return undefined;
    const raw = await res.text();
    const firstPara = raw
      .split("\n")
      .map((l) => l.trim())
      // 跳过空行、标题、徽章/图片行、HTML 注释、分隔线、引用块标记
      .filter(
        (l) =>
          l &&
          !l.startsWith("#") &&
          !l.startsWith("![") &&
          !l.startsWith("<") &&
          !l.startsWith("---") &&
          !l.startsWith(">") &&
          !/^\[!\[/.test(l)
      )[0];
    if (!firstPara) return undefined;
    // 去掉行内 markdown 链接/强调标记，截断
    const clean = firstPara
      .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
      .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
      .replace(/[*_`]/g, "")
      .trim();
    return clean.length > 180 ? clean.slice(0, 178) + "…" : clean || undefined;
  } catch {
    return undefined;
  }
}

// 构建时（next build）运行：从 GitHub API 拉取公开仓库，过滤掉 fork / 归档，
// 映射成 Project，再排序（精选置顶）。任何失败回退到 FALLBACK_PROJECTS。
export async function getProjects(): Promise<Project[]> {
  const token = process.env.GITHUB_TOKEN; // CI 中由 Actions 注入，本地可无
  try {
    const res = await fetch(
      `https://api.github.com/users/${SITE.username}/repos?per_page=100&sort=pushed`,
      {
        headers: GH_HEADERS(token),
        // 静态导出要求构建时固化；CI 为全新环境故每次都是最新数据。
        // 本地若需刷新，构建前清 .next 缓存即可。
        cache: "force-cache",
      }
    );
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);

    const repos = (await res.json()) as GitHubRepo[];
    const projects = repos
      .filter((r) => !r.fork && !r.archived)
      .map<Project>((r) => ({
        name: r.name,
        lang: r.language ?? "—",
        desc: DESC_OVERRIDE[r.name] ?? r.description?.trim() ?? "（暂无描述）",
        href: r.html_url,
        category: CATEGORY_OVERRIDE[r.name] ?? DEFAULT_CATEGORY,
        stars: r.stargazers_count,
        updated: r.pushed_at,
        homepage: r.homepage?.trim() || undefined,
      }));

    if (projects.length === 0) return orderProjects(FALLBACK_PROJECTS);

    const ordered = orderProjects(projects);
    // 给精选项目补 README 摘要
    await Promise.all(
      ordered
        .filter((p) => p.pinned)
        .map(async (p) => {
          p.readmeExcerpt = await fetchReadmeExcerpt(p.name, token);
        })
    );
    return ordered;
  } catch (err) {
    console.warn(
      "[github] falling back to static project list:",
      err instanceof Error ? err.message : err
    );
    return orderProjects(FALLBACK_PROJECTS);
  }
}
