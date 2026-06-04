"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import {
  CTA_CHROME_STORE,
  EXTENSION_URL,
  HAS_EXTENSION_URL,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

type ExtensionLinksProps = {
  size?: "default" | "lg" | "sm";
  className?: string;
  showMissionsLink?: boolean;
};

export function ExtensionLinks({
  size = "lg",
  className,
  showMissionsLink = false,
}: ExtensionLinksProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  function scrollToMissions(event: React.MouseEvent<HTMLAnchorElement>) {
    const target = document.getElementById("features");
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
    window.history.pushState(null, "", "#features");
  }
  const linkProps = HAS_EXTENSION_URL
    ? {
        href: EXTENSION_URL,
        target: "_blank" as const,
        rel: "noopener noreferrer",
      }
    : {
        href: "#download",
        "aria-disabled": true,
        onClick: (event: React.MouseEvent<HTMLAnchorElement>) =>
          event.preventDefault(),
      };

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <Button
        asChild
        size={size}
        className={cn(!HAS_EXTENSION_URL && "opacity-90")}
      >
        <Link {...linkProps}>
          <ExternalLink className="size-4 shrink-0" aria-hidden />
          {CTA_CHROME_STORE}
        </Link>
      </Button>

      {!HAS_EXTENSION_URL && (
        <p className="text-text-muted font-mono text-xs">
          Chrome Web Store listing coming soon
        </p>
      )}

      {showMissionsLink && (
        <Button asChild variant="outline" size={size}>
          <a href="#features" onClick={scrollToMissions}>
            See missions
          </a>
        </Button>
      )}
    </div>
  );
}
