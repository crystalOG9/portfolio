"use client";

import React, { useState, useEffect } from "react";
import { getPersonalInfo } from "@/data";
import { Button } from "@/components/ui";
import { FadeIn, ScrollIndicator } from "@/components/animations";
import styles from "./hero.module.css";

/**
 * RotatingWord Component
 * Cycles subtly through engineering focus keywords
 */
function RotatingWord({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!words || words.length <= 1) return;
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 280);
    }, 2800);

    return () => clearInterval(interval);
  }, [words]);

  const currentWord = words[index] || words[0] || "Interactive";

  return (
    <span
      style={{
        display: "inline-block",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(8px)",
        transition:
          "opacity 0.28s cubic-bezier(0.16, 1, 0.3, 1), transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {currentWord}
    </span>
  );
}

/**
 * Hero Section Component
 * 
 * Hierarchy:
 * - Status Pill: "Available for new projects"
 * - Salutation: "Hi, I'm Piyush Pawar"
 * - Main Headline: "Frontend & Creative Developer"
 * - Supporting text: "Building modern web experiences with interactive 3D, thoughtful UI, and AI-powered automation."
 * - Primary CTA: "View My Work" (#work)
 * - Secondary CTA: "Let's Work Together" (#contact)
 */
export function Hero() {
  const personal = getPersonalInfo();

  const rotatingWords =
    personal.heroRotatingWords && personal.heroRotatingWords.length > 0
      ? personal.heroRotatingWords
      : ["Interactive", "Modern", "Creative", "Thoughtful"];

  return (
    <section id="hero" className={styles.heroSection}>
      <div id="home" style={{ position: "relative", top: "-80px", visibility: "hidden" }} />

      {/* Static Background Artwork */}
      <div className={styles.heroBackground} aria-hidden="true">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className={styles.heroBgImage}
          loading="eager"
          decoding="async"
        />
        <div className={styles.heroBgOverlay} />
      </div>

      {/* Ambient deep purple atmosphere */}
      <div
        className="ambient-glow"
        style={{
          top: "12%",
          right: "8%",
          width: "500px",
          height: "500px",
          backgroundColor: "rgba(124, 58, 237, 0.14)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="ambient-glow"
        style={{
          bottom: "8%",
          left: "5%",
          width: "380px",
          height: "380px",
          backgroundColor: "rgba(99, 102, 241, 0.08)",
          filter: "blur(80px)",
        }}
      />

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          {/* Status Pill Badge: "Available for new projects" */}
          <FadeIn delay={100} direction="down">
            <div className={styles.badgePill}>
              <span className={styles.badgeDotContainer}>
                <span className={styles.badgeDotPing} />
                <span className={styles.badgeDotSolid} />
              </span>
              <span className={styles.badgeText}>
                {personal.heroBadge || personal.statusTag || "Available for new projects"}
              </span>
            </div>
          </FadeIn>

          {/* Salutation: "Hi, I'm Piyush Pawar" */}
          <FadeIn delay={180} direction="up">
            <p className={styles.salutation}>
              {personal.heroGreeting || "Hi, I'm"}{" "}
              <span className={styles.salutationHighlight}>
                {personal.displayName || personal.name}
              </span>
            </p>
          </FadeIn>

          {/* Main Headline: "Frontend & Creative Developer" */}
          <FadeIn delay={260} direction="up">
            <h1 className={`text-gradient ${styles.headlineRole}`}>
              Frontend &amp; Creative Developer
            </h1>
          </FadeIn>

          {/* Supporting Text */}
          <FadeIn delay={340} direction="up">
            <p className={styles.supportingText}>
              Building modern web experiences with interactive 3D, thoughtful UI, and AI-powered automation.
            </p>
          </FadeIn>

          {/* Dynamic Interactive Crafting Tag */}
          <FadeIn delay={400} direction="up">
            <div className={styles.focusTag}>
              <span>Crafting</span>
              <span className={styles.rotatingWordHighlight}>
                <RotatingWord words={rotatingWords} />
              </span>
              <span>digital interfaces &amp; systems</span>
            </div>
          </FadeIn>

          {/* Primary & Secondary Action CTAs */}
          <FadeIn delay={480} direction="up">
            <div className={styles.actionButtons}>
              <Button size="lg" asChild>
                <a href="#work">View My Work</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span>Let&apos;s Work Together</span>
                  <span aria-hidden="true">→</span>
                </a>
              </Button>
            </div>
          </FadeIn>

          {/* Quick Metadata: Location and Verified Links */}
          <FadeIn delay={560} direction="up">
            <div className={styles.metadataRow}>
              <span>{personal.location}</span>
              {personal.socials.github && (
                <>
                  <span className={styles.metadataDivider}>•</span>
                  <a
                    href={personal.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    GitHub ↗
                  </a>
                </>
              )}
              {personal.socials.instagram && (
                <>
                  <span className={styles.metadataDivider}>•</span>
                  <a
                    href={personal.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                  >
                    Instagram ↗
                  </a>
                </>
              )}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className={styles.scrollIndicatorWrapper}>
        <ScrollIndicator targetId="about" label="Scroll" />
      </div>
    </section>
  );
}
