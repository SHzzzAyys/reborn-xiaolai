import Link from "next/link";

export const metadata = { title: "找不到这一页 — SHzzz" };

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start px-5 pt-24">
      <p className="text-xs uppercase tracking-widest text-muted">404</p>
      <h1 className="mt-2 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
        这里没有你要找的东西。
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        链接可能拼错了，或者这一页早已被搬走、合并、或在某次重构里悄悄消失。
      </p>
      <Link
        href="/"
        className="link-underline mt-8 text-foreground"
      >
        回首页 →
      </Link>
    </div>
  );
}
