import React, { type ReactNode, type HTMLAttributes } from "react";
import { cn } from "@/lib";

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "header" | "footer";
}

/**
 * Container Component
 * Phase 01 - Foundation & Architecture
 *
 * Provides consistent maximum width and responsive horizontal padding.
 */
export function Container({
  children,
  className,
  as: Component = "div",
  ...props
}: ContainerProps) {
  return (
    <Component className={cn("container", className)} {...props}>
      {children}
    </Component>
  );
}
