"use client";

import React, { Component, type ErrorInfo, type ReactNode } from "react";

interface SceneBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  enabled?: boolean;
}

interface SceneBoundaryState {
  hasError: boolean;
  errorMessage?: string;
}

/**
 * SceneBoundary
 * Phase 01 - Foundation & Architecture
 *
 * Ensures any future 3D scene (Three.js / WebGL / R3F) runs in complete isolation.
 * If WebGL is unsupported or a runtime crash occurs, the surrounding UI and page
 * remain 100% functional, gracefully falling back to a clean placeholder or static view.
 */
export class SceneBoundary extends Component<
  SceneBoundaryProps,
  SceneBoundaryState
> {
  constructor(props: SceneBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): SceneBoundaryState {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn("[SceneBoundary] 3D render fallback triggered:", error, errorInfo);
  }

  render() {
    const { enabled = true, children, fallback } = this.props;

    if (!enabled || this.state.hasError) {
      return (
        fallback || (
          <div
            className="scene-fallback"
            aria-hidden="true"
            style={{
              width: "100%",
              height: "100%",
              minHeight: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
            }}
          />
        )
      );
    }

    return children;
  }
}
