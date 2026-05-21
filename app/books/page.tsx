import { BOOKS } from "@/lib/site";
import BookCover from "@/components/BookCover";

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
          <div key={b.title} className="group">
            <BookCover book={b} className="transition-transform group-hover:-translate-y-1" />
            <p className="mt-3 text-xs text-muted">{b.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
