// 站点全局数据。下列文章 / 书籍内容均为本模板原创占位文字，
// 不复制任何受版权保护的原文。可自由替换为你自己的内容。

export const SITE = {
  name: "Reborn",
  handle: "@learner",
  tagline: "终身学习者，借助 AI 重生。",
  date: "2026.05.21",
  locations: ["深圳", "东京", "香港", "北京"],
  icp: "京ICP备2026020066号",
  year: 2026,
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "Twitter / X", href: "https://x.com/" },
    { label: "微信", href: "#" },
    { label: "RSS", href: "/feed.xml" },
  ],
};

export const NAV = [
  { label: "文章", href: "/articles" },
  { label: "著作", href: "/books" },
  { label: "社区", href: "/community" },
  { label: "动态", href: "/news" },
  { label: "关于", href: "/about" },
];

export type Article = {
  title: string;
  date: string;
  blurb: string;
};

// 占位文章 —— 围绕学习、金钱、语言与注意力四个主题。
export const ARTICLES: Article[] = [
  {
    title: "微小注意力的复利",
    date: "2026年5月18日",
    blurb:
      "一生中大多数杠杆，并非来自罕见的大赌注，而是来自把注意力日复一日地投入同样的几个问题。",
  },
  {
    title: "关于慢读的笔记",
    date: "2026年5月17日",
    blurb:
      "值得一读的书往往值得重读；而一本公开的摘抄笔记，能把零散的段落变成一套私人操作系统。",
  },
  {
    title: "价格是观点，价值是动词",
    date: "2026年5月14日",
    blurb:
      "一份分辨二者的简短指南——以及为什么二者之间的缝隙，正是耐心的学习者被支付的地方。",
  },
  {
    title: "翻译是一种阅读方式",
    date: "2026年5月11日",
    blurb:
      "只有当你被迫把一句话完整地搬进另一种语言时，你才会真正读懂它。",
  },
  {
    title: "属于你自己的时间人口学",
    date: "2026年5月6日",
    blurb:
      "把一周的小时数当作一群需要治理的人口。盈余与赤字，都会复利。",
  },
  {
    title: "学习即递归",
    date: "2026年5月3日",
    blurb:
      "你掌握的每一项技能，都会改变你掌握下一项技能的速度。递归的基准情形，是好奇心。",
  },
];

export type Book = {
  title: string;
  lang: "EN" | "中文";
  note: string;
};

export const BOOKS: Book[] = [
  { title: "人工智能小白书", lang: "中文", note: "写给普通人的人工智能入门读物。" },
  { title: "The Little Book of AI", lang: "EN", note: "面向非工程师的平实入门。" },
  { title: "新生：七年就是一辈子", lang: "中文", note: "关于重塑自我与长期主义。" },
  { title: "Reborn: Seven Years, One Lifetime", lang: "EN", note: "论重启与漫长的时间视角。" },
  { title: "把时间当作朋友", lang: "中文", note: "时间管理，其实是自我管理。" },
  { title: "The Self-Taught Investor", lang: "EN", note: "把金钱当作一门可学的学科。" },
  { title: "人人都能用英语", lang: "中文", note: "一本关于自学英语的小书。" },
  { title: "Everyone's Word Book", lang: "EN", note: "把词汇当作基础设施。" },
  { title: "财富的起点", lang: "中文", note: "通往财务自由的底层逻辑。" },
  { title: "The Beginning of Wealth", lang: "EN", note: "个人理财的第一性原理。" },
  { title: "公开写作", lang: "中文", note: "公开写作如何重塑思考。" },
  { title: "On Writing in Public", lang: "EN", note: "为什么发布会改变你思考的方式。" },
  { title: "重获注意力", lang: "中文", note: "在分心的时代里夺回专注。" },
  { title: "Attention, Reclaimed", lang: "EN", note: "守护最稀缺的资源。" },
];
