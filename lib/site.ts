// Site-wide data. All article/book content here is original placeholder text
// written for this template — it intentionally does NOT reproduce any
// copyrighted writing. Swap in your own content.

export const SITE = {
  name: "Reborn",
  handle: "@learner",
  tagline: "A life-long learner, reborn with AI.",
  date: "21.05.2026",
  locations: ["Shenzhen", "Tokyo", "Hong Kong", "Beijing"],
  icp: "京ICP备2026020066号",
  year: 2026,
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "Twitter / X", href: "https://x.com/" },
    { label: "WeChat", href: "#" },
    { label: "RSS", href: "/feed.xml" },
  ],
};

export const NAV = [
  { label: "Articles", href: "/articles" },
  { label: "Books", href: "/books" },
  { label: "Community", href: "/community" },
  { label: "News", href: "/news" },
  { label: "About", href: "/about" },
];

export type Article = {
  title: string;
  date: string;
  blurb: string;
};

// Placeholder essays — themed around learning, money, language and attention.
export const ARTICLES: Article[] = [
  {
    title: "The Compounding of Small Attention",
    date: "May 18, 2026",
    blurb:
      "Most leverage in a life comes not from rare big bets but from the quiet, daily reinvestment of attention into the same few questions.",
  },
  {
    title: "Notes on Reading Slowly",
    date: "May 17, 2026",
    blurb:
      "Why a book worth reading is worth re-reading, and how a commonplace book turns scattered passages into a private operating system.",
  },
  {
    title: "Prices Are Opinions, Value Is a Verb",
    date: "May 14, 2026",
    blurb:
      "A short field guide to telling the two apart — and why the gap between them is where patient learners are paid.",
  },
  {
    title: "Translation as a Way of Reading",
    date: "May 11, 2026",
    blurb:
      "You never understand a sentence as precisely as when you are forced to carry it, intact, into another language.",
  },
  {
    title: "The Demographics of Your Own Time",
    date: "May 6, 2026",
    blurb:
      "Treat the hours of a week as a population to be governed. Surpluses and deficits both compound.",
  },
  {
    title: "Learning Is Recursion",
    date: "May 3, 2026",
    blurb:
      "Every skill you acquire changes the rate at which you can acquire the next one. The base case is curiosity.",
  },
];

export type Book = {
  title: string;
  lang: "EN" | "中文";
  note: string;
};

export const BOOKS: Book[] = [
  { title: "The Little Book of AI", lang: "EN", note: "A plain-language primer for non-engineers." },
  { title: "人工智能小白书", lang: "中文", note: "写给普通人的人工智能入门读物。" },
  { title: "Reborn: Seven Years, One Lifetime", lang: "EN", note: "On reinvention and long horizons." },
  { title: "新生：七年就是一辈子", lang: "中文", note: "关于成长、复利与长期主义。" },
  { title: "The Self-Taught Investor", lang: "EN", note: "Money as a learnable subject." },
  { title: "把时间当作朋友", lang: "中文", note: "时间管理其实是自我管理。" },
  { title: "Everyone's Word Book", lang: "EN", note: "Vocabulary as infrastructure." },
  { title: "人人都能用英语", lang: "中文", note: "一本关于自学英语的小书。" },
  { title: "The Beginning of Wealth", lang: "EN", note: "First principles of personal finance." },
  { title: "财富的起点", lang: "中文", note: "财务自由的底层逻辑。" },
  { title: "On Writing in Public", lang: "EN", note: "Why publishing changes how you think." },
  { title: "公开写作", lang: "中文", note: "公开写作如何重塑思考。" },
  { title: "Attention, Reclaimed", lang: "EN", note: "Defending the most scarce resource." },
  { title: "重获注意力", lang: "中文", note: "在分心的时代里夺回专注。" },
];
