"use client";

import React, { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib";

export interface FadeInProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number; // ms
  duration?: number; // ms
  direction?: "up" | "down" | "none";
  distance?: number; // px
}

/**
 * FadeIn Component
 * Phase 02 & 13 - Animation System
 *
 * Smooth scroll-triggered entrance animation using IntersectionObserver.
 * Renders uniform DOM elements on both SSR and CSR to eliminate hydration mismatch.
 */
export function FadeIn({
  children,
  className,
  style,
  delay = 0,
  duration = 700,
  direction = "up",
  distance = 24,
}: FadeInProps) {
  const [inView, setInView] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (elementRef.current) observer.unobserve(elementRef.current);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getTransform = () => {
    if (inView) return "translate3d(0, 0, 0)";
    if (direction === "up") return `translate3d(0, ${distance}px, 0)`;
    if (direction === "down") return `translate3d(0, -${distance}px, 0)`;
    return "none";
  };

  return (
    <div
      ref={elementRef}
      className={cn("fade-in-container", className)}
      style={{
        opacity: inView ? 1 : 0,
        transform: getTransform(),
        transitionProperty: "opacity, transform",
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: inView ? "auto" : "opacity, transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
