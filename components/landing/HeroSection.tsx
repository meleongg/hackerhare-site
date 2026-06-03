"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { ExtensionLinks } from "@/components/landing/ExtensionLinks";
import { SpaceDecor } from "@/components/landing/SpaceDecor";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { SITE_DESCRIPTION, TAGLINE } from "@/lib/constants";

import rabbitOnRocket from "@/app/assets/rabbit-on-rocket.svg";

export function HeroSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden lg:min-h-[40rem] lg:overflow-visible">
      <div className="star-field absolute inset-0 z-0" aria-hidden />
      <SpaceDecor variant="hero" />

      {/* Mobile: compact stacked layout — left cloud behind rabbit only */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:gap-8 sm:px-6 sm:py-14 lg:hidden">
        <motion.div
          className="mascot-glow relative w-full max-w-[10.5rem] sm:max-w-[12rem]"
          animate={prefersReducedMotion ? undefined : { y: [0, -8, 0] }}
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <Image
            src={rabbitOnRocket}
            alt="HackerHare secret agent bunny riding a carrot rocket"
            width={645}
            height={857}
            className="relative z-[2] mx-auto h-auto w-full"
            priority
            unoptimized
          />
        </motion.div>

        <div className="hero-card relative z-20 w-full rounded-3xl border p-6 sm:p-8">
          <HeroCardContent />
        </div>
      </div>

      {/* Desktop: two-column layout with staggered clouds behind */}
      <div className="relative z-10 mx-auto hidden max-w-6xl grid-cols-2 items-center gap-14 px-8 py-24 lg:grid">
        <motion.div
          className="mascot-glow relative w-full max-w-lg justify-self-center"
          animate={prefersReducedMotion ? undefined : { y: [0, -10, 0] }}
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <Image
            src={rabbitOnRocket}
            alt="HackerHare secret agent bunny riding a carrot rocket"
            width={645}
            height={857}
            className="relative z-[2] h-auto w-full"
            priority
            unoptimized
          />
        </motion.div>

        <div className="relative min-w-0">
          <div className="hero-card rounded-3xl border p-10">
            <HeroCardContent />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroCardContent() {
  return (
    <>
      <p className="text-text-status font-mono text-xs font-medium tracking-widest">
        [AGENT STATUS: READY]
      </p>
      <h1 className="font-display text-text-primary mt-4 w-full text-[clamp(1.5rem,7.5vw,2.75rem)] leading-none tracking-[0.04em] sm:text-4xl sm:tracking-[0.08em] lg:text-[2.75rem] lg:tracking-[0.1em]">
        HACKERHARE
      </h1>
      <p className="text-text-tagline mt-4 text-base font-semibold sm:text-lg">
        {TAGLINE}
      </p>
      <p className="text-text-muted mt-4 text-sm leading-relaxed sm:text-base lg:text-lg">
        {SITE_DESCRIPTION}
      </p>
      <ExtensionLinks className="mt-8" showMissionsLink />
    </>
  );
}
