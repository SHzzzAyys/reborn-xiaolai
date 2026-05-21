import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata = { title: "登录 — Reborn" };

export default function LoginPage() {
  return (
    <div className="mx-auto flex max-w-sm flex-col px-5 pt-24">
      <h1 className="font-serif text-3xl tracking-tight">登录</h1>
      <p className="mt-2 text-sm text-muted">
        欢迎回到 Reborn{SITE.handle}。
      </p>

      <form className="mt-8 space-y-4">
        <label className="block">
          <span className="text-xs uppercase tracking-widest text-muted">邮箱</span>
          <input
            type="email"
            placeholder="you@example.com"
            className="mt-1.5 w-full rounded-sm border border-line bg-card px-3 py-2.5 text-sm outline-none focus:border-accent"
          />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-widest text-muted">密码</span>
          <input
            type="password"
            placeholder="••••••••"
            className="mt-1.5 w-full rounded-sm border border-line bg-card px-3 py-2.5 text-sm outline-none focus:border-accent"
          />
        </label>
        <button
          type="button"
          className="w-full rounded-full bg-foreground py-2.5 text-sm text-background transition-opacity hover:opacity-85"
        >
          继续
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-muted">
        还没有账号？{" "}
        <Link href="/community" className="link-underline text-foreground">
          加入社区
        </Link>
      </p>
    </div>
  );
}
