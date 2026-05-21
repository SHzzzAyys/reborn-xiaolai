import type { Book } from "@/lib/site";

// A curated palette of cover-like jewel tones — brighter and more cohesive
// than a raw hash-to-hue. Each entry is a [from, to] diagonal gradient.
const PALETTE: [string, string][] = [
  ["#1f6f6b", "#0f3f3d"], // teal
  ["#8a2f3b", "#5a1c25"], // burgundy
  ["#2b4a8a", "#16294f"], // royal blue
  ["#3f6b35", "#23401d"], // forest
  ["#7a3f86", "#48214f"], // plum
  ["#b45a2b", "#7a3315"], // rust
  ["#4a5568", "#262c38"], // slate
  ["#9a6b1f", "#5f3f10"], // ochre
];

function paletteIndex(title: string): number {
  let h = 0;
  for (let i = 0; i < title.length; i++) {
    h = (h * 31 + title.charCodeAt(i)) % 100000;
  }
  return h % PALETTE.length;
}

export default function BookCover({
  book,
  className = "",
}: {
  book: Book;
  className?: string;
}) {
  const [from, to] = PALETTE[paletteIndex(book.title)];
  const style = {
    background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
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
