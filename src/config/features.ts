/**
 * Feature Flags Configuration
 * Complete Architecture - Phases 03 through 18
 *
 * Controls portfolio-wide experimental and visual capabilities.
 */

import type { FeatureFlags } from "@/types";

export const defaultFeatureFlags: FeatureFlags = {
  ENABLE_3D: true, // Three.js modular interactive 3D hero scene enabled
  ENABLE_CUSTOM_CURSOR: false, // Circle cursor disabled per user request
  ENABLE_SMOOTH_SCROLL: true, // Enhanced smooth navigation
  ENABLE_PAGE_TRANSITIONS: false, // Architectural placeholder
  ENABLE_BACKGROUND_EFFECTS: false, // Background particles/stars disabled
  REDUCED_MOTION_MODE: false, // Accessibility toggle
};
