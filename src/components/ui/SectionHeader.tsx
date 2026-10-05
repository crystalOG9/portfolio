import React, { type ReactNode } from "react";
import { cn } from "@/lib";

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  tag?: string;
  className?: string;
  align?: "left" | "center" | "right";
  action?: ReactNode;
}

/**
 * SectionHeader Primitive
 * Phase 01 - Foundation & Architecture
 *
 * Ensures consistent section heading hierarchy across all portfolio sections.
 */
export function SectionHeader({
  title,
  subtitle,
  tag,
  className,
  align = "left",
  action,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "section-header",
        `section-header--${align}`,
        className
      )}
      style={{
        marginBottom: "var(--space-8, 2rem)",
        textAlign: align,
      }}
    >
      {tag && (
        <span
          className="section-tag"
          style={{
            display: "inline-block",
            fontSize: "var(--text-xs, 0.75rem)",
            fontWeight: "var(--font-medium, 500)",
            color: "var(--accent-primary, #6366f1)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "var(--space-2, 0.5rem)",
          }}
        >
          {tag}
        </span>
      )}
      <h2
        className="section-title"
        style={{
          fontSize: "var(--text-3xl, 1.875rem)",
          fontWeight: "var(--font-bold, 700)",
          color: "var(--text-primary, #f4f4f7)",
          lineHeight: "var(--leading-tight, 1.15)",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="section-subtitle"
          style={{
            marginTop: "var(--space-2, 0.5rem)",
            fontSize: "var(--text-base, 1rem)",
            color: "var(--text-secondary, #a0a0ab)",
            maxWidth: "600px",
          }}
        >
          {subtitle}
        </p>
      )}
      {action && <div className="section-header-action">{action}</div>}
    </div>
  );
}
