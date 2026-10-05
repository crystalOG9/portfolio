/**
 * Core Utility Functions
 * Phase 01 - Foundation & Architecture
 */

/**
 * Conditionally joins CSS class names together.
 * Lightweight, zero-dependency alternative to clsx/classnames.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Safe external link attributes generator
 */
export function externalLinkProps(isExternal?: boolean) {
  if (!isExternal) return {};
  return {
    target: "_blank",
    rel: "noopener noreferrer",
  };
}
