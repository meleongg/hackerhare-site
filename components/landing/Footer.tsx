import Link from "next/link";

import { GITHUB_REPO_URL } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="surface-primary border-text-muted/15 border-t py-8">
      <div className="text-text-muted mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm sm:flex-row sm:px-6 lg:px-8">
        <p>© {year} HackerHare</p>
        <nav className="flex items-center gap-6" aria-label="Footer navigation">
          <Link
            href="/privacy"
            className="text-text-muted hover:text-text-primary transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-text-muted hover:text-text-primary transition-colors"
          >
            Terms
          </Link>
          <Link
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
