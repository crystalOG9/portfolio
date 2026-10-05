import React from "react";
import type { ProjectItem } from "@/types";
import { Card } from "@/components/ui";

export interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
}

/**
 * ProjectCard Component
 * Phase 02 - Personal Information, Visual Identity & Initial Motion
 *
 * Reusable card rendering an individual project from configuration.
 * Hides links if not provided and maintains clean visual hierarchy.
 */
export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Card
      className={className}
      as="article"
      style={{
        height: "100%",
      }}
    >
      <div>
        {/* Category & Year */}
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
              color: "var(--accent-cyan)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              fontWeight: "var(--font-medium, 500)",
            }}
          >
            {project.category}
          </span>
          {project.id === "spartan" ? (
            <span
              style={{
                fontSize: "0.7rem",
                fontFamily: "var(--font-mono)",
                color: "#c084fc",
                background: "rgba(192, 132, 252, 0.12)",
                border: "1px solid rgba(192, 132, 252, 0.35)",
                padding: "0.2rem 0.6rem",
                borderRadius: "9999px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                boxShadow: "0 0 12px rgba(192, 132, 252, 0.25)",
              }}
            >
              Main Project
            </span>
          ) : project.year ? (
            <span
              style={{
                fontSize: "var(--text-xs, 0.75rem)",
                fontFamily: "var(--font-mono)",
                color: "var(--text-muted)",
              }}
            >
              {project.year}
            </span>
          ) : null}
        </div>

        {/* Project Title */}
        <h3
          style={{
            fontSize: "var(--text-xl, 1.25rem)",
            fontWeight: "var(--font-bold, 700)",
            color: "var(--text-primary)",
            marginBottom: "var(--space-3, 0.75rem)",
            letterSpacing: "-0.015em",
          }}
        >
          {project.title}
        </h3>

        {/* Summary Description */}
        <p
          style={{
            fontSize: "var(--text-sm, 0.875rem)",
            color: "var(--text-secondary)",
            lineHeight: "var(--leading-relaxed, 1.7)",
            marginBottom: "var(--space-5, 1.25rem)",
          }}
        >
          {project.summary}
        </p>

        {/* Technology Pills */}
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-2, 0.5rem)",
            marginBottom: "var(--space-6, 1.5rem)",
          }}
        >
          {project.technologies.map((tech) => (
            <li key={tech}>
              <span className="tech-tag">{tech}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Links (conditionally rendered only if real URLs exist) */}
      {(project.liveUrl || project.githubUrl) && (
        <div
          style={{
            display: "flex",
            gap: "var(--space-4, 1rem)",
            fontSize: "var(--text-sm, 0.875rem)",
            paddingTop: "var(--space-4, 1rem)",
            borderTop: "1px solid var(--border-subtle)",
          }}
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--accent-primary)",
                fontWeight: "var(--font-medium, 500)",
              }}
            >
              Live Project ↗
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--text-secondary)",
                fontWeight: "var(--font-medium, 500)",
              }}
            >
              Source Code ↗
            </a>
          )}
        </div>
      )}
    </Card>
  );
}
