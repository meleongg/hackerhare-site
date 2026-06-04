import { BriefingCarousel } from "@/components/landing/BriefingCarousel";
import { SpaceDecor } from "@/components/landing/SpaceDecor";
import { PROBLEMS, VALUE_PROPOSITION } from "@/lib/constants";

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="surface-primary border-text-muted/15 relative scroll-mt-20 overflow-hidden border-t lg:overflow-visible"
    >
      <SpaceDecor variant="features" showRight={false} />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative z-10 flex flex-col gap-6">
            <div className="surface-card rounded-2xl border p-8 sm:p-10">
              <p className="text-text-status font-mono text-xs font-medium tracking-widest">
                BRIEFING UI
              </p>
              <p className="text-text-muted mt-2 text-sm">
                Live intercepts from the extension in the field.
              </p>
              <BriefingCarousel />
            </div>
          </div>

          <div className="relative z-10 flex min-w-0 flex-col gap-6">
            <div>
              <p className="text-text-status font-mono text-xs font-medium tracking-widest">
                FIELD OPERATIONS
              </p>
              <h2 className="font-display text-text-primary mt-3 text-[clamp(1.25rem,5vw,1.875rem)] tracking-[0.08em] sm:tracking-[0.12em]">
                MISSION BRIEFING
              </h2>
              <p className="text-text-muted mt-3">
                Active intercepts for the threats that slip past passive
                blockers.
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              {PROBLEMS.map((problem) => (
                <li
                  key={problem.label}
                  className="surface-card rounded-2xl border p-5"
                >
                  <p className="text-rocket-orange font-mono text-[11px] font-medium tracking-widest">
                    {problem.label}
                  </p>
                  <h3 className="text-text-primary mt-2 font-semibold">
                    {problem.title}
                  </h3>
                  <p className="text-text-muted mt-2 text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </li>
              ))}
            </ul>

            <p className="surface-card text-text-primary rounded-2xl border p-5 text-sm leading-relaxed">
              {VALUE_PROPOSITION}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
