import { SITE } from "@/lib/site";

export const metadata = { title: "About — Reborn" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-16">
      <header className="mb-10">
        <h1 className="font-serif text-4xl tracking-tight">About</h1>
      </header>

      <div className="max-w-2xl space-y-5 text-lg leading-relaxed">
        <p>
          I am a writer, teacher and investor. For more than a decade I have
          been publishing what I learn — about money, language, attention and
          the strange compounding that turns a curious afternoon into a career.
        </p>
        <p>
          This site is a commonplace book kept in public: essays twice a week,
          a shelf of books in two languages, and a community of learners who
          would rather re-read one good page than skim a hundred.
        </p>
        <p>
          The premise is simple. A life-long learner can be{" "}
          <span className="italic text-accent">reborn</span> — and with AI as a
          patient tutor, the cost of starting over has never been lower.
        </p>
      </div>

      <dl className="mt-12 grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
        <div>
          <dt className="text-xs uppercase tracking-widest text-muted">Based in</dt>
          <dd className="mt-1 font-serif text-lg">
            {SITE.locations.join(" · ")}
          </dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-widest text-muted">Writing since</dt>
          <dd className="mt-1 font-serif text-lg">2004</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-widest text-muted">Find me</dt>
          <dd className="mt-1 flex gap-4 font-serif text-lg">
            {SITE.socials.map((s) => (
              <a key={s.label} href={s.href} className="link-underline hover:text-accent">
                {s.label}
              </a>
            ))}
          </dd>
        </div>
      </dl>
    </div>
  );
}
