import {
  SITE,
  CATEGORY_OVERRIDE,
  DESC_OVERRIDE,
  DEFAULT_CATEGORY,
  FALLBACK_PROJECTS,
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
};

// 构建时（next build）运行：从 GitHub API 拉取公开仓库，过滤掉 fork / 归档，
// 映射成 Project。任何失败都回退到 FALLBACK_PROJECTS，保证构建不中断。
export async function getProjects(): Promise<Project[]> {
  const token = process.env.GITHUB_TOKEN; // CI 中由 Actions 注入，本地可无
  try {
    const res = await fetch(
      `https://api.github.com/users/${SITE.username}/repos?per_page=100&sort=pushed`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "shzzz-homepage",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
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
        desc:
          DESC_OVERRIDE[r.name] ?? r.description?.trim() ?? "（暂无描述）",
        href: r.html_url,
        category: CATEGORY_OVERRIDE[r.name] ?? DEFAULT_CATEGORY,
        stars: r.stargazers_count,
        updated: r.pushed_at,
      }));

    return projects.length > 0 ? projects : FALLBACK_PROJECTS;
  } catch (err) {
    console.warn(
      "[github] falling back to static project list:",
      err instanceof Error ? err.message : err
    );
    return FALLBACK_PROJECTS;
  }
}
