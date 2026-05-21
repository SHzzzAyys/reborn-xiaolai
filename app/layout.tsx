import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE, SITE_URL } from "@/lib/site";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const title = `${SITE.name} — ${SITE.bio}`;
const description = SITE.blurb;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s · ${SITE.name}`,
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: SITE.name,
    title,
    description,
    url: "/",
    // 文件约定 app/opengraph-image.tsx 会自动挂上 og:image，无需在此显式列。
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

// 在 paint 前应用保存/系统主题，避免闪烁
const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

// JSON-LD Person — 让搜索引擎理解站点主体
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  alternateName: SITE.username,
  url: SITE_URL,
  image: SITE.avatar,
  description: SITE.blurb,
  jobTitle: "Biology PhD · AI Enthusiast",
  knowsAbout: [
    "Bioinformatics",
    "Toxoplasma gondii",
    "Large Language Models",
    "AI Agents",
    "Claude Code",
  ],
  sameAs: [SITE.github],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hans"
      className={`${newsreader.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
