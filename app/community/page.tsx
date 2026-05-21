import Link from "next/link";

export const metadata = { title: "社区 — Reborn" };

const STATS = [
  { stat: "12,400", label: "社区成员，自 2019 年起活跃" },
  { stat: "200+", label: "公开归档的随笔" },
  { stat: "9", label: "种语言，由志愿者翻译" },
];

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-16">
      <header className="mb-10">
        <h1 className="font-serif text-4xl tracking-tight">社区</h1>
        <p className="mt-3 max-w-xl text-muted">
          一个面向终身学习者的社区，自 2019 年运转至今。在这里慢读、公开写作，跨越语言一起思考。
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

      <div className="rounded-sm border border-line bg-card p-8 text-center">
        <h2 className="font-serif text-2xl">加入对话</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted">
          社区开放加入。带上一个你一直在琢磨的问题，和一段你反复重读、停不下来的文字。
        </p>
        <Link
          href="/login"
          className="mt-5 inline-block rounded-full bg-foreground px-5 py-2 text-sm text-background transition-opacity hover:opacity-85"
        >
          申请邀请
        </Link>
      </div>
    </div>
  );
}
