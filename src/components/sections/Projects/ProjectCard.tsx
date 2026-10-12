import React from "react";
import type { ProjectItem } from "@/types";
import { Card } from "@/components/ui";

export interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
  onOpenDetails?: () => void;
}

/**
 * ProjectCard Component
 * 
 * Reusable card rendering an individual project from configuration.
 * Displays project name, role, status, technologies, and clear interaction cues.
 */
export function ProjectCard({ project, className, onOpenDetails }: ProjectCardProps) {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case "In Development":
        return {
          color: "#c084fc",
          bg: "rgba(192, 132, 252, 0.12)",
          border: "rgba(192, 132, 252, 0.35)",
        };
      case "Prototype":
        return {
          color: "#38bdf8",
          bg: "rgba(56, 189, 248, 0.12)",
          border: "rgba(56, 189, 248, 0.35)",
        };
      case "Functional Prototype":
      case "Functional":
        return {
          color: "#34d399",
          bg: "rgba(52, 211, 153, 0.12)",
          border: "rgba(52, 211, 153, 0.35)",
        };
      case "Active Lab":
      default:
        return {
          color: "#a78bfa",
          bg: "rgba(167, 139, 250, 0.12)",
          border: "rgba(167, 139, 250, 0.35)",
        };
    }
  };

  const statusStyle = getStatusColor(project.status);

  return (
    <Card
      className={className}
      as="article"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      <div>
        {/* Category & Status Badge */}
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
          <span
            style={{
              fontSize: "var(--text-xs, 0.75rem)",
              fontFamily: "var(--font-mono)",
              color: "var(--accent-cyan)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              fontWeight: 500,
            }}
          >
            {project.category}
          </span>
          {project.status && (
            <span
              style={{
                fontSize: "0.7rem",
                fontFamily: "var(--font-mono)",
                color: statusStyle.color,
                background: statusStyle.bg,
                border: `1px solid ${statusStyle.border}`,
                padding: "0.18rem 0.55rem",
                borderRadius: "9999px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {project.status}
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3
          style={{
            fontSize: "var(--text-xl, 1.25rem)",
            fontWeight: "var(--font-bold, 700)",
            color: "var(--text-primary)",
            marginBottom: "0.25rem",
            letterSpacing: "-0.015em",
          }}
        >
          {project.title}
        </h3>

        {/* Contribution / Role */}
        {project.role && (
          <p
            style={{
              fontSize: "0.78rem",
              fontFamily: "var(--font-mono)",
              color: "var(--text-muted)",
              marginBottom: "var(--space-3, 0.75rem)",
            }}
          >
            Role: <span style={{ color: "var(--text-secondary)" }}>{project.role}</span>
          </p>
        )}

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
            marginBottom: "var(--space-5, 1.25rem)",
          }}
        >
          {project.technologies.map((tech) => (
            <li key={tech}>
              <span className="tech-tag">{tech}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "var(--space-3, 0.75rem)",
          borderTop: "1px solid var(--border-subtle)",
          marginTop: "auto",
        }}
      >
        <button
          type="button"
          onClick={onOpenDetails}
          style={{
            background: "none",
            border: "none",
            padding: 0,
            fontSize: "var(--text-xs, 0.75rem)",
            fontFamily: "var(--font-mono)",
            color: "var(--accent-primary)",
            cursor: "pointer",
            fontWeight: 500,
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
          }}
        >
          <span>View Architecture &amp; Scope</span>
          <span>→</span>
        </button>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              fontSize: "var(--text-xs, 0.75rem)",
              fontFamily: "var(--font-mono)",
              color: "var(--accent-cyan)",
              textDecoration: "none",
            }}
          >
            Demo ↗
          </a>
        )}
      </div>
    </Card>
  );
}
