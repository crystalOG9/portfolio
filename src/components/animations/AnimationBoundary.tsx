"use client";

import React, { type ReactNode } from "react";
import { useReducedMotion } from "@/hooks";
import { cn } from "@/lib";

export interface AnimationBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
  disabled?: boolean;
}

/**
 * AnimationBoundary
 * Phase 01 - Foundation & Architecture
 *
 * Provides safe containment for all future animation modules.
 * Automatically respects user's prefers-reduced-motion preference
 * and graceful degradation if disabled.
 */
export function AnimationBoundary({
  children,
  fallback,
  className,
  disabled = false,
}: AnimationBoundaryProps) {
  const prefersReduced = useReducedMotion();

  if (disabled || prefersReduced) {
    return fallback ? (
      <>{fallback}</>
    ) : (
      <div className={cn("animation-disabled", className)}>{children}</div>
    );
  }

  return (
    <div className={cn("animation-boundary", className)}>
      {children}
    </div>
  );
}
