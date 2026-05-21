"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  // sync initial state from the class set by the no-flash script
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    const root = document.documentElement;
    root.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      onClick={toggle}
      aria-label="切换深浅色"
      title="切换深浅色"
      className="flex h-8 w-8 items-center justify-center rounded-full border border-foreground/15 text-sm transition-colors hover:bg-foreground hover:text-background"
    >
      {dark ? "☀" : "☾"}
    </button>
  );
}
