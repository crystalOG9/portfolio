"use client";

import React, { useState, useEffect } from "react";
import { getPersonalInfo, getFeatureFlags } from "@/data";
import { Button } from "@/components/ui";
import { FadeIn, ScrollIndicator } from "@/components/animations";
import styles from "./hero.module.css";

/**
 * RotatingWord Component
 * Cycles dynamically through signature engineering values (Scalable, Modern, Reliable, Interactive)
 * Reference: hasnainirfan.com/#home dynamic keyword cycle
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

  const currentWord = words[index] || words[0] || "Scalable";

  return (
    <span
      style={{
        display: "inline-block",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(10px)",
        transition: "opacity 0.28s cubic-bezier(0.16, 1, 0.3, 1), transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {currentWord}
    </span>
  );
}

/**
 * Hero Section Component
 * 
 * Layout:
 * - Content positioned at the total right side
 * - Vertically elevated ("little bit upper side")
 * - Text structure referenced from hasnainirfan.com/#home
 */
export function Hero() {
  const personal = getPersonalInfo();
  const features = getFeatureFlags();

  const rotatingWords =
    personal.heroRotatingWords && personal.heroRotatingWords.length > 0
      ? personal.heroRotatingWords
      : ["Scalable", "Modern", "Reliable", "Interactive"];

  return (
    <section id="hero" className={styles.heroSection}>
      <div id="home" style={{ position: "relative", top: "-80px", visibility: "hidden" }} />

      {/* Static Background Artwork for Home / Hero Section */}
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
            <h1 className={styles.salutation}>
              {personal.heroGreeting || "Hi, I'm"}{" "}
              <span className={styles.salutationHighlight}>
                {personal.displayName || personal.name}
              </span>
            </h1>
          </FadeIn>

          {/* Role & Crafting headline in text-gradient */}
          <FadeIn delay={260} direction="up">
            <p className={`text-gradient ${styles.headlineRole}`}>
              {personal.heroRole || "Frontend & Creative Developer"}
              <br />
              {personal.heroActionWord || "crafting"}
            </p>
          </FadeIn>

          {/* Signature dynamic rotating word */}
          <FadeIn delay={340} direction="up">
            <div className={styles.rotatingWordWrapper}>
              <RotatingWord words={rotatingWords} />
            </div>
          </FadeIn>

          {/* Continuation punchline: "web & mobile products." */}
          <FadeIn delay={420} direction="up">
            <p className={styles.punchline}>
              {personal.heroEndingText || "web & mobile products."}
            </p>
          </FadeIn>

          {/* Action Buttons: "Hire Me →" & "View My Work" */}
          <FadeIn delay={540} direction="up">
            <div className={styles.actionButtons}>
              <Button size="lg" asChild>
                <a
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span>Hire Me</span>
                  <span aria-hidden="true">→</span>
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#work">View My Work</a>
              </Button>
            </div>
          </FadeIn>

          {/* Quick Metadata: Location and Social Links */}
          <FadeIn delay={660} direction="up">
            <div className={styles.metadataRow}>
              <span>{personal.location}</span>
              <span className={styles.metadataDivider}>•</span>
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                GitHub ↗
              </a>
              <span className={styles.metadataDivider}>•</span>
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                LinkedIn ↗
              </a>
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
