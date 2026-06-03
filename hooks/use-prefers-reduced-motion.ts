"use client";

import { useSyncExternalStore } from "react";

function subscribePrefersReducedMotion(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getPrefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function subscribeMounted(onStoreChange: () => void) {
  void onStoreChange;
  return () => {};
}

export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribePrefersReducedMotion,
    getPrefersReducedMotion,
    () => false,
  );
}

export function useMounted() {
  return useSyncExternalStore(
    subscribeMounted,
    () => true,
    () => false,
  );
}
