"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { ExtensionLinks } from "@/components/landing/ExtensionLinks";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { TAGLINE } from "@/lib/constants";

import rabbitHead from "@/app/assets/rabbit-head.svg";

export function CTASection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="download"
      className="surface-primary border-text-muted/15 relative border-t py-20 sm:py-28"
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 text-center sm:px-6">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={rabbitHead}
            alt="HackerHare agent"
            width={400}
            height={400}
            className="mx-auto h-auto w-48 sm:w-56"
            unoptimized
          />
        </motion.div>

        <h2 className="font-display text-text-primary mt-6 text-[clamp(1.25rem,5vw,1.875rem)] tracking-[0.08em] sm:tracking-[0.12em]">
          DEPLOY YOUR AGENT
        </h2>
        <p className="text-text-muted mt-3 max-w-md">{TAGLINE}</p>

        <ExtensionLinks className="mt-8 items-center" />
      </div>
    </section>
  );
}
