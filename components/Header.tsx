"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-serif text-lg font-medium tracking-tight">
            Reborn<span className="text-accent">{SITE.handle}</span>
          </span>
          <span className="hidden text-xs text-muted sm:inline">
            — {SITE.date}
          </span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-underline text-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/login"
            className="rounded-full border border-foreground/15 px-3.5 py-1.5 text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Sign in
          </Link>
        </nav>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="text-xl leading-none">{open ? "×" : "≡"}</span>
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <nav className="border-t border-line bg-background md:hidden">
          <ul className="mx-auto max-w-3xl px-5 py-2">
            {[...NAV, { label: "Sign in", href: "/login" }].map((item, i) => (
              <li key={item.href} className="border-b border-line/60 last:border-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-3 py-3 text-base"
                >
                  <span className="font-serif text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
