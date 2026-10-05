/**
 * SceneLoader
 * Phase 01 - Foundation & Architecture
 *
 * Lightweight placeholder displayed while a 3D bundle or canvas is loading.
 */

import React from "react";

export interface SceneLoaderProps {
  label?: string;
  className?: string;
}

export function SceneLoader({
  label = "Initializing 3D view...",
  className = "",
}: SceneLoaderProps) {
  return (
    <div
      className={`scene-loader ${className}`}
      role="status"
      aria-live="polite"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        minHeight: "200px",
        color: "var(--text-muted, #6b6b7a)",
        fontSize: "var(--text-sm, 0.875rem)",
      }}
    >
      <span className="visually-hidden">{label}</span>
    </div>
  );
}
