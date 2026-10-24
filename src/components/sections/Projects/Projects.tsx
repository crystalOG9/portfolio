"use client";

import React, { useState } from "react";
import { getProjects } from "@/data";
import { Container, SectionHeader } from "@/components/ui";
import { FadeIn } from "@/components/animations";
import { ProjectCard } from "./ProjectCard";
import type { ProjectItem } from "@/types";

/**
 * Projects Section Component
 * Phase 08 - Projects Showcase
 *
 * Filterable gallery highlighting SPARTAN as the main project,
 * RideBridge, and Creative Web Experiments.
 */
export function Projects() {
  const projects = getProjects();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "AI Automation Platform", label: "AI & Automation" },
    { id: "Carpooling & Mobility", label: "Web & Mobility" },
    { id: "Creative Lab & 3D", label: "3D & Creative" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="work" className="portfolio-section projects-section">
      <div id="projects" style={{ position: "relative", top: "-80px", visibility: "hidden" }} />
      <Container>
        <FadeIn delay={100}>
          <SectionHeader
            tag="Selected Projects"
            title="Featured Engineering & Concepts"
            subtitle="Architectures, platforms, and interactive prototypes built and in active development."
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
                <ProjectCard project={project} />
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
              backgroundColor: "rgba(8, 8, 10, 0.85)",
              backdropFilter: "blur(16px)",
              zIndex: "var(--z-modal, 500)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "var(--space-4, 1rem)",
            }}
            onClick={() => setActiveProject(null)}
          >
            <div
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-default)",
                borderRadius: "var(--radius-2xl)",
                padding: "var(--space-8, 2rem)",
                maxWidth: "640px",
                width: "100%",
                boxShadow: "var(--shadow-xl)",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "var(--space-4, 1rem)",
                }}
              >
                <span
                  style={{
                    fontSize: "var(--text-xs, 0.75rem)",
                    fontFamily: "var(--font-mono)",
                    color: "var(--accent-cyan)",
                    textTransform: "uppercase",
                  }}
                >
                  {activeProject.category}{activeProject.id === "spartan" ? " · Main Project" : ""}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  aria-label="Close modal"
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "var(--text-xl, 1.25rem)",
                    cursor: "pointer",
                    padding: "0.25rem 0.5rem",
                  }}
                >
                  ✕
                </button>
              </div>

              <h2
                id="modal-project-title"
                style={{
                  fontSize: "var(--text-2xl, 1.5rem)",
                  fontWeight: "var(--font-bold, 700)",
                  color: "var(--text-primary)",
                  marginBottom: "var(--space-3, 0.75rem)",
                }}
              >
                {activeProject.title}
              </h2>

              <p
                style={{
                  fontSize: "var(--text-base, 1rem)",
                  color: "var(--text-secondary)",
                  lineHeight: "var(--leading-relaxed, 1.7)",
                  marginBottom: "var(--space-6, 1.5rem)",
                }}
              >
                {activeProject.description}
              </p>

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
                Technologies & Architecture
              </h4>
              <ul
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "var(--space-2, 0.5rem)",
                  marginBottom: "var(--space-6, 1.5rem)",
                }}
              >
                {activeProject.technologies.map((t) => (
                  <li key={t}>
                    <span className="tech-tag">#{t}</span>
                  </li>
                ))}
              </ul>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "var(--space-3, 0.75rem)",
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="ui-button ui-button--outline ui-button--md"
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
