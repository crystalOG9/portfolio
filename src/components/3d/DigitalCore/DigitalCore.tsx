"use client";

import React, { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks";
import { getFeatureFlags } from "@/data";
import { SceneBoundary } from "../SceneBoundary";
import { DigitalCoreScene } from "./DigitalCoreScene";

export interface DigitalCoreProps {
  className?: string;
}

/**
 * DigitalCore Component
 * 
 * Signature 3D Digital Core that acts as the visual identity of the portfolio:
 * - Liquid-crystalline glass shell with subtle organic deformation
 * - Dark transparent interior with soft purple internal glow
 * - 1–2 ultra-thin glowing orbital light trails
 * - Localized floating depth particles
 * - Continuous, section-aware scroll journey across the entire website
 * - 100% non-blocking (pointer-events: none) and honors prefers-reduced-motion
 */
export function DigitalCore({ className = "" }: DigitalCoreProps) {
  const prefersReduced = useReducedMotion();
  const features = getFeatureFlags();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !features.ENABLE_3D) {
    return null;
  }

  return (
    <div
      className={className}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: "var(--z-orb, 15)",
        overflow: "hidden",
      }}
    >
      <SceneBoundary enabled={features.ENABLE_3D}>
        <DigitalCoreScene prefersReducedMotion={prefersReduced} />
      </SceneBoundary>
    </div>
  );
}
