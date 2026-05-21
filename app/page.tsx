import Link from "next/link";
import { ARTICLES, BOOKS, SITE } from "@/lib/site";
import BookCover from "@/components/BookCover";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-5">
      {/* Hero with author avatar */}
      <section className="pt-16 pb-14 sm:pt-24">
        <div className="mb-8 flex items-center gap-4">
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full font-serif text-2xl text-white shadow-sm ring-1 ring-black/10"
            style={{
              background:
                "linear-gradient(135deg, var(--accent) 0%, #5a1c25 100%)",
            }}
            aria-hidden
          >
            笑
          </div>
          <div>
            <p className="font-serif text-lg">
              Reborn<span className="text-accent">{SITE.handle}</span>
            </p>
            <p className="text-sm text-muted">
              {SITE.locations.join(" · ")} · {SITE.date}
            </p>
          </div>
        </div>

        <h1 className="font-serif text-4xl leading-[1.15] tracking-tight sm:text-6xl">
          终身学习者，借{" "}
          <span className="italic text-accent">AI</span> 重生。
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          作家、老师、投资人。十余年来关于学习、金钱、语言与注意力的笔记、书与课程。
        </p>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <span>2004 年出版第一本书。</span>
          <span>自 2018 年起每周约 2 篇。</span>
          <span className="text-foreground">今年已发布 29 篇。</span>
        </div>
      </section>

      {/* Articles */}
      <section className="border-t border-line py-12">
        <div className="mb-7 flex items-baseline justify-between">
          <h2 className="font-serif text-2xl">文章</h2>
          <Link
            href="/articles"
            className="link-underline text-sm text-muted hover:text-foreground"
          >
            公开记录的读书笔记本 →
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
          <h2 className="font-serif text-2xl">著作</h2>
          <Link
            href="/books"
            className="link-underline text-sm text-muted hover:text-foreground"
          >
            14 卷，轮替展示 →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
          {BOOKS.slice(0, 6).map((b) => (
            <Link
              key={b.title}
              href="/books"
              className="block transition-transform hover:-translate-y-1"
            >
              <BookCover book={b} />
            </Link>
          ))}
        </div>
      </section>

      {/* Community */}
      <section className="border-t border-line py-12">
        <h2 className="mb-7 font-serif text-2xl">社区</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { stat: "12,400", label: "社区成员，自 2019 年起活跃" },
            { stat: "200+", label: "公开归档的随笔" },
            { stat: "9", label: "种语言，由志愿者翻译" },
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
          加入社区 →
        </Link>
      </section>

      {/* Now / status */}
      <section className="border-t border-line py-12">
        <h2 className="mb-3 font-serif text-2xl">近况</h2>
        <p className="max-w-xl text-muted">
          正在开发 <span className="text-foreground">vmark.app</span>，
          并重写这个站点。在{SITE.locations[0]}慢读、公开写作、出声学习。
        </p>
      </section>
    </div>
  );
}
