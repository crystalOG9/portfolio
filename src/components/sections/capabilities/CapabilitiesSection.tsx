"use client";

import React, { useEffect, useRef, useState } from "react";
import { Container, SectionHeader } from "@/components/ui";
import { CapabilityCard } from "./CapabilityCard";
import { capabilityCardsData } from "./capabilityData";
import styles from "./capabilities.module.css";

/**
 * CapabilitiesSection Component
 *
 * Implements the "Stack Slide" scroll animation (inspired by animos.app):
 * - Cards slide up and stack over each other with a springy landing as you scroll down.
 * - Each card underneath scales down (depthScale: 0.95) and subtly dims.
 * - Responsive sticky offsets and smooth hardware-accelerated transforms.
 */
export function CapabilitiesSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [transforms, setTransforms] = useState<{ scale: number; opacity: number; brightness: number }[]>(
    capabilityCardsData.map(() => ({ scale: 1, opacity: 1, brightness: 1 }))
  );

  useEffect(() => {
    let animId: number;

    const handleScroll = () => {
      animId = requestAnimationFrame(() => {
        const total = capabilityCardsData.length;
        const isMobile = window.innerWidth <= 768;
        const topBase = isMobile ? 65 : 85;
        const topStep = isMobile ? 14 : 22;

        const nextTransforms = capabilityCardsData.map((_, i) => {
          const currentEl = cardRefs.current[i];
          if (!currentEl) return { scale: 1, opacity: 1, brightness: 1 };

          // Measure how much subsequent cards are stacking over this card
          let depth = 0;
          for (let j = i + 1; j < total; j++) {
            const nextEl = cardRefs.current[j];
            if (nextEl) {
              const nextRect = nextEl.getBoundingClientRect();
              const stickyTarget = topBase + j * topStep;
              const distance = nextRect.top - stickyTarget;
              if (distance < 320) {
                const progress = Math.max(0, Math.min(1, 1 - distance / 320));
                depth += progress;
              }
            }
          }

          // Depth scale: 0.95 per level (animos stack-slide formula)
          const scale = Math.max(0.85, 1 - depth * 0.045);
          const opacity = Math.max(0.68, 1 - depth * 0.07);
          const brightness = Math.max(0.78, 1 - depth * 0.11);

          return { scale, opacity, brightness };
        });

        setTransforms(nextTransforms);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section
      id="service"
      className={styles.capabilitiesSection}
      aria-label="Capabilities & Services Section"
    >
      <div id="capabilities" style={{ position: "relative", top: "-80px", visibility: "hidden" }} />
      <div id="services" style={{ position: "relative", top: "-80px", visibility: "hidden" }} />
      <div className={styles.sectionContainer}>
        {/* Section Header */}
        <div className={styles.headerWrapper}>
          <SectionHeader
            tag="Capabilities"
            title="Capabilities & Focus Areas"
            subtitle="From scalable modern web applications and mobile apps to backend APIs and autonomous AI workflows."
          />
        </div>

        {/* Stack-Slide Cards */}
        <div className={styles.cardsList}>
          {capabilityCardsData.map((card, index) => {
            const t = transforms[index] || { scale: 1, opacity: 1, brightness: 1 };
            // Sticky top position with staggered deck header offsets
            const topOffset = `calc(${85 + index * 24}px)`;

            return (
              <div
                key={card.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={styles.cardStickyWrapper}
                style={{
                  top: topOffset,
                  zIndex: index + 1,
                  transform: `scale(${t.scale}) translateY(${(1 - t.scale) * -45}px)`,
                  opacity: t.opacity,
                  filter: `brightness(${t.brightness})`,
                }}
              >
                <CapabilityCard data={card} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
