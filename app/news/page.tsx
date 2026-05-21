export const metadata = { title: "动态 — Reborn" };

const NEWS = [
  {
    date: "2026年5月",
    text: "完成首页的一次大改版，借 AI 重生。",
  },
  {
    date: "2026年4月",
    text: "开始开发 vmark.app —— 一个让慢读规模化的工具。",
  },
  {
    date: "2026年3月",
    text: "社区成员突破 12,000，归档随笔达 200 篇。",
  },
  {
    date: "2026年1月",
    text: "开启一项为期一年的实验：每周两篇，绝不例外。",
  },
];

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-16">
      <header className="mb-10">
        <h1 className="font-serif text-4xl tracking-tight">动态</h1>
        <p className="mt-3 max-w-xl text-muted">
          一份关于「改了什么、在做什么」的流水记录。
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
