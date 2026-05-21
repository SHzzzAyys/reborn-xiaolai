import type { Book } from "@/lib/site";

// Deterministic hue from the title so each cover keeps a stable, distinct color.
function hueFromTitle(title: string): number {
  let h = 0;
  for (let i = 0; i < title.length; i++) {
    h = (h * 31 + title.charCodeAt(i)) % 360;
  }
  return h;
}

export default function BookCover({
  book,
  className = "",
}: {
  book: Book;
  className?: string;
}) {
  const hue = hueFromTitle(book.title);
  // two-stop diagonal gradient + a darker "spine" on the left edge
  const style = {
    background: `linear-gradient(135deg,
      hsl(${hue} 38% 32%) 0%,
      hsl(${(hue + 28) % 360} 42% 22%) 100%)`,
  };

  return (
    <div
      style={style}
      className={`relative flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-sm p-4 text-white shadow-sm ring-1 ring-black/10 ${className}`}
    >
      {/* spine highlight */}
      <span className="pointer-events-none absolute inset-y-0 left-0 w-2 bg-white/15" />
      <span className="pointer-events-none absolute inset-y-0 left-2 w-px bg-white/25" />

      <span className="relative z-10 text-[10px] uppercase tracking-widest text-white/70">
        {book.lang}
      </span>

      <span className="relative z-10 font-serif text-base leading-snug">
        {book.title}
      </span>

      {/* subtle bottom rule, like a publisher mark */}
      <span className="relative z-10 mt-2 h-px w-8 bg-white/40" />
    </div>
  );
}
