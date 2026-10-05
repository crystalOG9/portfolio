import React from "react";
import { getPersonalInfo } from "@/data";
import { Container } from "@/components/ui";

/**
 * Footer Component
 * Phase 02 - Personal Information, Visual Identity & Initial Motion
 *
 * Minimalist, dark-cinematic footer with copyright and verified social links.
 */
export function Footer() {
  const personal = getPersonalInfo();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="portfolio-footer"
      style={{
        borderTop: "1px solid var(--border-subtle)",
        padding: "var(--space-10, 2.5rem) 0",
        marginTop: "var(--space-20, 5rem)",
        color: "var(--text-muted)",
        fontSize: "var(--text-xs, 0.75rem)",
        fontFamily: "var(--font-mono)",
        position: "relative",
        zIndex: "var(--z-content)",
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "var(--space-4, 1rem)",
          }}
        >
          <div>
            <p>
              © {personal.name} · Designed & Engineered
            </p>
          </div>

          <ul
            style={{
              display: "flex",
              gap: "var(--space-6, 1.5rem)",
            }}
          >
            {Object.entries(personal.socials).map(([platform, url]) => {
              if (!url) return null;
              return (
                <li key={platform}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    {platform} ↗
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
