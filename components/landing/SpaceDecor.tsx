"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image, { type StaticImageData } from "next/image";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

import leftCloud from "@/app/assets/left-cloud.svg";
import rightCloud from "@/app/assets/right-cloud.svg";

type SpaceDecorProps = {
  className?: string;
  variant?: "hero" | "features";
  showLeft?: boolean;
  showRight?: boolean;
};

function CloudImage({
  src,
  width,
  height,
  edge,
  priority,
}: {
  src: StaticImageData;
  width: number;
  height: number;
  edge: "left" | "right";
  priority?: boolean;
}) {
  return (
    <div className={edge === "left" ? "cloud-fade-left" : "cloud-fade-right"}>
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
        className="h-auto w-full"
        unoptimized
        priority={priority}
      />
    </div>
  );
}

export function SpaceDecor({
  className,
  variant = "hero",
  showLeft = true,
  showRight = true,
}: SpaceDecorProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { scrollY } = useScroll();
  const isHero = variant === "hero";

  const leftY = useTransform(
    scrollY,
    [0, 800],
    [0, prefersReducedMotion ? 0 : isHero ? 40 : 25],
  );
  const rightY = useTransform(
    scrollY,
    [0, 800],
    [0, prefersReducedMotion ? 0 : isHero ? 55 : 35],
  );

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-[1] hidden overflow-visible lg:block",
        className,
      )}
      aria-hidden
    >
      {showLeft && (
        <motion.div
          style={{ y: leftY }}
          className={cn(
            "absolute",
            isHero
              ? "top-[-7%] -left-[10%] w-[min(54vw,960px)]"
              : "top-[18%] -left-[14%] w-[min(48vw,780px)] opacity-80",
          )}
        >
          <CloudImage
            src={leftCloud}
            width={1139}
            height={737}
            edge="left"
            priority={isHero}
          />
        </motion.div>
      )}

      {showRight && (
        <motion.div
          style={{ y: rightY }}
          className={cn(
            "absolute",
            isHero
              ? "-right-[10%] bottom-[-8%] w-[min(52vw,920px)]"
              : "top-8 -right-[14%] w-[min(40vw,680px)] opacity-70",
          )}
        >
          <CloudImage
            src={rightCloud}
            width={1419}
            height={1012}
            edge="right"
            priority={isHero}
          />
        </motion.div>
      )}
    </div>
  );
}
