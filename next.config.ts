import type { NextConfig } from "next";

// When building for GitHub Pages, the site is served from
// https://<user>.github.io/<repo>/ so we need a basePath/assetPrefix.
// The deploy workflow sets GITHUB_PAGES=true; local `next dev` keeps them empty.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = "reborn-xiaolai";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}/` : "",
};

export default nextConfig;
