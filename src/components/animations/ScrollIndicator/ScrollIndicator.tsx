"use client";

import React from "react";

export interface ScrollIndicatorProps {
  targetId?: string;
  label?: string;
  className?: string;
}

/**
 * ScrollIndicator Component
 * Phase 02 - Personal Information, Visual Identity & Initial Motion
 *
 * Minimalist, animated indicator signaling scroll depth at the bottom of the Hero.
 */
export function ScrollIndicator({
  targetId = "about",
  label = "Explore",
  className = "",
}: ScrollIndicatorProps) {
  return (
    <a
      href={`#${targetId}`}
      className={`scroll-indicator ${className}`}
      aria-label={`Scroll to ${targetId}`}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--space-2, 0.5rem)",
        color: "var(--text-muted, #5e6173)",
        fontSize: "var(--text-xs, 0.75rem)",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        transition: "color var(--duration-fast)",
      }}
    >
      <span>{label}</span>
      <div
        style={{
          width: "20px",
          height: "32px",
          border: "1.5px solid var(--border-default, rgba(255, 255, 255, 0.1))",
          borderRadius: "var(--radius-full, 9999px)",
          display: "flex",
          justifyContent: "center",
          paddingTop: "6px",
        }}
      >
        <div
          style={{
            width: "3px",
            height: "6px",
            backgroundColor: "var(--accent-primary, #6366f1)",
            borderRadius: "2px",
            animation: "scrollPulse 1.8s ease-in-out infinite",
          }}
        />
      </div>
    </a>
  );
}
