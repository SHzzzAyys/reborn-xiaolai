import { BOOKS } from "@/lib/site";
import BookCover from "@/components/BookCover";

export const metadata = { title: "著作 — Reborn" };

export default function BooksPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-16">
      <header className="mb-10">
        <h1 className="font-serif text-4xl tracking-tight">著作</h1>
        <p className="mt-3 max-w-xl text-muted">
          十四卷，轮替展示——横跨中英文，涉及人工智能、投资、语言与学习的手艺。
        </p>
      </header>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
        {BOOKS.map((b) => (
          <div key={b.title} className="group">
            <BookCover book={b} className="transition-transform group-hover:-translate-y-1" />
            <p className="mt-3 text-xs text-muted">{b.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
