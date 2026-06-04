import Link from "next/link";
import type { ReactNode } from "react";

import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { LEGAL_LAST_UPDATED } from "@/lib/constants";

type LegalPageLayoutProps = {
  title: string;
  intro: ReactNode;
  children: ReactNode;
};

export function LegalPageLayout({
  title,
  intro,
  children,
}: LegalPageLayoutProps) {
  return (
    <>
      <Header />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <Link
            href="/"
            className="text-rocket-orange hover:text-rocket-orange/80 font-mono text-xs font-medium tracking-widest transition-colors"
          >
            ← RETURN TO BASE
          </Link>

          <p className="text-text-status mt-8 font-mono text-xs font-medium tracking-widest">
            LAST UPDATED: {LEGAL_LAST_UPDATED}
          </p>

          <h1 className="font-display text-text-primary mt-4 text-[clamp(1.5rem,6vw,2.25rem)] tracking-[0.08em]">
            {title}
          </h1>

          <p className="text-text-tagline mt-4 text-base leading-relaxed font-medium sm:text-lg">
            {intro}
          </p>

          <div className="surface-card mt-10 space-y-10 rounded-2xl border p-6 sm:p-10">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
