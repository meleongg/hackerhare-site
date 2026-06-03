export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="surface-primary border-text-muted/15 border-t py-8">
      <div className="text-text-muted mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm sm:flex-row sm:px-6 lg:px-8">
        <p>© {year} HackerHare</p>
        <nav className="flex items-center gap-6" aria-label="Footer navigation">
          <span className="cursor-not-allowed opacity-50" aria-disabled>
            Privacy
          </span>
          <span className="cursor-not-allowed opacity-50" aria-disabled>
            Contact
          </span>
        </nav>
      </div>
    </footer>
  );
}
