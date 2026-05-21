import Link from "next/link";
import { ARTICLES, BOOKS, SITE } from "@/lib/site";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-5">
      {/* Hero */}
      <section className="pt-16 pb-14 sm:pt-24">
        <h1 className="font-serif text-4xl leading-[1.1] tracking-tight sm:text-6xl">
          A life-long learner,{" "}
          <span className="italic text-accent">reborn</span> with AI.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          Writer, teacher, investor. Notes, books and courses from a decade
          spent on learning, money, language and attention.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <span>First book published 2004.</span>
          <span>~2 articles weekly since 2018.</span>
          <span className="text-foreground">29 articles shipped this year.</span>
        </div>
      </section>

      {/* Articles */}
      <section className="border-t border-line py-12">
        <div className="mb-7 flex items-baseline justify-between">
          <h2 className="font-serif text-2xl">Articles</h2>
          <Link
            href="/articles"
            className="link-underline text-sm text-muted hover:text-foreground"
          >
            A commonplace book, kept in public →
          </Link>
        </div>
        <ul className="divide-y divide-line">
          {ARTICLES.map((a) => (
            <li key={a.title} className="group py-5">
              <Link href="/articles" className="block">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-xl group-hover:text-accent">
                    {a.title}
                  </h3>
                  <time className="shrink-0 text-xs text-muted">{a.date}</time>
                </div>
                <p className="mt-1.5 text-sm text-muted">{a.blurb}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Books */}
      <section className="border-t border-line py-12">
        <div className="mb-7 flex items-baseline justify-between">
          <h2 className="font-serif text-2xl">Books</h2>
          <Link
            href="/books"
            className="link-underline text-sm text-muted hover:text-foreground"
          >
            14 volumes, in rotation →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
          {BOOKS.slice(0, 6).map((b) => (
            <Link
              key={b.title}
              href="/books"
              className="group flex aspect-[3/4] flex-col justify-between rounded-sm border border-line bg-white/40 p-4 transition-colors hover:border-accent"
            >
              <span className="text-[10px] uppercase tracking-widest text-muted">
                {b.lang}
              </span>
              <span className="font-serif text-base leading-snug group-hover:text-accent">
                {b.title}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Community */}
      <section className="border-t border-line py-12">
        <h2 className="mb-7 font-serif text-2xl">Community</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { stat: "12,400", label: "members in the forum, active since 2019" },
            { stat: "200+", label: "public essays archived" },
            { stat: "9", label: "languages, via volunteer translations" },
          ].map((c) => (
            <div key={c.label} className="rounded-sm border border-line p-5">
              <p className="font-serif text-3xl">{c.stat}</p>
              <p className="mt-1 text-sm text-muted">{c.label}</p>
            </div>
          ))}
        </div>
        <Link
          href="/community"
          className="link-underline mt-6 inline-block text-sm text-muted hover:text-foreground"
        >
          Join the community →
        </Link>
      </section>

      {/* Now / status */}
      <section className="border-t border-line py-12">
        <h2 className="mb-3 font-serif text-2xl">Now</h2>
        <p className="max-w-xl text-muted">
          Currently building <span className="text-foreground">vmark.app</span>{" "}
          and rewriting this site. Reading slowly, writing in public, and
          learning out loud from {SITE.locations[0]}.
        </p>
      </section>
    </div>
  );
}
