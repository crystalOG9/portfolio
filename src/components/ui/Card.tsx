import React, { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib";
import { BorderGlow } from "./BorderGlow";

export interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  coneSpread?: number;
  edgeSensitivity?: number;
  colors?: string[];
  animated?: boolean;
}

/**
 * Card Primitive
 * Phase 01 & React Bits Integration
 *
 * Base container for project cards, experience items, and lab experiments
 * enhanced with interactive BorderGlow directional mesh gradient.
 */
export function Card({
  children,
  className,
  as: Component = "div",
  glowColor = "40 80 80",
  backgroundColor = "#120F17",
  borderRadius = 28,
  glowRadius = 40,
  glowIntensity = 1.0,
  coneSpread = 25,
  edgeSensitivity = 30,
  colors = ["#c084fc", "#f472b6", "#38bdf8"],
  animated = false,
  style,
  ...props
}: CardProps) {
  return (
    <BorderGlow
      className={cn("ui-card", className)}
      edgeSensitivity={edgeSensitivity}
      glowColor={glowColor}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      glowRadius={glowRadius}
      glowIntensity={glowIntensity}
      coneSpread={coneSpread}
      animated={animated}
      colors={colors}
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      <Component
        className="ui-card-inner"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          padding: "var(--space-6, 1.5rem)",
          width: "100%",
          borderRadius: "inherit",
        }}
        {...props}
      >
        {children}
      </Component>
    </BorderGlow>
  );
}
