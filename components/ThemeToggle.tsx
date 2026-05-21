"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

const ORDER: Theme[] = ["light", "dark", "system"];
const ICON: Record<Theme, string> = { light: "☀", dark: "☾", system: "◐" };
const LABEL: Record<Theme, string> = {
  light: "浅色",
  dark: "深色",
  system: "跟随系统",
};

function apply(theme: Theme) {
  const sys = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const dark = theme === "dark" || (theme === "system" && sys);
  document.documentElement.classList.toggle("dark", dark);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);

  // 挂载后读取已保存的偏好（避免 SSR/hydration 不一致）
  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme) || "system";
    setTheme(saved);
    setMounted(true);
  }, []);

  // system 模式下，实时跟随系统深浅色变化
  useEffect(() => {
    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => apply("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [theme]);

  function cycle() {
    const next = ORDER[(ORDER.indexOf(theme) + 1) % ORDER.length];
    setTheme(next);
    apply(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      onClick={cycle}
      aria-label={`主题：${LABEL[theme]}（点击切换）`}
      title={`主题：${LABEL[theme]}`}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-foreground/15 text-sm transition-colors hover:bg-foreground hover:text-background"
    >
      {mounted ? ICON[theme] : "◐"}
    </button>
  );
}
