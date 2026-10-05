"use client";

import { useSyncExternalStore } from "react";

/**
 * useMediaQuery Hook
 * Phase 01 - Foundation & Architecture
 *
 * Uses React 19's useSyncExternalStore for robust, tear-free subscription
 * to window.matchMedia without cascading renders or SSR hydration mismatch.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = (callback: () => void) => {
    if (typeof window === "undefined") {
      return () => {};
    }

    const mediaQueryList = window.matchMedia(query);
    mediaQueryList.addEventListener("change", callback);

    return () => {
      mediaQueryList.removeEventListener("change", callback);
    };
  };

  const getSnapshot = () => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.matchMedia(query).matches;
  };

  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
