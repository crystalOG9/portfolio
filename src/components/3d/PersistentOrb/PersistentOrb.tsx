"use client";

import React from "react";
import { useReducedMotion, useMounted } from "@/hooks";
import { getFeatureFlags } from "@/data";
import { SceneBoundary } from "../SceneBoundary";
import { OrbScene } from "./OrbScene";

export interface PersistentOrbProps {
  className?: string;
}

/**
 * PersistentOrb Component
 * 
 * Signature persistent 3D digital core that travels seamlessly across
 * the entire portfolio experience:
 * - Controlled by global scroll progress across Hero, About, Service, Skills, Work, Experience, Lab, and Contact.
 * - Smooth physical interpolation (no jumping between sections).
 * - Fixed viewport canvas with pointer-events: none (zero interaction interference).
 * - Isolated inside SceneBoundary for complete error protection.
 * - Fully accessible and honors prefers-reduced-motion.
 */
export function PersistentOrb({ className = "" }: PersistentOrbProps) {
  const prefersReduced = useReducedMotion();
  const features = getFeatureFlags();
  const mounted = useMounted();

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
        <OrbScene prefersReducedMotion={prefersReduced} />
      </SceneBoundary>
    </div>
  );
}
