"use client";

import { useMediaQuery } from "./useMediaQuery";

/**
 * useReducedMotion Hook
 * Phase 01 - Foundation & Architecture
 *
 * Checks if the user prefers reduced motion (system accessibility setting).
 */
export function useReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
