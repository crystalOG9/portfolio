"use client";

import React, { useState } from "react";
import { getSkills } from "@/data";
import { Container, SectionHeader, Card } from "@/components/ui";
import { FadeIn } from "@/components/animations";

/**
 * Skills Section Component
 * Phase 07 - Interactive Skills System
 *
 * Filterable interactive skill matrix displaying Piyush Pawar's technical stack,
 * programming languages, creative 3D tools, and automation workflows.
 */
export function Skills() {
  const skillCategories = getSkills();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Capabilities" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend & DB" },
    { id: "creative", label: "Creative & 3D" },
    { id: "programming", label: "Languages" },
    { id: "tools", label: "Tools & Platforms" },
  ];

  const displayedCategories =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedCategory);

  return (
    <section id="skills" className="portfolio-section skills-section">
      <Container>
        <FadeIn delay={100}>
          <SectionHeader
            tag="Capabilities"
            title="Technical Toolchain & Stack"
            subtitle="The languages, frameworks, creative 3D systems, and automation platforms I work with."
          />
        </FadeIn>

        {/* Filter Navigation Tabs */}
        <FadeIn delay={200}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "var(--space-2, 0.5rem)",
              marginBottom: "var(--space-8, 2rem)",
            }}
          >
            {filterTabs.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id)}
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
                  {tab.label}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Skills Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--space-6, 1.5rem)",
          }}
        >
          {displayedCategories.map((group, groupIdx) => (
            <FadeIn key={group.id} delay={100 + groupIdx * 60}>
              <Card
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "var(--space-4, 1rem)",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "var(--text-base, 1rem)",
                        fontWeight: "var(--font-semibold, 600)",
                        color: "var(--text-primary)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {group.title}
                    </h3>
                    <span
                      style={{
                        fontSize: "var(--text-xs, 0.75rem)",
                        fontFamily: "var(--font-mono)",
                        color: "var(--accent-primary)",
                      }}
                    >
                      0{groupIdx + 1}
                    </span>
                  </div>

                  <ul
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "var(--space-2, 0.5rem)",
                    }}
                  >
                    {group.skills.map((skill) => (
                      <li key={skill.id}>
                        <span className="tech-tag">{skill.name}</span>
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
