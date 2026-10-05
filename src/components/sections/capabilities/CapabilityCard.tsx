import React from "react";
import type { CapabilityCardData } from "./types";
import { CardIconBadge } from "./CardIconBadge";
import styles from "./capabilities.module.css";

export interface CapabilityCardProps {
  data: CapabilityCardData;
}

/**
 * CapabilityCard Component
 *
 * Implements the exact aesthetic from the user's reference screenshots:
 * - Widescreen card with a deep, rich, plain attractive gradient
 * - Top-left pill tag + horizontal line
 * - Top-right large background number + glassmorphic technology icon badge
 * - Prominent bold title, readable description, and technology skill badges
 * - Generous, elegant negative space
 * - Bottom row with white circular arrow button and "WHAT'S INCLUDED" bullet list
 * - Completely static, zero animations
 */
export function CapabilityCard({ data }: CapabilityCardProps) {
  const { theme } = data;

  return (
    <article
      id={data.id}
      className={styles.cardContainer}
      style={{
        background: theme.gradientBg,
        border: `1px solid ${theme.cardBorder}`,
      }}
      aria-label={`${data.title} - ${data.category}`}
    >
      {/* Top Bar: Pill Tag on Left */}
      <div className={styles.topBar}>
        <div className={styles.pillGroup}>
          <div className={styles.pillTag}>{data.category}</div>
          <div className={styles.pillLine} aria-hidden="true" />
        </div>
      </div>

      {/* Upper Right Corner: Large Number + Glassmorphic Technology Badge */}
      <div className={styles.topRightGroup}>
        <div
          className={styles.bgNumber}
          style={{ color: theme.numberColor }}
          aria-hidden="true"
        >
          {data.rawNumber}
        </div>
        <CardIconBadge
          iconType={data.iconType}
          iconColor={theme.iconColor}
        />
      </div>

      {/* Main Content: Title, Description & Skills / Tech Badges */}
      <div className={styles.contentBlock}>
        <h3 className={styles.cardTitle}>{data.title}</h3>
        <p className={styles.cardDescription}>{data.description}</p>

        {/* Technology Skill Indicators */}
        <div className={styles.techList} aria-label="Skills & Technologies">
          {data.technologies.map((tech) => (
            <span
              key={tech}
              className={styles.techBadge}
              style={{
                backgroundColor: theme.badgeBg,
                borderColor: theme.badgeBorder,
                color: theme.badgeText,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Spacious Negative Space */}
      <div className={styles.spacer} aria-hidden="true" />

      {/* Bottom Bar: CTA Left & What's Included Right */}
      <div className={styles.bottomBar}>
        {/* Bottom Left: White Circle Button + CTA Text */}
        <a
          href={data.cta.href}
          className={styles.ctaWrapper}
          target={data.cta.isExternal ? "_blank" : undefined}
          rel={data.cta.isExternal ? "noopener noreferrer" : undefined}
          aria-label={`${data.cta.label} - ${data.title}`}
        >
          <div className={styles.ctaCircle} aria-hidden="true">
            <svg
              className={styles.ctaArrow}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
          <span className={styles.ctaText}>{data.cta.label}</span>
        </a>

        {/* Bottom Right: "WHAT'S INCLUDED" */}
        <div className={styles.whatIncludedBox}>
          <h4 className={styles.whatIncludedHeader}>WHAT&apos;S INCLUDED</h4>
          <ul className={styles.includedList}>
            {data.included.map((item, idx) => (
              <li key={idx} className={styles.includedItem}>
                <span className={styles.bulletDot} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
