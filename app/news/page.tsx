export const metadata = { title: "News — Reborn" };

const NEWS = [
  {
    date: "May 2026",
    text: "Shipped a major rewrite of the homepage, now reborn with AI.",
  },
  {
    date: "Apr 2026",
    text: "Started building vmark.app — a tool for reading slowly at scale.",
  },
  {
    date: "Mar 2026",
    text: "Community crossed 12,000 members and 200 archived essays.",
  },
  {
    date: "Jan 2026",
    text: "Began a year-long experiment: two essays a week, no exceptions.",
  },
];

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-16">
      <header className="mb-10">
        <h1 className="font-serif text-4xl tracking-tight">News</h1>
        <p className="mt-3 max-w-xl text-muted">
          A running log of what changed and what is being built.
        </p>
      </header>

      <ol className="relative border-l border-line pl-6">
        {NEWS.map((n) => (
          <li key={n.date} className="mb-8 last:mb-0">
            <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
            <time className="text-xs uppercase tracking-widest text-muted">
              {n.date}
            </time>
            <p className="mt-1 font-serif text-lg">{n.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
