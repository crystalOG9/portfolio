import React from "react";
import { getExperience } from "@/data";
import { Container, BorderGlow } from "@/components/ui";
import { FadeIn } from "@/components/animations";
import styles from "./experience.module.css";

/**
 * Experience & Timeline Section Component
 * Modeled after Hasnain Irfan's Sticky Timeline Concept
 */
export function Experience() {
  const experiences = getExperience();

  return (
    <section id="experience" className={`portfolio-section ${styles.experienceSection}`} aria-label="Milestones and Education">
      {/* Ambient background decorative glow lights */}
      <div className={styles.bgGlowAqua} aria-hidden="true" />
      <div className={styles.bgGlowPurple} aria-hidden="true" />

      <div className={styles.contentWrapper}>
        <Container>
          <FadeIn delay={100}>
            <div className={styles.headerBlock}>
              <span className={styles.eyebrow}>Milestones &amp; Education</span>
              <h2 className={styles.heading}>
                Foundation, Projects &amp; <span className={styles.textGradient}>Continuous Learning.</span>
              </h2>
            </div>
          </FadeIn>

          <div className={styles.timelineContainer}>
            {/* Continuous Vertical Illuminated Track Line */}
            <div className={styles.verticalLine} aria-hidden="true" />

            {/* Timeline Rows */}
            {experiences.map((item, index) => (
              <div key={item.id} className={styles.timelineRow}>
                {/* Header Column with Sticky Node & Milestone Info (Rendered once without duplication) */}
                <div className={styles.stickyCol}>
                  {/* Timeline Glowing Node */}
                  <div className={styles.timelineNode} aria-hidden="true">
                    <div className={styles.nodeDot} />
                  </div>

                  {/* Single Semantic Information Block */}
                  <div className={styles.infoBlock}>
                    <span className={styles.periodBadge}>{item.period}</span>
                    <h3 className={styles.roleTitle}>{item.role}</h3>
                    <p className={styles.companySubtitle}>{item.company}</p>
                  </div>
                </div>

                {/* Content Column */}
                <div className={styles.contentCol}>
                  <FadeIn delay={150 + index * 80}>
                    {/* Content Card with Glassmorphic styling & BorderGlow */}
                    <BorderGlow
                      borderRadius={24}
                      glowRadius={36}
                      glowIntensity={1.0}
                      edgeSensitivity={30}
                      colors={["#c084fc", "#f472b6", "#38bdf8"]}
                      backgroundColor="#100f16"
                    >
                      <div className={styles.contentCard} style={{ border: "none", background: "transparent" }}>
                        <ul className={styles.highlightsList}>
                          {item.highlights.map((h, hIdx) => (
                            <li key={hIdx} className={styles.highlightItem}>
                              <span className={styles.highlightBullet} aria-hidden="true" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>

                        {item.technologies && item.technologies.length > 0 && (
                          <div className={styles.techRow}>
                            {item.technologies.map((tech) => (
                              <span key={tech} className={styles.techChip}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </BorderGlow>
                  </FadeIn>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
