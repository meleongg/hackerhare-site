import { getTotalBlocked } from "@/lib/metrics";

const tallyFormatter = new Intl.NumberFormat("en-US");

export async function GlobalTallySection() {
  const totalBlocked = await getTotalBlocked();

  if (totalBlocked === null) {
    return null;
  }

  return (
    <section
      aria-labelledby="global-tally-heading"
      className="surface-primary pt-0 pb-14 sm:pb-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="surface-card border-rocket-orange/35 from-mascot-lavender/35 via-card-bg to-card-bg dark:from-mascot-lavender/15 mx-auto max-w-lg rounded-2xl border bg-gradient-to-b p-8 text-center shadow-[0_12px_40px_rgb(224_133_0_/_12%)] sm:p-10 dark:shadow-[0_12px_40px_rgb(255_163_33_/_10%)]">
          <p className="text-rocket-orange font-mono text-sm font-semibold tracking-[0.2em] sm:text-base">
            GLOBAL INTERCEPTS
          </p>
          <p
            id="global-tally-heading"
            className="font-display text-rocket-orange mt-4 text-[clamp(2rem,8vw,3.25rem)] leading-none tracking-[0.06em]"
          >
            {tallyFormatter.format(totalBlocked)}
          </p>
          <p className="text-text-tagline mt-3 text-sm leading-relaxed font-medium">
            Threats blocked across the fleet by HackerHare agents.
          </p>
        </div>
      </div>
    </section>
  );
}
