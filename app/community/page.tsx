import Link from "next/link";

export const metadata = { title: "Community — Reborn" };

const STATS = [
  { stat: "12,400", label: "members in the forum, active since 2019" },
  { stat: "200+", label: "public essays archived" },
  { stat: "9", label: "languages, via volunteer translations" },
];

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-16">
      <header className="mb-10">
        <h1 className="font-serif text-4xl tracking-tight">Community</h1>
        <p className="mt-3 max-w-xl text-muted">
          A forum for life-long learners, running since 2019. A place to read
          slowly, write in public, and think together across languages.
        </p>
      </header>

      <div className="mb-12 grid gap-6 sm:grid-cols-3">
        {STATS.map((c) => (
          <div key={c.label} className="rounded-sm border border-line p-5">
            <p className="font-serif text-3xl">{c.stat}</p>
            <p className="mt-1 text-sm text-muted">{c.label}</p>
          </div>
        ))}
      </div>

      <div className="rounded-sm border border-line bg-white/40 p-8 text-center">
        <h2 className="font-serif text-2xl">Join the conversation</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted">
          Membership is open. Bring a question you have been carrying and a
          passage you cannot stop re-reading.
        </p>
        <Link
          href="/login"
          className="mt-5 inline-block rounded-full bg-foreground px-5 py-2 text-sm text-background transition-opacity hover:opacity-85"
        >
          Request an invite
        </Link>
      </div>
    </div>
  );
}
