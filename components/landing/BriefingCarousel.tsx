"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";

import { Button } from "@/components/ui/button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { BRIEFING_SLIDES } from "@/lib/briefing-slides";
import { cn } from "@/lib/utils";

export function BriefingCarousel() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const slideCount = BRIEFING_SLIDES.length;
  const slide = BRIEFING_SLIDES[index];

  const goTo = useCallback(
    (nextIndex: number) => {
      setIndex((nextIndex + slideCount) % slideCount);
    },
    [slideCount],
  );

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  }

  return (
    <div
      className={cn(
        "focus-visible:ring-rocket-orange focus-visible:ring-offset-bg-primary mt-6 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      )}
      role="region"
      aria-roledescription="carousel"
      aria-label="Extension briefing screenshots"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <figure>
        <div className="border-text-muted/25 surface-placeholder relative h-[22rem] w-full overflow-hidden rounded-xl border sm:h-[26rem]">
          <Image
            key={slide.id}
            src={slide.src}
            alt={slide.alt}
            fill
            quality={92}
            sizes="(max-width: 1023px) calc(100vw - 4rem), 600px"
            unoptimized={process.env.NODE_ENV === "development"}
            className={cn(
              "object-contain p-2",
              !prefersReducedMotion && "transition-opacity duration-300",
            )}
            priority={index === 0}
          />
        </div>

        <figcaption className="text-text-tagline mt-3 min-h-[2.75rem] text-center text-sm font-medium">
          {slide.caption}
        </figcaption>
      </figure>

      <div className="mt-4 flex items-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="size-10 shrink-0 px-0"
          onClick={goPrev}
          aria-label="Previous briefing screenshot"
        >
          <ChevronLeft className="size-5" aria-hidden />
        </Button>

        <div className="flex min-w-0 flex-1 flex-col items-center gap-2">
          <div
            className="flex items-center justify-center gap-2"
            role="tablist"
            aria-label="Select briefing screenshot"
          >
            {BRIEFING_SLIDES.map((item, slideIndex) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={slideIndex === index}
                aria-label={`${item.caption} (${slideIndex + 1} of ${slideCount})`}
                className={cn(
                  "size-2.5 rounded-full transition-colors",
                  slideIndex === index
                    ? "bg-rocket-orange"
                    : "bg-text-muted/40 hover:bg-text-muted/70",
                )}
                onClick={() => goTo(slideIndex)}
              />
            ))}
          </div>

          <p
            className="text-text-muted font-mono text-xs tabular-nums"
            aria-live="polite"
          >
            {index + 1} / {slideCount}
          </p>
        </div>

        <Button
          type="button"
          variant="outline"
          size="sm"
          className="size-10 shrink-0 px-0"
          onClick={goNext}
          aria-label="Next briefing screenshot"
        >
          <ChevronRight className="size-5" aria-hidden />
        </Button>
      </div>
    </div>
  );
}
