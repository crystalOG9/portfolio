import React, {
  type ButtonHTMLAttributes,
  type ReactNode,
  cloneElement,
  isValidElement,
} from "react";
import { cn } from "@/lib";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  asChild?: boolean;
}

/**
 * Button Primitive
 * Phase 01 - Foundation & Architecture
 *
 * Lightweight, accessible button foundation supporting slot composition via asChild.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  asChild = false,
  ...props
}: ButtonProps) {
  const buttonClassName = cn(
    "ui-button",
    `ui-button--${variant}`,
    `ui-button--${size}`,
    className
  );

  if (asChild && isValidElement(children)) {
    const childElement = children as React.ReactElement<{ className?: string }>;
    return cloneElement(childElement, {
      className: cn(buttonClassName, childElement.props.className),
    });
  }

  return (
    <button type={type} className={buttonClassName} {...props}>
      {children}
    </button>
  );
}
