"use client";

import React, { useState } from "react";
import { getProjects } from "@/data";
import { Container, SectionHeader } from "@/components/ui";
import { FadeIn } from "@/components/animations";
import { ProjectCard } from "./ProjectCard";
import type { ProjectItem } from "@/types";

/**
 * Projects Section Component
 * 
 * Filterable gallery with consistent presentation across SPARTAN,
 * RideBridge, Medi-4-U, and Creative Web Experiments.
 * Distinguishes working features from prototypes and planned roadmaps.
 */
export function Projects() {
  const projects = getProjects();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "AI Automation Platform", label: "AI & Automation" },
    { id: "Carpooling & Mobility", label: "Mobility & Transit" },
    { id: "Healthcare & Donation Platform", label: "Healthcare & Donation" },
    { id: "Creative Lab & 3D", label: "3D & Creative Lab" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="portfolio-section projects-section" aria-label="Selected Projects">
      <div id="projects" style={{ position: "relative", top: "-80px", visibility: "hidden" }} />
      <Container>
        <FadeIn delay={100}>
          <SectionHeader
            tag="Selected Projects"
            title="Featured Engineering &amp; Prototypes"
            subtitle="Clear distinction between active development, working prototypes, and planned architecture."
          />
        </FadeIn>

        {/* Category Filters */}
        <FadeIn delay={200}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-2, 0.5rem)",
              marginBottom: "var(--space-8, 2rem)",
            }}
          >
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: "0.45rem 1rem",
                    borderRadius: "var(--radius-full)",
                    fontSize: "var(--text-xs, 0.75rem)",
                    fontFamily: "var(--font-mono)",
                    cursor: "pointer",
                    transition: "all var(--duration-fast)",
                    border: "1px solid",
                    borderColor: isActive
                      ? "var(--accent-primary)"
                      : "var(--border-subtle)",
                    backgroundColor: isActive
                      ? "var(--accent-muted)"
                      : "var(--bg-surface)",
                    color: isActive ? "#ffffff" : "var(--text-secondary)",
                    fontWeight: isActive ? 600 : 400,
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Project Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "var(--space-6, 1.5rem)",
          }}
        >
          {filteredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={100 + index * 80}>
              <div
                onClick={() => setActiveProject(project)}
                style={{ cursor: "pointer", height: "100%" }}
              >
                <ProjectCard
                  project={project}
                  onOpenDetails={() => setActiveProject(project)}
                />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Project Detail Modal */}
        {activeProject && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(8, 8, 10, 0.88)",
              backdropFilter: "blur(16px)",
              zIndex: "var(--z-modal, 500)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "var(--space-4, 1rem)",
              overflowY: "auto",
            }}
            onClick={() => setActiveProject(null)}
          >
            <div
              style={{
                backgroundColor: "#110e1b",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "var(--radius-2xl)",
                padding: "clamp(1.25rem, 4vw, 2rem)",
                maxWidth: "680px",
                width: "100%",
                maxHeight: "90vh",
                overflowY: "auto",
                boxShadow: "0 24px 60px rgba(0, 0, 0, 0.6)",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Bar */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginBottom: "var(--space-3, 0.75rem)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                  <span
                    style={{
                      fontSize: "var(--text-xs, 0.75rem)",
                      fontFamily: "var(--font-mono)",
                      color: "var(--accent-cyan)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {activeProject.category}
                  </span>
                  {activeProject.status && (
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontFamily: "var(--font-mono)",
                        color: "#c084fc",
                        background: "rgba(192, 132, 252, 0.12)",
                        border: "1px solid rgba(192, 132, 252, 0.35)",
                        padding: "0.15rem 0.5rem",
                        borderRadius: "9999px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                      }}
                    >
                      {activeProject.status}
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  aria-label="Close modal"
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "var(--text-xl, 1.25rem)",
                    cursor: "pointer",
                    padding: "0.25rem 0.5rem",
                    background: "none",
                    border: "none",
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Title & Role */}
              <h2
                id="modal-project-title"
                style={{
                  fontSize: "clamp(1.4rem, 3vw, 1.75rem)",
                  fontWeight: "var(--font-bold, 700)",
                  color: "var(--text-primary)",
                  marginBottom: "0.25rem",
                }}
              >
                {activeProject.title}
              </h2>
              {activeProject.role && (
                <p
                  style={{
                    fontSize: "var(--text-xs, 0.75rem)",
                    fontFamily: "var(--font-mono)",
                    color: "var(--accent-primary)",
                    marginBottom: "var(--space-4, 1rem)",
                  }}
                >
                  Contribution: {activeProject.role}
                </p>
              )}

              {/* Description */}
              <p
                style={{
                  fontSize: "var(--text-sm, 0.875rem)",
                  color: "var(--text-secondary)",
                  lineHeight: "var(--leading-relaxed, 1.7)",
                  marginBottom: "var(--space-6, 1.5rem)",
                }}
              >
                {activeProject.description}
              </p>

              {/* Implemented vs Planned Breakdown */}
              {activeProject.implementedFeatures && activeProject.implementedFeatures.length > 0 && (
                <div style={{ marginBottom: "var(--space-5, 1.25rem)" }}>
                  <h4
                    style={{
                      fontSize: "var(--text-xs, 0.75rem)",
                      fontFamily: "var(--font-mono)",
                      color: "#34d399",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "var(--space-2, 0.5rem)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    <span>✓</span>
                    <span>Currently Implemented &amp; Verified</span>
                  </h4>
                  <ul style={{ paddingLeft: "1.25rem", margin: 0 }}>
                    {activeProject.implementedFeatures.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        style={{
                          fontSize: "var(--text-xs, 0.75rem)",
                          color: "var(--text-secondary)",
                          lineHeight: 1.6,
                          marginBottom: "0.25rem",
                        }}
                      >
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeProject.plannedFeatures && activeProject.plannedFeatures.length > 0 && (
                <div style={{ marginBottom: "var(--space-6, 1.5rem)" }}>
                  <h4
                    style={{
                      fontSize: "var(--text-xs, 0.75rem)",
                      fontFamily: "var(--font-mono)",
                      color: "#a1a1aa",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: "var(--space-2, 0.5rem)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    <span>○</span>
                    <span>Planned Architecture &amp; Future Scope</span>
                  </h4>
                  <ul style={{ paddingLeft: "1.25rem", margin: 0 }}>
                    {activeProject.plannedFeatures.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        style={{
                          fontSize: "var(--text-xs, 0.75rem)",
                          color: "var(--text-muted)",
                          lineHeight: 1.6,
                          marginBottom: "0.25rem",
                        }}
                      >
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <h4
                style={{
                  fontSize: "var(--text-xs, 0.75rem)",
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "var(--space-2, 0.5rem)",
                }}
              >
                Technologies Genuinely Used
              </h4>
              <ul
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "var(--space-2, 0.5rem)",
                  marginBottom: "var(--space-6, 1.5rem)",
                  padding: 0,
                  listStyle: "none",
                }}
              >
                {activeProject.technologies.map((t) => (
                  <li key={t}>
                    <span className="tech-tag">#{t}</span>
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "var(--space-3, 0.75rem)",
                  paddingTop: "var(--space-4, 1rem)",
                  borderTop: "1px solid var(--border-subtle)",
                }}
              >
                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ui-button ui-button--primary ui-button--sm"
                  >
                    Live Demo ↗
                  </a>
                )}
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ui-button ui-button--outline ui-button--sm"
                  >
                    GitHub Repo ↗
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="ui-button ui-button--outline ui-button--sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
