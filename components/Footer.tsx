import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto max-w-3xl px-5 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="font-serif text-base">
              Reborn<span className="text-accent">{SITE.handle}</span>
            </p>
            <p className="mt-1 max-w-xs text-sm text-muted">{SITE.tagline}</p>
            <p className="mt-3 text-xs text-muted">
              {SITE.locations.join(" · ")}
            </p>
          </div>

          <div className="flex gap-12 text-sm">
            <ul className="space-y-1.5">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-muted hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-1.5">
              {SITE.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="link-underline text-muted hover:text-foreground"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-1 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:justify-between">
          <span>© {SITE.year} Reborn · 受 lixiaolai.com 启发的个人主页模板</span>
          <span>{SITE.icp}</span>
        </div>
      </div>
    </footer>
  );
}
