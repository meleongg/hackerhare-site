import type { ReactNode } from "react";

type LegalSectionProps = {
  title: string;
  children: ReactNode;
};

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-text-primary text-lg font-semibold tracking-tight">
        {title}
      </h2>
      <div className="text-text-muted space-y-3 text-sm leading-relaxed sm:text-base">
        {children}
      </div>
    </section>
  );
}
