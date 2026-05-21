import { BOOKS } from "@/lib/site";

export const metadata = { title: "Books — Reborn" };

export default function BooksPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-16">
      <header className="mb-10">
        <h1 className="font-serif text-4xl tracking-tight">Books</h1>
        <p className="mt-3 max-w-xl text-muted">
          Fourteen volumes, in rotation — across Chinese and English, on AI,
          investing, language and the craft of learning.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
        {BOOKS.map((b) => (
          <div
            key={b.title}
            className="group flex flex-col rounded-sm border border-line bg-white/40 p-5 transition-colors hover:border-accent"
          >
            <div className="flex aspect-[3/4] flex-col justify-between">
              <span className="text-[10px] uppercase tracking-widest text-muted">
                {b.lang}
              </span>
              <span className="font-serif text-lg leading-snug group-hover:text-accent">
                {b.title}
              </span>
            </div>
            <p className="mt-4 border-t border-line pt-3 text-xs text-muted">
              {b.note}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
