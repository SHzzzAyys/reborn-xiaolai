import type { MDXComponents } from "mdx/types";

// MDX 正文的元素 → 站点排版映射。传给 next-mdx-remote 的 <MDXRemote components={...}>。
export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2 className="mt-10 mb-3 font-serif text-2xl tracking-tight" {...props} />
  ),
  h3: (props) => (
    <h3 className="mt-8 mb-2 font-serif text-xl tracking-tight" {...props} />
  ),
  p: (props) => <p className="my-4 leading-relaxed text-foreground/90" {...props} />,
  a: (props) => (
    <a
      className="text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent"
      {...props}
    />
  ),
  ul: (props) => <ul className="my-4 list-disc space-y-1.5 pl-6" {...props} />,
  ol: (props) => <ol className="my-4 list-decimal space-y-1.5 pl-6" {...props} />,
  li: (props) => <li className="leading-relaxed text-foreground/90" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-2 border-accent/50 pl-4 italic text-muted"
      {...props}
    />
  ),
  // 代码块（pre/code）交给 rehype-pretty-code 输出的 .shiki，
  // 行内 code 与代码块容器样式统一在 globals.css 的 .mdx 作用域里处理。
  hr: () => <hr className="my-10 border-line" />,
};
