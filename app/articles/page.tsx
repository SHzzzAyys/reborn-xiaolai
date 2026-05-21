import Link from "next/link";
import { ARTICLES } from "@/lib/site";

export const metadata = { title: "Articles — Reborn" };

export default function ArticlesPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-16">
      <header className="mb-10">
        <h1 className="font-serif text-4xl tracking-tight">Articles</h1>
        <p className="mt-3 max-w-xl text-muted">
          A commonplace book, kept in public. Roughly two pieces a week since
          2018 — on learning, money, language and attention.
        </p>
      </header>

      <ul className="divide-y divide-line">
        {ARTICLES.map((a) => (
          <li key={a.title} className="group py-6">
            <Link href="#" className="block">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-serif text-2xl group-hover:text-accent">
                  {a.title}
                </h2>
                <time className="shrink-0 text-xs text-muted">{a.date}</time>
              </div>
              <p className="mt-2 max-w-2xl text-muted">{a.blurb}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
