/**
 * Programmatic Design Tokens
 * Phase 01 - Foundation & Architecture
 *
 * Typed constants for breakpoints and motion parameters, accessible to
 * JavaScript/TypeScript logic, hooks, and future animation/3D modules.
 */

import type { Breakpoints, MotionTokens } from "@/types";

export const BREAKPOINTS: Breakpoints = {
  xs: "360px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const MOTION: MotionTokens = {
  durationFast: "150ms",
  durationNormal: "250ms",
  durationSlow: "400ms",
  durationDeliberate: "700ms",
  easeOut: "cubic-bezier(0, 0, 0.2, 1)",
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeSpring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
};
