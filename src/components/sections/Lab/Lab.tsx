import React from "react";
import { getExperiments } from "@/data";
import { Container, SectionHeader, Card } from "@/components/ui";
import { FadeIn } from "@/components/animations";
import { InteractiveLabSandbox } from "./InteractiveLabSandbox";

/**
 * Creative Lab Section Component
 * Phase 10 - Experiments & Creative Lab
 *
 * Dedicated experimental space showcasing exploratory prototypes,
 * real-time WebGL canvas shaders, and interactive physics experiments.
 */
export function Lab() {
  const experiments = getExperiments();

  return (
    <section id="lab" className="portfolio-section lab-section">
      <Container>
        <FadeIn delay={100}>
          <SectionHeader
            tag="Digital Playground"
            title="Experiments & Creative Lab"
            subtitle="Testing ground for real-time 3D, physics simulation, custom shaders, and experimental micro-interactions."
          />
        </FadeIn>

        {/* Live Interactive Physics & Shader Sandbox */}
        <FadeIn delay={150}>
          <InteractiveLabSandbox />
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--space-6, 1.5rem)",
          }}
        >
          {experiments.map((exp, index) => (
            <FadeIn key={exp.id} delay={150 + index * 70}>
              <Card
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "var(--space-3, 0.75rem)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "var(--text-xs, 0.75rem)",
                        fontFamily: "var(--font-mono)",
                        color: "var(--accent-primary)",
                      }}
                    >
                      EXP_0{index + 1}
                    </span>
                    <span
                      style={{
                        fontSize: "var(--text-xs, 0.75rem)",
                        fontFamily: "var(--font-mono)",
                        color: "var(--accent-cyan)",
                        backgroundColor: "rgba(6, 182, 212, 0.1)",
                        padding: "0.2rem 0.5rem",
                        borderRadius: "var(--radius-full)",
                      }}
                    >
                      Active Lab
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "var(--text-lg, 1.125rem)",
                      fontWeight: "var(--font-bold, 700)",
                      color: "var(--text-primary)",
                      marginBottom: "var(--space-2, 0.5rem)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {exp.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "var(--text-sm, 0.875rem)",
                      color: "var(--text-secondary)",
                      lineHeight: "var(--leading-relaxed, 1.7)",
                      marginBottom: "var(--space-4, 1rem)",
                    }}
                  >
                    {exp.summary}
                  </p>
                </div>

                <div>
                  <ul
                    style={{
                      display: "flex",
                      gap: "var(--space-2, 0.5rem)",
                      flexWrap: "wrap",
                      paddingTop: "var(--space-4, 1rem)",
                      borderTop: "1px solid var(--border-subtle)",
                    }}
                  >
                    {exp.technologies.map((tech) => (
                      <li key={tech}>
                        <span className="tech-tag">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
