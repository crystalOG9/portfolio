/**
 * Animation Module Type Definitions
 * Phase 01 - Foundation & Architecture
 *
 * Defines contracts for isolated, pluggable animation modules.
 */

import type { ReactNode } from "react";

export type AnimationTrigger = "mount" | "scroll" | "hover" | "view";

export interface AnimationBaseProps {
  children?: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  disabled?: boolean;
}

export interface AnimationModuleConfig {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
}
