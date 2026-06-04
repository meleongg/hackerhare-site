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
      className="surface-primary border-text-muted/15 border-t py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="surface-card mx-auto max-w-lg rounded-2xl border p-8 text-center sm:p-10">
          <p className="text-text-status font-mono text-xs font-medium tracking-widest">
            GLOBAL INTERCEPTS
          </p>
          <p
            id="global-tally-heading"
            className="font-display text-text-primary mt-4 text-[clamp(2rem,8vw,3.25rem)] leading-none tracking-[0.06em]"
          >
            {tallyFormatter.format(totalBlocked)}
          </p>
          <p className="text-text-muted mt-3 text-sm leading-relaxed">
            Threats blocked across the fleet by HackerHare agents.
          </p>
        </div>
      </div>
    </section>
  );
}
