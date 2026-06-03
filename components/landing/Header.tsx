"use client";

import { ExternalLink, Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useMounted } from "@/hooks/use-prefers-reduced-motion";
import {
  CTA_CHROME_STORE,
  EXTENSION_URL,
  HAS_EXTENSION_URL,
} from "@/lib/constants";

import logoDarkTheme from "@/app/assets/logo-dark-theme.svg";
import logoLightTheme from "@/app/assets/logo-light-theme.svg";

export function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const isDark = mounted ? resolvedTheme === "dark" : true;
  const logo = isDark ? logoLightTheme : logoDarkTheme;

  const storeLinkProps = HAS_EXTENSION_URL
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
    <header className="surface-header border-text-muted/20 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          {mounted ? (
            <Image
              src={logo}
              alt="HackerHare"
              width={40}
              height={40}
              className="size-10 shrink-0 rounded-lg"
              priority
              unoptimized
            />
          ) : (
            <div
              className="bg-bg-primary size-10 shrink-0 rounded-lg"
              aria-hidden
            />
          )}
          <span className="font-display text-text-primary hidden truncate text-sm tracking-[0.2em] sm:inline">
            HACKERHARE
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-2">
          <Button asChild size="sm" className="max-sm:px-3">
            <Link {...storeLinkProps}>
              <ExternalLink className="size-4 shrink-0 sm:hidden" aria-hidden />
              <span className="hidden sm:inline">{CTA_CHROME_STORE}</span>
              <span className="sm:hidden">Store</span>
            </Link>
          </Button>

          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="size-10 shrink-0 px-0"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {mounted ? (
              isDark ? (
                <Sun className="size-5" aria-hidden />
              ) : (
                <Moon className="size-5" aria-hidden />
              )
            ) : (
              <span className="size-5" aria-hidden />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
