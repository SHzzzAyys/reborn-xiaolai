import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata = { title: "Sign in — Reborn" };

export default function LoginPage() {
  return (
    <div className="mx-auto flex max-w-sm flex-col px-5 pt-24">
      <h1 className="font-serif text-3xl tracking-tight">Sign in</h1>
      <p className="mt-2 text-sm text-muted">
        Welcome back to Reborn{SITE.handle}.
      </p>

      <form className="mt-8 space-y-4">
        <label className="block">
          <span className="text-xs uppercase tracking-widest text-muted">Email</span>
          <input
            type="email"
            placeholder="you@example.com"
            className="mt-1.5 w-full rounded-sm border border-line bg-white/60 px-3 py-2.5 text-sm outline-none focus:border-accent"
          />
        </label>
        <label className="block">
          <span className="text-xs uppercase tracking-widest text-muted">Password</span>
          <input
            type="password"
            placeholder="••••••••"
            className="mt-1.5 w-full rounded-sm border border-line bg-white/60 px-3 py-2.5 text-sm outline-none focus:border-accent"
          />
        </label>
        <button
          type="button"
          className="w-full rounded-full bg-foreground py-2.5 text-sm text-background transition-opacity hover:opacity-85"
        >
          Continue
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-muted">
        New here?{" "}
        <Link href="/community" className="link-underline text-foreground">
          Join the community
        </Link>
      </p>
    </div>
  );
}
