import React from "react";
import { getPersonalInfo } from "@/data";
import { Container, SectionHeader } from "@/components/ui";
import { FadeIn } from "@/components/animations";
import styles from "./about.module.css";

// Distinct toolsets with zero duplicate items across rows
const TOOLKIT_ROW_1 = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "HTML5 & CSS3",
  "Three.js",
  "WebGL",
  "GSAP",
  "Tailwind CSS",
  "Git",
  "GitHub",
];

const TOOLKIT_ROW_2 = [
  "Node.js",
  "REST APIs",
  "Python",
  "C++",
  "Java",
  "SQL",
  "MongoDB",
  "Supabase",
  "n8n Automation",
  "React Three Fiber",
  "VS Code",
  "Vercel",
];

/**
 * About Section Component
 * 
 * Features authentic student narrative, clear background depth,
 * and accessible dual-row "MY TOOLKIT" marquee.
 */
export function About() {
  const personal = getPersonalInfo();

  return (
    <section id="about" className={styles.aboutSection} aria-label="About Me">
      {/* Background Lighting & Depth Aesthetics */}
      <div className={styles.bgGlowViolet} aria-hidden="true" />
      <div className={styles.bgGlowCyan} aria-hidden="true" />
      <div className={styles.gridPattern} aria-hidden="true" />
      <div className={styles.topDivider} aria-hidden="true" />

      <div className={styles.contentWrapper}>
        <Container>
          <FadeIn delay={100}>
            <SectionHeader
              tag="ABOUT / MINDSET"
              title="Building Beyond the Ordinary"
              subtitle="Computer Science student exploring modern web engineering, 3D interaction, and AI automation."
            />
          </FadeIn>

          {/* Main Narrative Glass Panel */}
          <FadeIn delay={200}>
            <div className={styles.narrativePanel}>
              <div className={styles.narrativeBody}>
                {personal.bio.map((paragraph, index) => (
                  <p key={index} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className={styles.actionsRow}>
                <a href="#contact" className={styles.talkButton}>
                  <span>Let&apos;s Talk</span>
                  <span className={styles.talkButtonArrow}>→</span>
                </a>

                <div className={styles.statusChips}>
                  <div className={styles.roleText}>
                    <span>Currently:</span>
                    <strong>{personal.currentRole}</strong>
                  </div>
                  <div className={styles.activeBadge}>
                    <span className={styles.activeDot} />
                    <span>Active</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* MY TOOLKIT Header */}
          <FadeIn delay={300}>
            <div className={styles.toolkitSection}>
              <div className={styles.toolkitHeader}>
                <span className={styles.toolkitLabel}>My Toolkit</span>
                <div className={styles.toolkitLine} />
              </div>
            </div>
          </FadeIn>
        </Container>

        {/* MY TOOLKIT Dual Marquee Section - Continuous Edge-to-Edge */}
        <FadeIn delay={350}>
          <div
            className={styles.marqueeContainer}
            aria-label="Technologies and tools marquee"
          >
            {/* Row 1 - Flowing Left */}
            <div className={`${styles.marqueeTrack} ${styles.marqueeRow1}`}>
              {Array.from({ length: 4 }).map((_, groupIdx) => (
                <div
                  key={`r1-group-${groupIdx}`}
                  className={styles.marqueeGroup}
                  aria-hidden={groupIdx > 0 ? "true" : undefined}
                >
                  {TOOLKIT_ROW_1.map((item, idx) => (
                    <span
                      key={`r1-${groupIdx}-${idx}`}
                      className={styles.toolkitPill}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>

            {/* Row 2 - Flowing Right */}
            <div className={`${styles.marqueeTrack} ${styles.marqueeRow2}`}>
              {Array.from({ length: 4 }).map((_, groupIdx) => (
                <div
                  key={`r2-group-${groupIdx}`}
                  className={styles.marqueeGroup}
                  aria-hidden={groupIdx > 0 ? "true" : undefined}
                >
                  {TOOLKIT_ROW_2.map((item, idx) => (
                    <span
                      key={`r2-${groupIdx}-${idx}`}
                      className={styles.toolkitPill}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
