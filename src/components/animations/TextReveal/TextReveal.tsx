"use client";

import React from "react";
import { cn } from "@/lib";

export interface TextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number; // Base delay in ms
  stagger?: number; // Delay between words in ms
  highlightWords?: string[];
  highlightClass?: string;
}

/**
 * TextReveal Component
 * Phase 02 & 13 - Animation System
 *
 * Staggered word revelation for headlines and key titles.
 * Renders uniform DOM elements on both SSR and CSR to eliminate hydration mismatch.
 * Defaults to a semantic inline "span" element to avoid illegal heading nesting.
 */
export function TextReveal({
  text,
  as: Component = "span",
  className,
  delay = 100,
  stagger = 60,
  highlightWords = [],
  highlightClass = "text-gradient",
}: TextRevealProps) {
  const words = text.split(" ");

  return (
    <Component
      className={cn("text-reveal-container", className)}
      style={{ display: "inline-block", overflow: "hidden" }}
    >
      {words.map((word, index) => {
        const isHighlight = highlightWords.includes(word);
        const wordDelay = delay + index * stagger;

        return (
          <span
            key={index}
            style={{ display: "inline-block", whiteSpace: "pre" }}
          >
            <span
              className={cn("reveal-word", isHighlight ? highlightClass : undefined)}
              style={{
                animationDelay: `${wordDelay}ms`,
              }}
            >
              {word}
            </span>{" "}
          </span>
        );
      })}
    </Component>
  );
}
