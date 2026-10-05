"use client";

import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion, useMounted } from "@/hooks";

/**
 * CursorEffect Component
 * Phase 02 - Personal Information, Visual Identity & Initial Motion
 *
 * Smooth dual-layer custom cursor (pinpoint dot + lerped ring).
 * Expands on hover over links, buttons, and cards.
 * Automatically disabled on touch screens and under prefers-reduced-motion.
 */
export function CursorEffect() {
  const prefersReduced = useReducedMotion();
  const mounted = useMounted();
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  const pos = useRef({
    dotX: -100,
    dotY: -100,
    ringX: -100,
    ringY: -100,
  });

  useEffect(() => {
    // Check if the device is purely touch or mobile
    const isTouch =
      window.matchMedia("(hover: none) and (pointer: coarse)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    if (isTouch || prefersReduced) {
      return;
    }

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      pos.current.dotX = e.clientX;
      pos.current.dotY = e.clientY;
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, .ui-card, [data-cursor="pointer"]'
      );
      setIsHovering(Boolean(interactive));
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleElementHover, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    const updateCursor = () => {
      const { dotX, dotY } = pos.current;

      // Direct placement for pinpoint dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;
      }

      // Smooth trailing lerp for outer ring
      pos.current.ringX += (dotX - pos.current.ringX) * 0.18;
      pos.current.ringY += (dotY - pos.current.ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.current.ringX}px, ${pos.current.ringY}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(updateCursor);
    };

    animationFrameId = requestAnimationFrame(updateCursor);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleElementHover);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [prefersReduced]);

  // Disabled: Cursor circle removed per user specification
  return null;
}
